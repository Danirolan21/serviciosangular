import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css'
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Input() comicFavorite!: Comic;

  @Output() seleccionarFavorito: EventEmitter<any> =
  new EventEmitter();

  seleccionarFavoritoComic(): void {
    this.seleccionarFavorito.emit( this.comic );
  }
}
