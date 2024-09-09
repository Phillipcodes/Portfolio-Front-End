import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFooterDesktopComponent } from './pre-footer-desktop.component';

describe('PreFooterDesktopComponent', () => {
  let component: PreFooterDesktopComponent;
  let fixture: ComponentFixture<PreFooterDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreFooterDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreFooterDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
