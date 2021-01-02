import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { Routes, CanActivate } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { PostComponent } from './post/post.component';
import { PostpageComponent } from './postpage/postpage.component';

// add " canActivate:[AuthGuard] " to protected components
// routes
export const appRoutes: Routes = [
    {
        path: "signup", component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo : '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'post', component: PostComponent, canActivate:[AuthGuard]
    },
    {
        path: 'postpage/:id', component: PostpageComponent, canActivate:[AuthGuard]
    }
    
];