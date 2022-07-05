import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcarrinhoComponent } from './itemcarrinho.component';

describe('ItemcarrinhoComponent', () => {
  let component: ItemcarrinhoComponent;
  let fixture: ComponentFixture<ItemcarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemcarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
