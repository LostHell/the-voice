import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardRenderComponent } from './video-card-render.component';

describe('VideoCardRenderComponent', () => {
  let component: VideoCardRenderComponent;
  let fixture: ComponentFixture<VideoCardRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCardRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
