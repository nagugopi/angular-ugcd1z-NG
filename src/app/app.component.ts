import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  //FOR DATA ONE/TWO WAY BINDING/////
  // className = 'test';
  // test = 'render the text <script></script>';
  // print(event) {
  //   console.log(event);
  //   this.name = event.target.value;
  // }
  users =[
    { name: 'nagu', age: 24, gender: 'm' },
    { name: 'pooja', age: 24 },
    { name: 'gopi', age: 24, gender: 'm' },
    { name: 'atchu', age: 24, gender: 'f' },
    { name: 'max', age: 24, gender: 'm' },
    { name: 'pooja', age: 24, gender: 'f' }
  ];
}
