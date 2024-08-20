import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.css'
})
export class SobreNosComponent {

  
  paulo = {
    nome: "Paulo César Brito Camilo",
    sobre: "Programador Front End",
    idade: 25,
    cidade: "Tucuruvi-SP"
  }

  ana = {
    nome: "Ana Beatriz Pires Rodrigues",
    sobre: "Gestora de Ti",
    idade: 22,
    cidade: "Jardim Danfer-SP"
  }



}
