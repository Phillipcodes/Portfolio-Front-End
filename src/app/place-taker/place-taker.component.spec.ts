import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceTakerComponent } from './place-taker.component';

describe('PlaceTakerComponent', () => {
  let component: PlaceTakerComponent;
  let fixture: ComponentFixture<PlaceTakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceTakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
