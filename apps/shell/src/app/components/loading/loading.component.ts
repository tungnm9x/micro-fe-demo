import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'micro-fe-test-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class LoadingComponent {}
