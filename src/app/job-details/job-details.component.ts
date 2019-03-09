import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  job = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentJob.subscribe(job => this.job = job);
  }

}
