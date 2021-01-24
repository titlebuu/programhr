import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { AddEmployee } from '../employee/interface';
import { values } from 'lodash';

// import { HttpService } from './../../hr/shared/http.service';

interface Test {
  name?: string,
  value: string
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class EmployeeComponent implements OnInit {

  emp_id: string;
  name: string;
  lastname: string;
  selectedDept: Test = { name: '', value: '' }
  radioButtonGender: string;
  radioButtonOT: string;
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
  employeeDialog: boolean;
  EditemployeeDialog: boolean;
  cols: any[];
  dataemp: AddEmployee[];
  submitted: boolean;
  data: any;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  ngOnInit(): void {
    this.listemp()
  }

  async listemp(): Promise<any> {
    this.dataemp = await this.query('/api/employee');
  }

  query(url: string): Promise<AddEmployee[]> {
    return this.http.get<AddEmployee[]>(url).toPromise().then(response => {
      return response;
    }).catch((err) => {
      throw err;
    });
  }

  async addEmployee(): Promise<any> {
    this.submitted = true;
    if (this.emp_id != '') {
      const form: any = {
        ID_EMP: this.emp_id,
        DEPT: this.selectedDept.value,
        Gender: this.radioButtonGender,
        Name: this.name,
        Surname: this.lastname,
        OT: this.radioButtonOT
      }
      this.data = await this.post('/api/employee', form);
      if (this.data.resultCode === 20000) {
        this.showSuccess()
        this.employeeDialog = false;
        this.listemp()
      } else {
        this.showError()
      }
    } else {
      'required'
    }

  }

  post(url, body?): Promise<any> {
    return this.http.post(url, body).toPromise().then(response => {
      return response;
    }).catch((err) => {
      throw err;
    });
  }

  async EditEmployee(): Promise<any> {
    debugger
    const formEdit: any = {
      ID_EMP: this.emp_id,
      DEPT: this.selectedDept.value,
      Gender: this.radioButtonGender,
      Name: this.name,
      Surname: this.lastname,
      OT: this.radioButtonOT
    }
    this.data = await this.put(`/api/employee/${this.emp_id}`, formEdit);
  }

  put(url, body?): Promise<any>{
    return this.http.put(url, body).toPromise().then(response => {
      return response;
    }).catch((err) => {
      throw err;
    });
  }

  clearEmployee() {
    this.emp_id = '';
    this.name = '';
    this.lastname = '';
    this.selectedDept.value = '';
    this.radioButtonGender = '';
    this.radioButtonOT = '';
  }

  openNew() {
    this.submitted = false;
    this.employeeDialog = true;
    this.clearEmployee()
  }
  editEmployee(i: AddEmployee) {
    this.EditemployeeDialog = true;
    this.emp_id = i.ID_EMP;
    this.name = i.Name;
    this.lastname = i.Surname;
    this.selectedDept = this.dept.find(ele => ele.value === i.DEPT);
    this.radioButtonGender = i.Gender;
    this.radioButtonOT = i.OT;
  }
  hideDialog() {
    this.employeeDialog = false;
    this.submitted = false;
  }
  hideDialogEdit() {
    this.EditemployeeDialog = false;
    this.submitted = false;
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: this.data.message });
  }
  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.data.message });
  }

}

