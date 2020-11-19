import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// directives
import { TopToBottomDirective } from './directives/gsap/top-to-bottom-animation.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FadeInAnimationDirective } from './directives/gsap/fade-in-animation.directive';
import { RightToLeftAnimationDirective } from './directives/gsap/right-to-left-animation.directive';
import { TopToBottomDirective2 } from './directives/gsap/top-to-bottom-animation2.directive';
// forms
import { FormsModule } from '@angular/forms';
// components
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PostListComponent } from './post-list/post-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
// routes
import { appRoutes } from './routes'; 

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PostListComponent,
    FadeInAnimationDirective,
    RightToLeftAnimationDirective,
    LoginFormComponent,
    RegisterFormComponent,
    AddPostComponent,
    PostComponent,
    TopToBottomDirective,
    TopToBottomDirective2,
    NewPostComponent,
    UserComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
