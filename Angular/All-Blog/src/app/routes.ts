
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: "signup", component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: '', redirectTo : 'signup', pathMatch: 'full'
    }
];