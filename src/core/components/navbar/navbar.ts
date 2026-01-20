import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import WebsiteInfo from '../../../app/models/website-info';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  public readonly website!: WebsiteInfo;
  public menuOpen: boolean = false;


  constructor() {
    this.website = new WebsiteInfo(
      "Lebo",
      "Labs"
    )
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
} // Navbar class
