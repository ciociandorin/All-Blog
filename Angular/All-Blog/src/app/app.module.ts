import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PostListComponent } from './post-list/post-list.component';
import { FadeInAnimationDirective } from './directives/gsap/fade-in-animation.directive';
import { RightToLeftAnimationDirective } from './directives/gsap/right-to-left-animation.directive';
import { LoginRegisterBackgroundComponent } from './login-register-background/login-register-background.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PostListComponent,
    FadeInAnimationDirective,
    RightToLeftAnimationDirective,
    LoginRegisterBackgroundComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AddPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
