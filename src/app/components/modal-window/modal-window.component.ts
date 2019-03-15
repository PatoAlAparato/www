import { Component, Input } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html'
})
export class ModalWindowComponent {
  @Input() title: string;
  @Input() close;
  @Input() dismiss;
}

