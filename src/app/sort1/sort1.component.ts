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
    this.sortable = sortable.create(this.el, {
      handle: '.my-handle',
      onUpdate: (evt) => {
        console.log('kpi list :', this.kpis);
        this.updateKpisSequence(evt.oldIndex, evt.newIndex);
      }
    });
  }

  updateKpisSequence(oldIndex: number, newIndex: number) {
    const selectedEle = this.kpis[oldIndex];

    console.log('selectedEle: ', selectedEle);
    const startIndex = oldIndex < newIndex ? oldIndex : newIndex;
    const endIndex = oldIndex < newIndex ? newIndex : oldIndex;
    console.log('....', oldIndex, '---->', newIndex);
    console.log('start :', startIndex, ' end : ', endIndex);

    if (oldIndex < newIndex) {
      for (let i = startIndex + 1; i <= endIndex; i++) {
        this.kpis[i - 1] = this.kpis[i];
      }
    } else {
      for (let i = endIndex - 1; i >= startIndex; i--) {
        this.kpis[i + 1] = this.kpis[i];
      }
    }
    this.kpis[newIndex] = selectedEle;
    console.log(this.kpis);
  }
}
