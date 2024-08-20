import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaPauloComponent } from './historia-paulo.component';

describe('HistoriaPauloComponent', () => {
  let component: HistoriaPauloComponent;
  let fixture: ComponentFixture<HistoriaPauloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriaPauloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaPauloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
