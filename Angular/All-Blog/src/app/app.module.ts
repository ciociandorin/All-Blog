import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavBarComponent } from './home-nav-bar/home-nav-bar.component';
import { HomePostListComponent } from './home-post-list/home-post-list.component';
import { LoginAndRegisterBackgroundComponent } from './login-and-register-background/login-and-register-background.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FadeInAnimationDirective } from './directives/gsap/fade-in-animation.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavBarComponent,
    HomePostListComponent,
    LoginAndRegisterBackgroundComponent,
    LoginFormComponent,
    RegisterFormComponent,
    FadeInAnimationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
