import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';


export interface Car { vin: string; brand: string; }

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, AfterViewInit {

  cars: Car[] = [];
  totalRecords: number;
  loading: boolean;
  selectedCar: Car;
  @ViewChild('dropdown') dropdown: Dropdown;
  constructor(private viewportScroller: ViewportScroller) {
    this.totalRecords = 1000; // total number of records 
    this.loadCarsLazy({ first: 0, rows: 10 });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // this.dropdown.overlayViewChild.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
  }
  onScroll(event: any) {
    const element = event.target;
    const atBottom = (element.scrollTop + element.clientHeight) >= (0.75 * element.scrollHeight);
    if (atBottom && !this.loading && this.cars.length < this.totalRecords) {
      this.loadCarsLazy({ first: this.cars.length, rows: 10 });
    }
  }
  loadCarsLazy(event: any) {
    this.loading = true; // Simulate an API call 
    const newCars = Array.from({ length: event.rows }).map((_, i) => (
      {
        vin: `vin${event.first + i}`, brand: `brand${event.first + i}`,
      }));
    // this.cars = [...this.cars, ...newCars]; this.loading = false;
  }

}
