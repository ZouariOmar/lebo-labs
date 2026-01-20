import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';
import WebsiteInfo from '../../models/website-info';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {
  public readonly website!: WebsiteInfo;

  constructor() {
    this.website = new WebsiteInfo(
      "Lebo",
      "Labs"
    )
  }
} // About class
