import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../title/title.component";
import { BrandDrug } from '../models/BrandDrug';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-branddrugs',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TitleComponent],
  standalone: true,
  templateUrl: './branddrugs.component.html',
  styleUrl: './branddrugs.component.css'
})
export class BranddrugsComponent {

  public branddrugForm?: FormGroup;
  public title = 'Brand Drugs';
  public selectedBranddrug?: BrandDrug;

  public branddrugsList = [
    { id: 1, name: 'Tylenol', activeIngredient: 'Acetaminofeno', laboratory: 'McNeil', expirationDate: '03/29/2027', quantity: 1, price: '$5,90'},
    { id: 2, name:'Rivotril', activeIngredient: 'Clonazepam', laboratory: 'Novartis', expirationDate: '05/26/2028', quantity: 1, price: '$18,50' },
    { id: 3, name:'Miosan', activeIngredient: 'Ciclobenzaprina', laboratory: 'Eurofarma', expirationDate: '02/01/2029', quantity: 1, price: '$12,90' },
    { id: 4, name:'Ritalina', activeIngredient: 'Metilfenidato', laboratory: 'Novartis', expirationDate: '04/15/2027', quantity: 1, price: '$20,70' },
    { id: 5, name:'Zocor', activeIngredient: 'Sinvastatina', laboratory: 'Merck', expirationDate: '12/01/2026', quantity: 1, price: '$21,00' },
    { id: 6, name:'Stilnox', activeIngredient: 'Zolpidem', laboratory: 'Sanofi', expirationDate: '07/15/2028', quantity: 1, price: '$15,00' },
  ];

  constructor(private fb: FormBuilder)
  {
    this.branddrugForm = this.fb.group({
      name: ['', Validators.required],
      activeIngredient: ['', Validators.required],
      laboratory: ['', Validators.required],
      expirationDate: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  get form() {
    return this.branddrugForm;
  }

  branddrugSubmit()
  {
    console.log(this.branddrugForm?.value)
  }

  selectBranddrug(branddrug: BrandDrug) {
    this.selectedBranddrug = branddrug;
    this.branddrugForm?.patchValue(branddrug);
  }

  back() {
    this.selectedBranddrug = undefined;
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