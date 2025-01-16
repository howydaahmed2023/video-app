import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  private router = inject(Router)
  ngOnInit(): void {

  }

  movieSearch(text:string){
    text = text.trim();
    if(text.length === 0){
      return;
    }
    this.router.navigate(['/search',text])
      }
}
