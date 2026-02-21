import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText',
})
export class TrimTextPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    console.log(args)
    return value.substring(0,args[0]);
  }

}
