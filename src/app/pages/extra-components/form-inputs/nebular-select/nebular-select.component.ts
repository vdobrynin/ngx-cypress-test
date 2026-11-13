import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'ngx-nebular-select',
  templateUrl: 'nebular-select.component.html',
  styleUrls: ['nebular-select.component.scss'],
})
export class NebularSelectComponent {

  commonSelectedItem = '2';
  selectedItem;
}
