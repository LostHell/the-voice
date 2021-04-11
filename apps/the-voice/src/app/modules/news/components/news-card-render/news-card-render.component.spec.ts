import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardRenderComponent } from './news-card-render.component';

describe('NewsCardRenderComponent', () => {
  let component: NewsCardRenderComponent;
  let fixture: ComponentFixture<NewsCardRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCardRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
