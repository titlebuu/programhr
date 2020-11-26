import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { AuthenticationService } from './../module/login/_services';
@Injectable()
export class HttpService {
    constructor(private http: HttpClient
        // private authenticationService: AuthenticationService,
    ) { }

    get(url, param?): Promise<any> {
        // const token = this.authenticationService.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                authorization: 'token',
            }),
            params: param
        };
        return this.http.get(url, httpOptions).toPromise();
    }

    post(url, body?): Promise<any> {
        // const token = this.authenticationService.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                authorization: 'token',
            })
        };
        return this.http.post(url, body || {}, httpOptions).toPromise();
    }

    put(url, body?): Promise<any> {
        // const token = this.authenticationService.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                authorization: 'token',
            })
        };
        return this.http.put(url, body || {}, httpOptions).toPromise();
    }

    delete(url): Promise<any> {
        // const token = this.authenticationService.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                authorization: 'token',
            })
        };
        return this.http.delete(url, httpOptions).toPromise();
    }
}
