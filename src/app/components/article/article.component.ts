import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() X:any;
  @Output() newBlog:EventEmitter <any> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  Delete(id){
    
  }

}
