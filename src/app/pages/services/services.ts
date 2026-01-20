import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';
import WebsiteInfo from '../../models/website-info';

@Component({
  selector: 'app-services',
  imports: [Navbar, Footer],
  templateUrl: './services.html',
  styleUrl: './services.css',
})

export class Services {
  public readonly website!: WebsiteInfo;

  constructor() {
    this.website = new WebsiteInfo(
      "Lebo",
      "Labs"
    )
  }
} // Services class
