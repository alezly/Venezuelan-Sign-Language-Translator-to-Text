import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppScreenComponent } from './app-screen.component';

describe('AppScreenComponent', () => {
  let component: AppScreenComponent;
  let fixture: ComponentFixture<AppScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
