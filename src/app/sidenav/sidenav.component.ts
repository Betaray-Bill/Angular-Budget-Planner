import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {


  constructor(private router:Router){}

  onDash(){
    this.router.navigate(['/budget/dashboard']);
  }

  onProfile(){
    this.router.navigate(['/budget/profile']);
  }

  onPrev(){
    this.router.navigate(['/budget/dashboard']);
  }

  onLogOut(){
    this.router.navigate(['/budget/dashboard']);
  }
}
