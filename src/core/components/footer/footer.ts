import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import ContactInfo from '../../../app/models/contact-info';
import WebsiteInfo from '../../../app/models/website-info';

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
      "https://github.com/ZouariOmar",
      "https://www.linkedin.com/in/zouari-omar",
      "https://www.facebook.com/ZouariOmarG"
    )
    this.website = new WebsiteInfo(
      "Lebo",
      "Labs"
    )
  }
} // Footer class

