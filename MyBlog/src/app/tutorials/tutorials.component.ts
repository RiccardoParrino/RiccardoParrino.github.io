import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tutorials',
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.css'
})
export class TutorialsComponent {

}
