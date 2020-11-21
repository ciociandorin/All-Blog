import { UserService } from './shared/user.service';
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
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
// routes
import { appRoutes } from './routes'; 

import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    FadeInAnimationDirective,
    RightToLeftAnimationDirective,
    AddPostComponent,
    TopToBottomDirective,
    TopToBottomDirective2,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
