import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']  // also note: styleUrls (plural)
})
export class About {

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
   let data=this.route.queryParams.subscribe(params => console.log(params));
  }
}