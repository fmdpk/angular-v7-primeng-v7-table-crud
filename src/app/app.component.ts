import { Component } from '@angular/core';

export interface Car { vin: string; brand: string; year: number; color: string; isNew: boolean }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars: Car[];
  countOfYear: number = 0
  oldValue: number = 0
  newValue: number = 0

  brands: { label: string, value: string }[] = [
    { label: 'Select Item', value: 'Select Item' },
    { label: 'Audi', value: 'Audi' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Fiat', value: 'Fiat' },
    { label: 'Ford', value: 'Ford' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Jaguar', value: 'Jaguar' },
    { label: 'Mercedes', value: 'Mercedes' },
    { label: 'Renault', value: 'Renault' },
    { label: 'VW', value: 'VW' },
    { label: 'Volvo', value: 'Volvo' }
  ];

  rowGroupMetadata: any;


  constructor() {
    this.cars = [
      { vin: 'a1', brand: 'VW', year: 1998, color: 'White', isNew: false },
      { vin: 'a2', brand: 'Audi', year: 1987, color: 'Black', isNew: false }
    ];

    this.cars.forEach((item: Car) => {
      this.countOfYear += item.year
    })

    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.cars) {
      for (let i = 0; i < this.cars.length; i++) {
        let rowData = this.cars[i];
        let brand = rowData.brand;
        if (i == 0) {
          this.rowGroupMetadata[brand] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = this.cars[i - 1];
          let previousRowGroup = previousRowData.brand;
          if (brand === previousRowGroup)
            this.rowGroupMetadata[brand].size++;
          else
            this.rowGroupMetadata[brand] = { index: i, size: 1 };
        }
      }
    }
  }

  addNewRow() {
    this.cars.unshift({
      vin: 'a' + (+this.cars.length + 1), brand: 'Select Item', year: 0, color: '', isNew: true
    })
  }

  submit() {
    let newItems = this.cars.filter(item => {
      return item.isNew === true
    })

    console.log(newItems);
    console.log(this.cars);

    this.cars.forEach(item => {
      item.isNew = false
    })

    var alertMessage = newItems.map((obj) => {
      return "Vin: " + obj.vin + ", Color: " + obj.color + ', Brand: ' + obj.brand + ', year: ' + obj.year
    }).join("\n");

    if (newItems.length) {
      alert(alertMessage);
    } else {
      alert('موردی برای نمایش وجود ندارد')
    }

  }

  onFocusYear(event: FocusEvent, rowData: Car) {
    console.log(event);
    this.oldValue = +rowData.year
  }

  onFocusoutYear(event: FocusEvent, rowData: Car) {
    console.log(event);
    this.newValue = +rowData.year
    let difference = this.newValue - this.oldValue
    this.countOfYear += difference
  }

  onKeydownYear(event: KeyboardEvent, rowData: Car) {
    console.log(event);

    if (event.key === "Enter" || event.key === "Escape") {
      this.newValue = +rowData.year;
      let difference = this.newValue - this.oldValue;
      this.countOfYear += difference;
    }
  }

  removeRow(rowData: Car) {
    this.cars = this.cars.filter(item => {
      return item.vin !== rowData.vin
    })

    this.countOfYear -= +rowData.year
  }

  onChangeYear(year: number) {
    // this.countOfYear += +year
  }
}
