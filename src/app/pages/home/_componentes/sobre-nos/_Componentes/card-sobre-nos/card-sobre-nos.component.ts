import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-sobre-nos',
  templateUrl: './card-sobre-nos.component.html',
  styleUrl: './card-sobre-nos.component.css'
})
export class CardSobreNosComponent {
  @Input('imagem') imagem: string = ''
  @Input('nome') nome: string = ''
  @Input('sobre')sobre: string = ''
  @Input('idade')idade: number = 0
  @Input('cidade') cidade: string = ''
  @Input('border-color') border_color: string = ''
  @Input('boxShadow') boxShadow: string = ''
  @Input('borderColorImg') borderColorImg: string = ''
  @Input('borderColorShadowImg') borderColorShadowImg: string = ''
}
