import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormat'
})
export class DurationFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    const parts = value.split(':');
    if (parts.length < 2) return value;

    const hours = parts[0];
    const minutes = parts[1];
    return `${hours}h ${minutes}m`; // 05:30 => 05h 30m
  }
}
