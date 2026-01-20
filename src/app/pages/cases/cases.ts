import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './cases.html',
  styleUrl: './cases.css',
})

export class Cases { }
