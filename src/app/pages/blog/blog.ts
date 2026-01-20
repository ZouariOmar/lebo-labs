import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})

export class Blog { }
