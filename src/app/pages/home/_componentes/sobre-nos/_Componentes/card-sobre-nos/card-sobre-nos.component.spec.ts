import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSobreNosComponent } from './card-sobre-nos.component';

describe('CardSobreNosComponent', () => {
  let component: CardSobreNosComponent;
  let fixture: ComponentFixture<CardSobreNosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSobreNosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSobreNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
