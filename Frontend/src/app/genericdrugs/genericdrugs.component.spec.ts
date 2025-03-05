import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericdrugsComponent } from './genericdrugs.component';

describe('GenericdrugsComponent', () => {
  let component: GenericdrugsComponent;
  let fixture: ComponentFixture<GenericdrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericdrugsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericdrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
