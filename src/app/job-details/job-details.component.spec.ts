import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsComponent } from './job-details.component';
import { DateFormatPipe } from 'ngx-moment';
import { AppRoutingModule } from '../app-routing.module';
import {JobsComponent} from '../jobs/jobs.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('JobDetailsComponent', () => {
  let component: JobDetailsComponent;
  let fixture: ComponentFixture<JobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ DateFormatPipe, JobsComponent, JobDetailsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
