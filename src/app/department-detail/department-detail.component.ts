import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template:`
  <h2> You selected department with id = {{departmentId}}</h2>

 
    <button (click)="showOverview()"> overview</button>
    <br><br><br>
  <router-outlet></router-outlet>

  <button (click)="goPrevious()">previous</button>
  <button (click)="goNext()">next</button>
  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  //  let id = parseInt(this.route.snapshot.paramMap.get('id'));
  //   this.departmentId = id;
  this.route.paramMap.subscribe((params:ParamMap)=>
  {
    let id =  parseInt(params.get('id'));
    this.departmentId=id;
  });
  }
  goPrevious()
  {
    let perviousid =  this.departmentId-1;
      this.router.navigate(['/departments',perviousid]);
   }
  goNext()
  {
    let nextid =  this.departmentId+1;
    this.router.navigate(['/departments',nextid]);
  }
  showOverview()
  {
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
}
