import { Component } from '@angular/core';
import { Navbar } from '../../../core/components/navbar/navbar';
import { Footer } from '../../../core/components/footer/footer';
import WebsiteInfo from '../../models/website-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [Navbar, Footer],
  styleUrl: './home.css',
})

export class Home {
  public readonly website!: WebsiteInfo;

  constructor() {
    this.website = new WebsiteInfo(
      "Lebo",
      "Labs"
    )
  }
} // Home class
