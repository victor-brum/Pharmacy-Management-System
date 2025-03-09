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
  public selectedGenericdrug?: string;

  public genericdrugsList = [
    { id: 1, Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '$12,90'},
    { id: 2, Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '$12,90' },
    { id: 3, Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '$12,90' },
    { id: 4, Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '$12,90' },
    { id: 5, Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '$12,90' },
    { id: 6, Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '$12,90' },
  ];

  back() {
    this.selectedGenericdrug = '';
  }

  selectGenericdrug(genericdrug : any) {
    this.selectedGenericdrug = genericdrug.Active_ingredient;
  }

  selectBranddrug(genericdrug: any) {
    this.selectedGenericdrug = genericdrug.Active_ingredient;
  }

   formatPrice(event: any) {
    let value = event.target.value;

    value = value.replace(/[^\d]/g, '');

    if (value.length > 2) {
      value = value.substring(0, value.length - 2) + ',' + value.substring(value.length - 2);
    }

    event.target.value = value;
  }
}