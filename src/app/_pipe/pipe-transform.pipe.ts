import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTransform'
})
export class PipeTransformPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0) return 'Zero'; // cas specila pou zero

    const units = ['']
    return "";
  }

}
