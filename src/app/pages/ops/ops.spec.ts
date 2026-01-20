import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ops } from './ops';

describe('Ops', () => {
  let component: Ops;
  let fixture: ComponentFixture<Ops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ops]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ops);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
