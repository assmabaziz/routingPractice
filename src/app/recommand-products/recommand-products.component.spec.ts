import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandProductsComponent } from './recommand-products.component';

describe('RecommandProductsComponent', () => {
  let component: RecommandProductsComponent;
  let fixture: ComponentFixture<RecommandProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommandProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommandProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
