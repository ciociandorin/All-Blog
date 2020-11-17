import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PostListComponent } from './post-list/post-list.component';
import { FadeInAnimationDirective } from './directives/gsap/fade-in-animation.directive';
import { RightToLeftAnimationDirective } from './directives/gsap/right-to-left-animation.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PostListComponent,
    FadeInAnimationDirective,
    RightToLeftAnimationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
