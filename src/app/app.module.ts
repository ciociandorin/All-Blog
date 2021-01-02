import { PostService } from './shared/post.service';
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
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostpageComponent } from './postpage/postpage.component';

// routes
import { appRoutes } from './routes'; 

import { AuthGuard } from './auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FadeInAnimationDirective,
    RightToLeftAnimationDirective,
    TopToBottomDirective,
    TopToBottomDirective2,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    HomeComponent,
    PostComponent,
    PostpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
<<<<<<< Updated upstream
    HttpClientModule,
=======
    HttpClientModule
>>>>>>> Stashed changes
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    , AuthGuard, UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
