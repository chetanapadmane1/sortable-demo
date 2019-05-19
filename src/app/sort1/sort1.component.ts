import { Component, OnInit } from '@angular/core';
import * as sortable from 'sortablejs';

@Component({
  selector: 'app-sort1',
  templateUrl: './sort1.component.html',
  styleUrls: ['./sort1.component.scss']
})
export class Sort1Component implements OnInit {
  el;
  sortable: sortable;

  kpis = ['visits', 'unique visits', 'bounce rate', 'avg time'];

  constructor() { }

  ngOnInit() {
    this.el = document.getElementById('items');
    this.sortable = sortable.create(this.el);
  }

}
