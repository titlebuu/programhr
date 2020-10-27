import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-end';
  data: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.test12();
  }

  async test12(): Promise<any> {
    console.log('test12');
    this.data = await this.query('/api/listdata', {
      date1: '2020-09-02',
      date2: '2020-09-03'
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
}
