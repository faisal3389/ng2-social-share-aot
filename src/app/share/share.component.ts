import { Component, OnInit } from '@angular/core';
import { CeiboShare } from 'ng2-social-share';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
  directives: [CeiboShare]
})
export class ShareComponent implements OnInit {

  constructor() { }
  private url = 'amazon.com';
  ngOnInit() {
  }

}
