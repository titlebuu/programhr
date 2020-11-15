import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExcelService } from './excel.service' //เพิ่ม
import * as FileSaver from 'file-saver'; //เพิ่ม
import * as XLSX from 'xlsx'; //เพิ่ม

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-end';
  start_date: Date;
  to_date: Date;
  data: any;
  constructor(private http: HttpClient, _excelService: ExcelService) {

  }

  ngOnInit(): void {
    this.test12();
  }

  downloadExcel() {

    let header = [{
      A: "Employee ID",
      B: "Project ID",
      C: "Activity Sequence No",
      D: "Date(YYYYMMDD)",
      E: "Attendance Type",
      F: "Hours"
    }];
    this.exportAsExcelFile(this.data, header, 'front-end');
  }

  async test12(): Promise<any> {
    this.data = await this.query('/api/listdata', {
      date1: this.start_date,
      date2: this.to_date
    });
  }

  query(url: string, params?: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: params || {}
    };
    return this.http.get(url, httpOptions).toPromise().then(response => {
      return response;
    }).catch((err) => {
      throw err;
    });
  }

  public exportAsExcelFile(json: any[], headerText: any[], excelFileName: string): void {

    var worksheet = XLSX.utils.json_to_sheet(headerText, { header: [], skipHeader: true });

    XLSX.utils.sheet_add_json(worksheet, json, { skipHeader: true, origin: "A2" });

    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  red(a: string) {
    let d = a.substring(2, 0);
    if (d === 'no') {
      return true

    } else {
      return false
    }
  }
}

