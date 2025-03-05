import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branddrugs',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './branddrugs.component.html',
  styleUrl: './branddrugs.component.css'
})
export class BranddrugsComponent {

  title = 'Brand Drugs'

  public branddrugsList = [
    { nome: 'Novalgina' },
    { nome:'Rivotril' },
    { nome:'Dorflex' },
    { nome:'Ritalina' },
    { nome:'Sivastatina' },
    { nome:'Zolpidem' },
  ];
}