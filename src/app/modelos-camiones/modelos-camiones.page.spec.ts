import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModelosCamionesPage } from './modelos-camiones.page';

describe('ModelosCamionesPage', () => {
  let component: ModelosCamionesPage;
  let fixture: ComponentFixture<ModelosCamionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelosCamionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModelosCamionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
