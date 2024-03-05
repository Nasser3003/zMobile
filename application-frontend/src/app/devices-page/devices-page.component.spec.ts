import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesPageComponent } from './devices-page.component';

describe('DevicesPageComponent', () => {
  let component: DevicesPageComponent;
  let fixture: ComponentFixture<DevicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevicesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
