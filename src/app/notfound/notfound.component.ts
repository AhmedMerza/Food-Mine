import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  @Input('message') message: string = 'Nothing found';
  @Input('resetLinkText') resetLinkText: string = 'Reset';
  @Output ('onReset') reset = new EventEmitter();

  onReset() {
    this.reset.emit();
  }

}
