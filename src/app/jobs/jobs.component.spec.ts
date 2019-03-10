import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsComponent } from './jobs.component';
import { DateFormatPipe } from 'ngx-moment';
import { AppRoutingModule } from '../app-routing.module';
import {JobDetailsComponent} from '../job-details/job-details.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('JobsComponent', () => {
  let component: JobsComponent;
  let fixture: ComponentFixture<JobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ DateFormatPipe, JobsComponent, JobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
