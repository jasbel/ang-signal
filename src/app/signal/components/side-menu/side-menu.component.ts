import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { title: 'contador', router: 'counter' },
    { title: 'usuario', router: 'user-info' },
    { title: 'Mutaciones', router: 'properties' },
  ];
}
