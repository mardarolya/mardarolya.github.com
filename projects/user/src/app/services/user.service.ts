import { Injectable, Optional, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class User {
    public name: string;
    public userName: string;
    public address: string;
    public company: string;
}

@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    public today: string;

    constructor(private http: Http) {
    }

    public returnGet(pathQuery, success, failed){
        return this.http
        .get(pathQuery, { headers: this.headers })
        .toPromise()
        .then((res: any) => {
            success(JSON.parse(res._body));
        })
        .catch((error: any) => {
            failed(error);
        });
    }

    public getUsers(success: ((result: any) => void), failed: ((error: any) => void)) {
        let pathQuery = "https://jsonplaceholder.typicode.com/users";

        return this.returnGet(pathQuery, success, failed);
    }
}