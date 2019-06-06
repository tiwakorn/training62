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
  weight: string;
  height: string;

  constructor(private bmiService: BmiService, private router: Router) {
    this.school = "mfu";
  }

  ngOnInit() {
  }

  async onSubmit(){
    let bmi = {
      studentId: this.studenId,
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      weight: this.weight,
      height: this.height
    }

    await this.bmiService.addNewBmi(bmi).subscribe(
      data => {
        console.log("added!");
      }
    );
  }

  doSearchAll(){
    this.router.navigate(['/result']);
  }

}
