import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    
    var mult

    mult = value * args[0]
    
    return mult;
  }

}
