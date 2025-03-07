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
    { id: 1, name: 'Novalgina', Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '12,90'},
    { id: 2, name:'Rivotril', Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '12,90' },
    { id: 3, name:'Dorflex', Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '12,90' },
    { id: 4, name:'Ritalina', Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '12,90' },
    { id: 5, name:'Sivastatina', Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '12,90' },
    { id: 6, name:'Zolpidem', Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '12,90' },
  ];
}