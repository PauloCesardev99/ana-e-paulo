import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreNosComponent } from '../_componentes/sobre-nos/sobre-nos.component';
import { NossaHistoriaComponent } from '../_componentes/nossa-historia/nossa-historia.component';
import { HistoriaPauloComponent } from '../_componentes/nossa-historia/_Componentes/historia-paulo/historia-paulo.component';
import { CardSobreNosComponent } from '../_componentes/sobre-nos/_Componentes/card-sobre-nos/card-sobre-nos.component';


@NgModule({
  declarations: [
    SobreNosComponent,
    CardSobreNosComponent,
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
