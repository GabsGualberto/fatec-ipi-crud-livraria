import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrariaListaComponent } from './livraria-lista.component';

describe('LivrariaListaComponent', () => {
  let component: LivrariaListaComponent;
  let fixture: ComponentFixture<LivrariaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrariaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrariaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
