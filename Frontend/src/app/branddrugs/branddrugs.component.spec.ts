import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranddrugsComponent } from './branddrugs.component';

describe('BranddrugsComponent', () => {
  let component: BranddrugsComponent;
  let fixture: ComponentFixture<BranddrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranddrugsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranddrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
