import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndRegisterBackgroundComponent } from './login-and-register-background.component';

describe('LoginAndRegisterBackgroundComponent', () => {
  let component: LoginAndRegisterBackgroundComponent;
  let fixture: ComponentFixture<LoginAndRegisterBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAndRegisterBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAndRegisterBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
