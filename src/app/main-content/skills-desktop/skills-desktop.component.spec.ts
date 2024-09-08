import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDesktopComponent } from './skills-desktop.component';

describe('SkillsDesktopComponent', () => {
  let component: SkillsDesktopComponent;
  let fixture: ComponentFixture<SkillsDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
