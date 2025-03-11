import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../title/title.component";
import { GenericDrug } from '../models/GenericDrug';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-genericdrugs',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TitleComponent],
  standalone: true,
  templateUrl: './genericdrugs.component.html',
  styleUrl: './genericdrugs.component.css'
})
export class GenericdrugsComponent {

  public genericdrugForm?: FormGroup;
  public title = 'Generic Drugs'
  public selectedGenericdrug?: GenericDrug;

  public genericdrugsList = [
    { id: 1, activeIngredient: 'Acetaminofeno', laboratory: 'Stada', expirationDate: '03/15/2026', quantity: 1, price: '$2,65'},
    { id: 2, activeIngredient: 'Clonazepam', laboratory: 'Mylan', expirationDate: '07/04/2026', quantity: 1, price: '$6,47' },
    { id: 3, activeIngredient: 'Ciclobenzaprina', laboratory: 'Ratiopharm', expirationDate: '11/22/2027', quantity: 1, price: '$4,51' },
    { id: 4, activeIngredient: 'Metilfenidato', laboratory: 'Actavis', expirationDate: '01/30/2028', quantity: 1, price: '$7,24' },
    { id: 5, activeIngredient: 'Sinvastatina', laboratory: 'Sandoz', expirationDate: '10/18/2025', quantity: 1, price: '$7,35' },
    { id: 6, activeIngredient: 'Zolpidem', laboratory: 'Stada', expirationDate: '05/01/2026', quantity: 1, price: '$5,25' },
  ];

  constructor(private fb: FormBuilder)
    {
      this.genericdrugForm = this.fb.group({
        activeIngredient: ['', Validators.required],
        laboratory: ['', Validators.required],
        expirationDate: ['', Validators.required],
        quantity: ['', Validators.required],
        price: ['', Validators.required]
      });
    }
  
  get form() {
    return this.genericdrugForm;
  }

  genericSubmit()
  {
    console.log(this.genericdrugForm?.value)
  }

  selectGenericdrug(genericdrug : GenericDrug) {
    this.selectedGenericdrug = genericdrug;
    this.genericdrugForm?.patchValue(genericdrug);
  }

  back() {
    this.selectedGenericdrug = undefined;
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