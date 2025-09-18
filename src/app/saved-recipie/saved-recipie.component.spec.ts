import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRecipieComponent } from './saved-recipie.component';

describe('SavedRecipieComponent', () => {
  let component: SavedRecipieComponent;
  let fixture: ComponentFixture<SavedRecipieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedRecipieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedRecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
