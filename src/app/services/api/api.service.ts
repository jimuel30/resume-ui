import { Injectable } from '@angular/core';
import { RegisterRequest } from '../../models/RegisterRequest';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthToken } from '../../models/Token';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    register(request: RegisterRequest): Observable<any> {
        let registerUrl = environment.domain + environment.register;
        return this.http.post<any>(registerUrl, request).pipe(
            map((response: any) => response) // Extract the body here
        );
    }
    genericSave(request: any, url: string): Observable<any> {
        const authToken = this.extractToken();
        const headers = new HttpHeaders({
            Authorization: `Bearer ${authToken.token.token}`,
        });

        return this.http.post<any>(url, request, { headers }).pipe(
            map((response: any) => response) // Extract the body here
        );
    }

    genericGet(url: string): Observable<any> {
        const authToken = this.extractToken();
        const headers = new HttpHeaders({
            Authorization: `Bearer ${authToken.token.token}`,
        });

        return this.http.get<any>(url, { headers }).pipe(
            map((response: any) => response) // Extract the body here
        );
    }

    extractToken(): AuthToken {
        const dataFromStorage = localStorage.getItem('token');
        let authToken: AuthToken;
        if (dataFromStorage) {
            const parsedData = JSON.parse(dataFromStorage);
            authToken = {
                token: parsedData.token,
                refreshToken: parsedData.refreshToken,
            };
        } else {
            throw new Error('Missing authentication token');
        }
        return authToken;
    }
}
