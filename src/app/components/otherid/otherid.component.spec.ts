import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtheridComponent } from './otherid.component';

describe('OtheridComponent', () => {
  let component: OtheridComponent;
  let fixture: ComponentFixture<OtheridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtheridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtheridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
