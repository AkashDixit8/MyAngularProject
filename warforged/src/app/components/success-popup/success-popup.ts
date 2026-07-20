import { Component } from '@angular/core';

@Component({
  selector: 'app-success-popup',
  imports: [],
  templateUrl: './success-popup.html',
  styleUrl: './success-popup.css'
})
export class SuccessPopup {

  visible = false;
  message = '';

  show(message: string) {

    this.message = message;
    this.visible = true;

    setTimeout(() => {
      this.visible = false;
    }, 1800);

  }

}