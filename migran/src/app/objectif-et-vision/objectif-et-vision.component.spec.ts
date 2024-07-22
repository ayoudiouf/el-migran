import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifEtVisionComponent } from './objectif-et-vision.component';

describe('ObjectifEtVisionComponent', () => {
  let component: ObjectifEtVisionComponent;
  let fixture: ComponentFixture<ObjectifEtVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectifEtVisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectifEtVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
