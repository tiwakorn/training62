import { Component, OnInit } from '@angular/core';
import { BmiService } from './../../service/bmi.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  school: string;
  studenId: string;
  firstname: string;
  lastname: string;
  age: number;
  weight: number;
  height: number;

  constructor(private bmiService: BmiService, private router: Router) {
    this.school = "mfu";
  }

  ngOnInit() {
    // this.resetData();
  }

  async onSubmit(){
    var temp = this.weight / (this.height * this.height);
    let bmi = {
      studentId: this.studenId,
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      weight: this.weight,
      height: this.height
    }

    // console.log(bmi);

    await this.bmiService.addNewBmi(bmi).subscribe(
      data => {
        console.log("added!");
      }
    );
  }

  doSearchAll(){
    this.router.navigate(['/result']);
  }

  resetData(){
    this.school = "mfu";
    this.studenId = null;
    this.firstname = null;
    this.lastname = null;
    this.age = null;
    this.weight = null;
    this.height = null;
  }

}
