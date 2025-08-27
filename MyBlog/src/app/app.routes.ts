import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

export const routes: Routes = [

    {
        path: 'Home',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'About',
        component: AboutComponent,
        title: 'About Page'
    },
    {
        path: 'Contact',
        component: ContactComponent,
        title: 'Contact Page'
    },
    {
        path: 'Tutorials',
        component: TutorialsComponent,
        title: 'Tutorials page'
    }

];
