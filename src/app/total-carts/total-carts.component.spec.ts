import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCartsComponent } from './total-carts.component';

describe('TotalCartsComponent', () => {
  let component: TotalCartsComponent;
  let fixture: ComponentFixture<TotalCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
