import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByModel'
})
export class FilterByModelPipe implements PipeTransform {
  transform(cars: any[], searchText: string): any[] {
    if (!searchText) return cars;
    searchText = searchText.toLowerCase();
    return cars.filter(car => car.model.toLowerCase().includes(searchText));
  }
}
