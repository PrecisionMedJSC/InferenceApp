import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeAlgoComponent } from './analyze-algo.component';

describe('AnalizeAlgoComponent', () => {
  let component: AnalyzeAlgoComponent;
  let fixture: ComponentFixture<AnalyzeAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalyzeAlgoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
