import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreNosComponent } from '../_componentes/sobre-nos/sobre-nos.component';
import { NossaHistoriaComponent } from '../_componentes/nossa-historia/nossa-historia.component';
import { HistoriaPauloComponent } from '../_componentes/nossa-historia/_Componentes/historia-paulo/historia-paulo.component';
import { CardSobreNosComponent } from '../_componentes/sobre-nos/_Componentes/card-sobre-nos/card-sobre-nos.component';
import { GaleriaFotosComponent } from '../_componentes/galeria-fotos/galeria-fotos.component';
import { CardFotosComponent } from '../_componentes/galeria-fotos/_componentes/card-fotos/card-fotos.component';


@NgModule({
  declarations: [
    SobreNosComponent,
    CardSobreNosComponent,
    NossaHistoriaComponent,
    HistoriaPauloComponent,
    GaleriaFotosComponent,
    CardFotosComponent,
  ],
  imports: [
    CommonModule
  ],

  exports:[
    SobreNosComponent,
    NossaHistoriaComponent,
    GaleriaFotosComponent
  ]
})
export class ComponentesHomeModule { }
