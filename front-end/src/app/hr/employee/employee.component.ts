import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

// import { HttpService } from './../../hr/shared/http.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class EmployeeComponent implements OnInit {
  cols: any[];
  dataemp: any;

  constructor(private http: HttpClient, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

  }
  async listemp(): Promise<any> {
    this.cols = [
      { field: 'NO', header: 'NO' },
      { field: 'ID_EMP', header: 'Employee ID' },
      { field: 'DEPT', header: 'Department' },
      { field: 'Gender', header: 'Gender' },
      { field: 'Name', header: 'Name' },
      { field: 'Surname', header: 'Surname' },
      { field: 'OT', header: 'OT' }
    ];
    this.dataemp = await this.query('/api/employee');
  }

  query(url: string): Promise<any> {
    return this.http.get(url).toPromise().then(response => {
      return response;
    }).catch((err) => {
      throw err;
    });
  }
}

