import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentesGlobaisModule } from './_componentes/_componentes-globais/componentes-globais.module';
import { ComponentesHomeModule } from './pages/home/_modulo-home/componentes-home.module';







@NgModule({
  // aqui ficaram os componentes principais da aplicação
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesGlobaisModule, //Modulo dos componentes globais
    ComponentesHomeModule, // Modulo da home
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
