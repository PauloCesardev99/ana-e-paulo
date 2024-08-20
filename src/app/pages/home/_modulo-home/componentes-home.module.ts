import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreNosComponent } from '../_componentes/sobre-nos/sobre-nos.component';
import { NossaHistoriaComponent } from '../_componentes/nossa-historia/nossa-historia.component';
import { HistoriaPauloComponent } from '../_componentes/nossa-historia/_Componentes/historia-paulo/historia-paulo.component';


@NgModule({
  declarations: [
    SobreNosComponent,
    NossaHistoriaComponent,
    HistoriaPauloComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    SobreNosComponent,
    NossaHistoriaComponent,
  ]
})
export class ComponentesHomeModule { }
