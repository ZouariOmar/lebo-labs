import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';

@Component({
  selector: 'app-ops',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './ops.html',
  styleUrl: './ops.css',
})
export class Ops {
  public title: string;

  constructor() {
    this.title = "NeuronOps";
  }
}
