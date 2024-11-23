import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {

    var sum : number
    
    sum = value + args[0]

    return sum
  }

}
