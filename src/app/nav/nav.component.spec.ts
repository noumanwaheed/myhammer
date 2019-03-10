import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { DateFormatPipe } from 'ngx-moment';
import { AppRoutingModule } from '../app-routing.module';
import {JobsComponent} from '../jobs/jobs.component';
import {JobDetailsComponent} from '../job-details/job-details.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ DateFormatPipe, NavComponent, JobsComponent, JobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
