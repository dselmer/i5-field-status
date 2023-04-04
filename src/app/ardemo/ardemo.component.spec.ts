import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdemoComponent } from './ardemo.component';

describe('ArdemoComponent', () => {
  let component: ArdemoComponent;
  let fixture: ComponentFixture<ArdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
