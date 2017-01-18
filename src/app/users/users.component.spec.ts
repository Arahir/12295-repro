/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module';
import { UsersComponent } from './users.component';

describe('Component: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
    });
  });

  it('should create the component', () => {
    let fixture = TestBed.createComponent(UsersComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
