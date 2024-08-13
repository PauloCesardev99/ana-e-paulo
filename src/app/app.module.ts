import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './_componentes/cabecalho/cabecalho.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreNosComponent } from './pages/home/_componentes/sobre-nos/sobre-nos.component';
import { RodapeComponent } from './_componentes/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomeComponent,
    SobreNosComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
