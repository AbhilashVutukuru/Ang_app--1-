import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItconsultingComponent } from './itconsulting.component';

describe('ItconsultingComponent', () => {
  let component: ItconsultingComponent;
  let fixture: ComponentFixture<ItconsultingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItconsultingComponent]
    });
    fixture = TestBed.createComponent(ItconsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
