import { Component, OnInit } from '@angular/core';
import { BmiService } from './../../service/bmi.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  displayData: any;

  constructor(private bmiService: BmiService) {

  }

  ngOnInit() {
    this.findAllBmi();
  }

  async findAllBmi(){
    await this.bmiService.findAllBmi().subscribe(
      data => {
        this.displayData = data;
      }
    );
  }

}
