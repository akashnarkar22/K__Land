import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user: any = {};

  showOldPassword: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    // Fetch user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log(this.user)
      console.log('User Phone Code:', this.user.phone_code); 
    }
    
  }

  togglePassword(type: string) {
    if (type === 'old') this.showOldPassword = !this.showOldPassword;
    if (type === 'new') this.showNewPassword = !this.showNewPassword;
    if (type === 'confirm') this.showConfirmPassword = !this.showConfirmPassword;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.toastr.error('', 'Logout');
  }
}
