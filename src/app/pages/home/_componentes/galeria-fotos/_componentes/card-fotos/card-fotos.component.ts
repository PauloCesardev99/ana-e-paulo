import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-fotos',
  templateUrl: './card-fotos.component.html',
  styleUrl: './card-fotos.component.css'
})
export class CardFotosComponent {
@Input('img') imagem_foto: string | any = ''
@Input('lugar') lugar_foto: string | any = ''
}
