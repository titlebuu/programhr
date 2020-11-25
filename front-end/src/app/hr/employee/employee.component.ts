import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  formEmployee = new FormGroup({
    emp_id: new FormControl(),
    name: new FormControl(),
    lastname: new FormControl(),
    selectedGender: new FormControl(),
    selectedDept: new FormControl(),
    selectedOT: new FormControl()
  });
  genders: any[] = [
    { name: 'Male', code: 'M' },
    { name: 'Female', value: 'F' }
  ];
  dept: any[] = [
    { name: 'BDP', code: 'BDP' },
    { name: 'BP', value: 'BP' },
    { name: 'DC', value: 'DC' },
    { name: 'ENG', value: 'ENG' },
    { name: 'FA', value: 'FA' },
    { name: 'FAB', value: 'FAB' },
    { name: 'HRD', value: 'HRD' },
    { name: 'HSEQ', value: 'HSEQ' },
    { name: 'HSSE', value: 'HSSE' },
    { name: 'IT', value: 'IT' },
    { name: 'LOG', value: 'LOG' },
    { name: 'PROC', value: 'PROC' },
    { name: 'PTF', value: 'PTF' }
  ];
  ot: any[] = [
    { name: 'Allow', code: 'Allow' },
    { name: 'Full', value: 'Full' },
    { name: 'No', value: 'No' }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  // async addemployee(): Promise<any> {

  //   const genders = this.genders;
  //   const dept = this.dept;
  //   const typeot = this.ot

  //   this.addemp = await this.query()

  // }


}

