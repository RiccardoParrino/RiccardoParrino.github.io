import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [

    {   path: '',
        redirectTo: 'home', 
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Page'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact Page'
    },
    {
        path: 'tutorials',
        component: TutorialsComponent,
        title: 'Tutorials page'
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        title: 'Portfolio page'
    },
    {
        path: 'tutorials/post/:id',
        component: PostComponent
    }

];
