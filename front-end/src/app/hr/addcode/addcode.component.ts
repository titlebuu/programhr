import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-addcode',
  templateUrl: './addcode.component.html',
  styleUrls: ['./addcode.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AddcodeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate([``]);
  }

}
