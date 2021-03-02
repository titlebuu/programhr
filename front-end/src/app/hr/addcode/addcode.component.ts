import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import * as XLSX from 'xlsx';
type AOA = any[][];
@Component({
  selector: 'app-addcode',
  templateUrl: './addcode.component.html',
  styleUrls: ['./addcode.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AddcodeComponent implements OnInit {
  data: AOA = [[], []];
  table
  column=[]

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate([``]);
  }

  onFileChange(evt) {
    /* wire up file reader */
    debugger
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.column = this.data[0]
      debugger

      console.log(this.data);
      
    };
    reader.readAsBinaryString(target.files[0]);
  }

}
