import { Component, Input } from '@angular/core';

@Component({
  selector: 'micro-fe-test-weekly-overview-table',
  templateUrl: './weekly-overview-table.component.html',
  styleUrls: ['./weekly-overview-table.component.css']
})
export class WeeklyOverviewTableComponent {
  @Input() title: string;
  @Input() value: any;
}
