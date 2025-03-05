import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-genericdrugs',
  imports: [CommonModule, TitleComponent],
  standalone: true,
  templateUrl: './genericdrugs.component.html',
  styleUrl: './genericdrugs.component.css'
})
export class GenericdrugsComponent {

  public title = 'Generic Drugs'

  public genericdrugsList = [
    { nome: 'Novalgina' },
    { nome:'Rivotril' },
    { nome:'Dorflex' },
    { nome:'Ritalina' },
    { nome:'Sivastatina' },
    { nome:'Zolpidem' },
  ];
}