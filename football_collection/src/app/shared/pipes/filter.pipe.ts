import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if( args === "" || args.length <2) return value;
    let results = [];
    for ( let character of value){
      if(String(character.name).toUpperCase().indexOf(args) > -1) // indexOf -> -1 no lo encontró
      {
        results.push(character);
      } 
    }
    
    return results; 
  }

}
