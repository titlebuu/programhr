import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

// import { HttpService } from './../../hr/shared/http.service';

export interface AddEmployee {
  ID_EMP: string;
  DEPT: string;
  Gender: string;
  Name: string;
  Surname: string;
  OT: string;

}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class EmployeeComponent implements OnInit {
  formEmployee = new FormGroup({
    emp_id: new FormControl(),
    name: new FormControl(),
    lastname: new FormControl(),
    selectedDept: new FormControl(),
    radioButtonGender: new FormControl(),
    radioButtonOT: new FormControl()
  });
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
  cols: any[];
  dataemp: AddEmployee[];
  selectedProducts: AddEmployee[];
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
    const form: any = {
      ID_EMP: this.formEmployee.value.emp_id,
      DEPT: this.formEmployee.value.selectedDept.value,
      Gender: this.formEmployee.value.radioButtonGender.value,
      Name: this.formEmployee.value.name,
      Surname: this.formEmployee.value.lastname,
      OT: this.formEmployee.value.radioButtonOT.value
    }
    this.data = await this.post('/api/employee', form);
    if (this.data.resultCode === 20000) {
      this.showSuccess()
      this.formEmployee.reset()
    } else {
      this.showError()
    }
  }

  post(url, body?): Promise<any> {
    return this.http.post(url, body).toPromise().then(response => {
      return response;
    }).catch((err) => {
      throw err;
    });
  }

  // confirm1() {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to proceed?',
  //     header: 'Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.addEmployee()
  //     },
  //     reject: () => {
  //       this.rejected()
  //     }
  //   });
  // }

  openNew() {
    debugger
    this.submitted = false;
    this.employeeDialog = true;
    this.formEmployee.reset()
  }
  hideDialog() {
    this.employeeDialog = false;
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

