import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireUnDonComponent } from './faire-un-don.component';

describe('FaireUnDonComponent', () => {
  let component: FaireUnDonComponent;
  let fixture: ComponentFixture<FaireUnDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaireUnDonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaireUnDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
