import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog:any=[
    {id:1 , date:"24 avril 2009" ,description:"here new food"},
    {id:2 , date:"20 juin 2009" ,description:"here new food"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
