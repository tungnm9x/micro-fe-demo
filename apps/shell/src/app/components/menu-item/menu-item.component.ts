import { Component, Input } from '@angular/core';

@Component({
  selector: 'micro-fe-test-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() hotelId: string;
  @Input() icon: string;
  @Input() iconActive: string;
  @Input() label: string;
  @Input() subMenu: { url: string; label: string }[];
  @Input() url: string;
}
