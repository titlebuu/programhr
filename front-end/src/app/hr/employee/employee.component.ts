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
    this.listemp()
  }
  async listemp(): Promise<any> {
    debugger
    this.dataemp = await this.query('/api/employee');
  }

  query(url: string): Promise<any> {
    debugger
    return this.http.get(url).toPromise().then(response => {
      return response;
    }).catch((err) => {
      debugger
      throw err;
    });
  }
}

