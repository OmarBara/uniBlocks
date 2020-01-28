import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  service =[ {id:1, service:'alivator', paymentStatus:"dept", status:'active', dateOfSubscreption:'1-1-2019'},
   {id:2, service:'cleaning', paymentStatus:"payed", status:'active', dateOfSubscreption:'2-2-2019'}
  ]


}
