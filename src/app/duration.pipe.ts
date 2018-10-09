import { Pipe, PipeTransform } from '@angular/core';

/*
 * Pipe that replaces a number of seconds in a readable version of the duration.
 */

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(seconds: number, hourName: string = 'hours', minuteName: string = 'mins', secondsName: string = 'sec'): string {
    let out = ''; // Defines output string
    // Hours
    if (seconds / 3600 > 1) {
      out += (Math.floor(seconds / 3600)) + ` ${hourName} `;
      seconds -= Math.floor(seconds / 3600) * 3600;
    }
    // Minutes
    if (seconds / 60 > 1) {
      out += (Math.floor(seconds / 60)) + ` ${minuteName} `;
      seconds -= Math.floor(seconds / 60) * 60;
    }
    // Seconds
    out += seconds + ` ${secondsName}`;
    return out;
  }

}
