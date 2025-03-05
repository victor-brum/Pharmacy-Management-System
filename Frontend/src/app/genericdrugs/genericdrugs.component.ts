import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genericdrugs',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './genericdrugs.component.html',
  styleUrl: './genericdrugs.component.css'
})
export class GenericdrugsComponent {

  title = 'Generic Drugs'

  public genericdrugsList = [
    { nome: 'Novalgina' },
    { nome:'Rivotril' },
    { nome:'Dorflex' },
    { nome:'Ritalina' },
    { nome:'Sivastatina' },
    { nome:'Zolpidem' },
  ];
}