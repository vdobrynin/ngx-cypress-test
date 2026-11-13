import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'ngx-components',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class LayoutComponent {
}
