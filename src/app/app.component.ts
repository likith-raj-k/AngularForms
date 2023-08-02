import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public onSubmit(theForm: NgForm) {
      console.log(theForm.value.username);
      console.log(theForm.value.password);
  }
}

