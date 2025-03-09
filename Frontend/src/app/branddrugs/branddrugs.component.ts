import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-branddrugs',
  imports: [CommonModule, TitleComponent],
  standalone: true,
  templateUrl: './branddrugs.component.html',
  styleUrl: './branddrugs.component.css'
})
export class BranddrugsComponent {

  public title = 'Brand Drugs';
  public selectedBranddrug?: string;

  public branddrugsList = [
    { id: 1, name: 'Novalgina', Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '$12,90'},
    { id: 2, name:'Rivotril', Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '$12,90' },
    { id: 3, name:'Dorflex', Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '$12,90' },
    { id: 4, name:'Ritalina', Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '$12,90' },
    { id: 5, name:'Sivastatina', Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '$12,90' },
    { id: 6, name:'Zolpidem', Active_ingredient: 'null', Laboratory: 'null', Expiration_Date: '12/12/2025', Quantity: 1, Price: '$12,90' },
  ];

  back() {
    this.selectedBranddrug = '';
  }

  selectBranddrug(branddrug: any) {
    this.selectedBranddrug = branddrug.name;
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