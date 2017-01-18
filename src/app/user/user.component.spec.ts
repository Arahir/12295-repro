/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { UserComponent } from './user.component';

describe('Component: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
  });

  it('should create the component', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
