import { Component, OnInit } from '@angular/core';
import { initHotel, selectAllHotel } from '@micro-fe-test/store-sharing';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'micro-fe-test-shell-layout',
  templateUrl: './shell-layout.component.html',
})
export class ShellLayoutComponent implements OnInit {

  hotelList$ = this.store.pipe(select(selectAllHotel));

  constructor(
    private store: Store
  ) {

  }

  ngOnInit(): void {
    this.store.dispatch(initHotel());
  }
}
