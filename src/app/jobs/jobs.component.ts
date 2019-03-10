import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {

  jobs = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchJobs().then( jobs => {
      // @ts-ignore
      for (let job of jobs) {
        if (job.state === 'active') {
          this.jobs.push(job);
        }
      }
    });
  }

}
