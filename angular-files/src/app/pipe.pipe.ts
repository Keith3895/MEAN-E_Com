import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
            return el.Pname.toLowerCase().indexOf(input) > -1;
        })
    }
    return value;
}

}
