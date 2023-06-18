import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { generateId } from 'src/app/shared/generate';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blogForm:FormGroup;
  blog:any={};
  constructor(private router:Router) { }

  ngOnInit() {
  }
  addBlogs(){
    console.log("here the object of",this.blog);
    let blogstab=JSON.parse(localStorage.getItem("blogs")||"[]");
    this.blog.id=generateId(blogstab);
    blogstab.push(this.blog);
    localStorage.setItem("blogs",JSON.stringify(blogstab));
     this.router.navigate(["blogs"]);
  }
 

}
