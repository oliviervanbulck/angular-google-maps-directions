import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  origin = '';
  destination = '';
  lat = 51.1887493;
  lng = 4.4586847;
  travelMode = 'WALKING';
  distance: number;
  duration: number;
  steps = [];
  getRoute = (origin: string, dest: string, travelMode: string): void => {
    console.log('test');
    this.origin = origin;
    this.destination = dest;
    this.travelMode = travelMode;
  }
  onChangeRoute(event) {
    this.distance = event.routes[0].legs[0].distance.value;
    this.duration = event.routes[0].legs[0].duration.value;
    this.steps = event.routes[0].legs[0].steps;
  }
}
