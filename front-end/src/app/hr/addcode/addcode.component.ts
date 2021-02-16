import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-addcode',
  templateUrl: './addcode.component.html',
  styleUrls: ['./addcode.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AddcodeComponent implements OnInit {
  data:[][];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate([``]);
  }

  onFileChange(evt: any){
    const target : DataTransfer = <DataTransfer>(evt.target);

    if(target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any)=>{
      const bstr: string = e.target.result
      const wb: XLSX.WorkBook = XLSX.read(bstr,{type: 'binary'})
      const wsname : string = wb.SheetNames[0]
      const ws: XLSX.WorkSheet = wb.Sheets[wsname]
      console.log(ws);
      this.data = (XLSX.utils.sheet_to_json(ws,{header:1}))
      console.log(this.data)
    }
  }

}
