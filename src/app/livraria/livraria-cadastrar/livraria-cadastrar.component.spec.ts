import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrariaCadastrarComponent } from './livraria-cadastrar.component';

describe('LivrariaCadastrarComponent', () => {
  let component: LivrariaCadastrarComponent;
  let fixture: ComponentFixture<LivrariaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrariaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrariaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
