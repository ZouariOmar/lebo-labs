import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import ContactInfo from '../../../models/contact-info';
import WebsiteInfo from '../../../models/website-info';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})

export class Footer {
  public readonly currentYear!: number;
  public readonly contact!: ContactInfo;
  public readonly website!: WebsiteInfo;

  constructor() {
    this.currentYear = new Date().getFullYear();
    this.contact = new ContactInfo(
      21693490909,
      "zouariomar20@gmail.com",
      "ZouariOmar",
      "zouari-omar",
      "ZouariOmarG"
    )
    this.website = new WebsiteInfo(
      "Lebo",
      "Labs"
    )
  }
} // Footer class

