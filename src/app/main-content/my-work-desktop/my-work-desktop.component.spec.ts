import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkDesktopComponent } from './my-work-desktop.component';

describe('MyWorkDesktopComponent', () => {
  let component: MyWorkDesktopComponent;
  let fixture: ComponentFixture<MyWorkDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWorkDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyWorkDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
