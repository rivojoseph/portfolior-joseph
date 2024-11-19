import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlayoutComponent } from './hlayout.component';

describe('HlayoutComponent', () => {
  let component: HlayoutComponent;
  let fixture: ComponentFixture<HlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
