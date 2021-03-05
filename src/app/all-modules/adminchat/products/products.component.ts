import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
public _productData:any[];
public _productSlots:any[];
  constructor() { }

  ngOnInit(): void {
    this._productData=[
      {
      "img":"assets/admin/img/profiles/apple-2.jpg",
      "p_name": "Apple",
      "p_id": 1,
      "p_cost": 30,
      "p_availability": 1,
      "p_details": {"preparation_time":"5"}
      },
      {

      "img":"assets/admin/img/profiles/mango.jpg",
      "p_name": "Mango",
      "p_id": 2,
      "p_cost": 50,
      "p_availability": 1,
      "p_details": {"preparation_time":"2"}
      },
      {

      "img":"assets/admin/img/profiles/banana.jpg",
      "p_name": "Bananna",
      "p_id": 3,
      "p_cost": 5,
      "p_availability": 0,
      "p_details": {"preparation_time":"1"}
      },
      {
      "img":"assets/admin/img/profiles/orange.jpg",
      "p_name": "Orange",
      "p_id": 4,
      "p_cost": 25,
      "p_availability": 1,
      "p_details": {"preparation_time":"8"}
      }
     ]
     this._productSlots=[
      {
      "delivery_day":0,
      "delivery_slots":[
      "07:00:00",
      "17:00:00"
      ]
      },
      {
      "delivery_day":1,
      "delivery_slots":[
      "07:00:00",
      "15:00:00",
      "20:00:00"
      ]
      },
      {
      "delivery_day":2,
      "delivery_slots":[
      "07:00:00",
      "14:00:00",
      "21:00:00"
      ]
      },
      {
      "delivery_day":5,
      "delivery_slots":[
      "06:00:00",
      "20:00:00"
      ]
      },
      {
      "delivery_day":6,
      "delivery_slots":[
      "10:00:00",
      "15:00:00"
      ]
      }
     ]


  }

}
