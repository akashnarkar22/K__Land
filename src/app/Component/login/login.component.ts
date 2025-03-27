import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isPasswordVisible: boolean = false; 
  constructor(
    private fb: FormBuilder,
     
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    console.log("LoginComponent initialized");
  }
  togglePassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    const passwordField = document.getElementById('password') as HTMLInputElement;
    if (passwordField) {
      passwordField.type = this.isPasswordVisible ? 'text' : 'password';
    }
  }
  onSubmit() {
    const payload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      phone_code: "",
    };
  
    this.http.post<any>('https://dev.myemprove.com/api/ver3api/student-login?lang=en&store=KW', payload)
      .subscribe({
        next: (response) => {
          if (response && response.success && payload.email === 'test@yopmail.com' && payload.password === '123456') {  
            console.log('Login successful', response);
  
            //  localStorage
            localStorage.setItem('user', JSON.stringify(response.data)); 
            localStorage.setItem('token', response.token);  
  
            this.router.navigate(['/dashboard']);  // to dashboard
          } else {
            console.error('Login failed', response?.message || 'Invalid credentials');
            this.toastr.error('Invalid credentials. Please try again.', 'Login Failed');
          }
        },
        error: (error) => {
          console.error('Error during login', error);
          this.toastr.error('An error occurred. Please try again.', 'Login Failed');
        }
      });
  }
  
  
}
