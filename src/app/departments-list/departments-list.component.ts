import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-departments-list',
  template:
  `<h3>
  Department List
</h3>
<ul class="items">
  <li (click) ="onSelect(department)" *ngFor="let department of departments">
     <span class="badge">{{department.id}}</span> {{department.name}}
  </li>
</ul>` ,
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
// [class.selected]="isSelected(department)" (click)="onSelect(department)
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
]
  constructor(private router:Router , private route:ActivatedRoute) { }

  ngOnInit() {
  }
  onSelect(department)
  {
        //this.router.navigate(['/departments',department.id]);

        //add relative routing
        this.router.navigate([department.id],{relativeTo:this.route});
  }

}
