import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dateTimeObj;
  date: string;
  year: string;

  constructor(private service: ApiService) {}

  ngOnInit() {
    // assign API response to dateTimeObj on loading of application
    this.service.getDateTimeAPI().subscribe((dateTime) => {
      this.dateTimeObj = dateTime.json();
    });
  }

  getDateTime() {
    // Use this function to parse the date returned by the API upon button click
    this.date = this.dateTimeObj.date;
    this.year = this.date.substr(this.date.length - 4);
    console.log(this.date, this.year);
  }
}
