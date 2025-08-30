import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  content = '';

  posts = [
    { "id": "basic-testing-in-angular", "text": "Basic testing in Angular" },
    { "id": "advanced-component-in-angular", "text": "Advanced component in angular" },
    { "id": "http-requests-in-angular", "text": "Http requests in Angular"},
    { "id": "forms-in-angular", "text": "Forms in Angular"}
  ];

  constructor (private route: ActivatedRoute) {}

  ngOnInit () {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.content = this.findContentById(id);
  }

  findContentById(id:string) : string {
    for (let post of this.posts) {
      if (post.id == id) {
        return post.text;
      }
    }
    return "";
  }

}
