import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingCardRenderComponent } from './ranking-card-render.component';

describe('RankingCardRenderComponent', () => {
  let component: RankingCardRenderComponent;
  let fixture: ComponentFixture<RankingCardRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingCardRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingCardRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
