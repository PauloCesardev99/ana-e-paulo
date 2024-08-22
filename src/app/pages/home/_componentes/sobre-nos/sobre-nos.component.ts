import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.css'
})
export class SobreNosComponent {

  
  paulo = {
    img : "imgs/imgs-ana-e-paulo/eu.jpg",
    nome:  "Paulo César Brito Camilo",
    sobre: "Programador Front End",
    idade: 25,
    cidade: "Tucuruvi-SP",
    borderColor: "rgba(0, 0, 255, 0.39)",
    boxShadow: " 5px 5px 10px rgba(49, 13, 206, 0.644)",
    borderColorImg: "rgba(49, 13, 206, 0.644)",
    borderColorShadowImg: "5px 5px 10px rgba(49, 13, 206, 0.644)"
  }

  ana = {
     img : "imgs/imgs-ana-e-paulo/ana.jpg",
    nome: "Ana Beatriz Pires Rodrigues",
    sobre: "Gestora de Ti",
    idade: 22,
    cidade: "Jardim Danfer-SP",
    borderColor: " rgba(240, 26, 211, 0.39)",
    boxShadow: "5px 5px 10px rgba(185, 14, 99, 0.644)",
    borderColorImg: " rgba(240, 26, 211, 0.39)",
    borderColorShadowImg: "5px 5px 10px rgba(185, 14, 99, 0.644)"
  }



}
