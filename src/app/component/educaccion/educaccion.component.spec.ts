import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducaccionComponent } from './educaccion.component';

describe('EducaccionComponent', () => {
  let component: EducaccionComponent;
  let fixture: ComponentFixture<EducaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducaccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
