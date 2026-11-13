import { Component, ViewChild } from '@angular/core';

@Component({
  standalone: false,
  selector: 'ngx-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss'],
})
export class AccordionComponent {

  @ViewChild('item', { static: true }) accordion;

  toggle() {
    this.accordion.toggle();
  }
}
