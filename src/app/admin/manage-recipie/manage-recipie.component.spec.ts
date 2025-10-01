import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRecipieComponent } from './manage-recipie.component';

describe('ManageRecipieComponent', () => {
  let component: ManageRecipieComponent;
  let fixture: ComponentFixture<ManageRecipieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageRecipieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageRecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
