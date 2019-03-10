import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  job = {};
  noAttachments = false;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.fetchJobByID(id).then( job => {
      this.job = job;
      // @ts-ignore
      this.noAttachments = (job.attachments.length === 0) ? true : false;
    });
  }

}
