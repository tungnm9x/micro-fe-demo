import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'micro-fe-test-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  listMenu: MenuItem[] = [
    {
      url: '/main/profile',
      label: 'Profile',
      icon: '../../../../../assets/icons/menu/settings-light.svg',
      iconActive: '../../../../../assets/icons/menu/settings-dark.svg',
    },
    {
      url: '/main/dashboard',
      label: 'Dashboard',
      icon: '../../../../../assets/icons/menu/dashboard-light.svg',
      iconActive: '../../../../../assets/icons/menu/dashboard-dark.svg'
    },
    {
      url: '/main/sales-plan',
      label: 'Sales',
      icon: '../../../../../assets/icons/menu/rate-management-light.svg',
      iconActive: '../../../../../assets/icons/menu/rate-management-dark.svg',
      subMenu: [
        {url: '/cockpit', label: 'Sales Cockpit'},
      ],
    }
  ];
}
