import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterByModelPipe } from '../../pipes/filter-by-model-pipe';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, FilterByModelPipe],
  selector: 'app-cars-list',
  templateUrl: './cars-list.html',
  styleUrls: ['./cars-list.css']
})
export class CarsListComponent {
  public showList = true;
  public filterText = '';

  cars = [
    { make: "Toyota", model: "Camry", year: 2020, licensePlate: "ABC-1234" },
    { make: "Honda", model: "Civic", year: 2019, licensePlate: "XYZ-5678" },
    { make: "Ford", model: "Mustang", year: 2021, licensePlate: "JKL-9012" },
    { make: "Chevrolet", model: "Malibu", year: 2018, licensePlate: "MNO-3456" },
    { make: "Nissan", model: "Altima", year: 2022, licensePlate: "QRS-7890" },
    { make: "BMW", model: "3 Series", year: 2020, licensePlate: "TUV-1122" },
    { make: "Audi", model: "A4", year: 2021, licensePlate: "WXY-3344" },
    { make: "Kia", model: "Sorento", year: 2019, licensePlate: "ZAB-5566" },
    { make: "Hyundai", model: "Elantra", year: 2023, licensePlate: "CDE-7788" },
    { make: "Tesla", model: "Model 3", year: 2022, licensePlate: "FGH-9900" }
  ];

  toggleList() {
    this.showList = !this.showList;
  }

  
}
