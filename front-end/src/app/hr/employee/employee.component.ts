import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  name: string;
  lastname: string;
  emp_id: string;
  selectedGender: any = null;
  gender:any = null;
  genders: any[] = [
    { name: 'Male', code: 'M' },
    { name: 'Female', value: 'F' }
  ];
  selectedDept: any = null;
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
  selectedOT: any = null;
  ot: any[] = [
    { name: 'Allow', code: 'Allow' },
    { name: 'Full', value: 'Full' },
    { name: 'No', value: 'No' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

