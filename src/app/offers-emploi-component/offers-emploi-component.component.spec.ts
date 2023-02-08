import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersEmploiComponentComponent } from './offers-emploi-component.component';

describe('OffersEmploiComponentComponent', () => {
  let component: OffersEmploiComponentComponent;
  let fixture: ComponentFixture<OffersEmploiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersEmploiComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersEmploiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
