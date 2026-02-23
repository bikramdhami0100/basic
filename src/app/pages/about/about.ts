import { Component ,signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { single } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']  // also note: styleUrls (plural)
})
export class About {

  constructor(public route: ActivatedRoute) {}

  // ngOnInit() {
  //  let data=this.route.queryParams.subscribe(params => console.log(params));
  // }
  name=signal("");
  age=signal(0);

  ngOnInit(){
    let data=this.route.params.subscribe((item)=>{
      console.log(item);
       this.name.set(item['name']);
       this.age.set(item['age']);
    })
  }
}