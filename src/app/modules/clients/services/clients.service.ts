import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/clients.model";

//TODO error treatment
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getListing(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiUrl}/clients`)
  }

  registerClient(client: Client): Observable<void>{
    return this.http.post<void>(`${this.apiUrl}/clients`, client)
  }

  editClient(client: Client): Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/clients`, client)
  }
}
