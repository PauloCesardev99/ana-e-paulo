import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrl: './galeria-fotos.component.css'
})
export class GaleriaFotosComponent {

  abrir: boolean = false;

  abrirGaleria(): void{
    this.abrir = !this.abrir
  }


  fotos = [{
    imagem: 'imgs/icon-header.jpg',
    lugar: 'Longe do Mar'
  },
  {
    imagem: 'imgs/imgs-galeria/Avenida-Paulista-evento-Minecraft.jpg',
    lugar: 'Avenida Paulista SP'
  },
  {
    imagem: 'imgs/imgs-galeria/Japão-liberdade.jpg',
    lugar: 'Japão Liberdade SP'
  },
  {
    imagem: 'imgs/imgs-galeria/Parque-Ibirapuera.jpg',
    lugar: 'Parque Ibirapuera SP'
  },
  {
    imagem: 'imgs/imgs-galeria/Shop-Tucuruvi.jpg',
    lugar: 'Shop Tucuruvi SP'
  },
  {
    imagem: 'imgs/imgs-galeria/Tucuruvi-minha-casa.jpg',
    lugar: 'My Home'
  },
]
}
