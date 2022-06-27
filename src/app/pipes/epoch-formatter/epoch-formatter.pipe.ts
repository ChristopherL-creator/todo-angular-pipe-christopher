import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epochFormatter'
})
export class EpochFormatterPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    const milliseconds = value * 1000;
    const date = new Date(milliseconds);
    return date.toLocaleDateString();
  }

}
