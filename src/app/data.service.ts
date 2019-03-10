import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  jobsUrl = environment.jobsUrl;

  constructor(private http: HttpClient) { }

  fetchJobs() {
    const promise = new Promise((resolve, reject) => {
      this.http.get(this.jobsUrl).subscribe((res: any[]) => {
        resolve(res);
      });
    });
    return promise;
  }

  fetchJobByID(id) {
    const promise = new Promise((resolve, reject) => {
      this.http.get(`${this.jobsUrl}/${id}`).subscribe((res: any[]) => {
        resolve(res);
      });
    });
    return promise;
  }
}
