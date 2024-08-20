import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from '../rodape/rodape.component';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';

/*Aqui é o modulo do componente global */

@NgModule({
  declarations: [
    RodapeComponent,
    CabecalhoComponent,
  ],


  imports: [
    CommonModule
  ],

  exports:[
    RodapeComponent,
    CabecalhoComponent,
  ]


})
export class ComponentesGlobaisModule { }
