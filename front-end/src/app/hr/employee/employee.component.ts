import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
// import { HttpService } from './../../hr/shared/http.service';

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
    { name: 'Male', value: 'M' },
    { name: 'Female', value: 'F' }
  ];
  dept: any[] = [
    { name: 'BDP', value: 'BDP' },
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
    { name: 'Allow', value: 'Allow' },
    { name: 'Full', value: 'Full' },
    { name: 'No', value: 'No' }
  ];

  msgs1: Message[];
  msgs2: Message[];
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  async addEmployee(): Promise<any> {
    const form: any = {
      ID_EMP: this.formEmployee.value.emp_id,
      DEPT: this.formEmployee.value.selectedDept.value,
      Gender: this.formEmployee.value.selectedGender.value,
      Name: this.formEmployee.value.name,
      Surname: this.formEmployee.value.lastname,
      OT: this.formEmployee.value.selectedOT.value
    }
    this.data = await this.post('/api/employee', form);
    if (this.data.resultCode === 20000) {
      this.addMessages()
    } else {
      this.errorMessages()
    }
  }

  post(url, body?): Promise<any> {
    return this.http.post(url, body).toPromise().then(response => {
      return response;
    }).catch((err) => {
      throw err;
    });
  }

  addMessages() {
    this.msgs1 = [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];
  }

  errorMessages() {
    this.msgs2 = [{ severity: 'error', summary: 'Error', detail: 'Message Content' }]
  }

}

