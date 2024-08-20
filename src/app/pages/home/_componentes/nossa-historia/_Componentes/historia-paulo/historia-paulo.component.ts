import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-historia-paulo',
  templateUrl: './historia-paulo.component.html',
  styleUrl: './historia-paulo.component.css'
})
export class HistoriaPauloComponent {
@Input('nomePaulo') nomePaulo: string = ''


}
