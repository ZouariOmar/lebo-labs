import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './sectors.html',
  styleUrl: './sectors.css',
})

export class Sectors { }
