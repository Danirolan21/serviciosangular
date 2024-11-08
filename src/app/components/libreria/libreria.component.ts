import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css'
  //DEBEMOS INJECTAR UN SERVICIO PARA PODER RECUPERARLO POSTERIORMENTE EN EL CONSTRUCTOR
  // providers: [ServiceComics]
})
export class LibreriaComponent implements OnInit {
  public comics!: Array<Comic>;
  public comicFavorite!: Comic;
  @ViewChild("cajatitulo") titulo: ElementRef;
  @ViewChild("cajaimagen") imagen: ElementRef;
  @ViewChild("cajadescripcion") descripcion: ElementRef;

  nuevoComic(): void {
    let titulo = this.titulo.nativeElement.value;
    let imagen = this.imagen.nativeElement.value;
    let descripcion = this.descripcion.nativeElement.value;
    this.comics.push(new Comic(titulo, imagen, descripcion));
  }

  seleccionarFavorito(event: any): void {
    this.comicFavorite = event;
  }

  constructor(private _service: ServiceComics) {
    this.titulo = new ElementRef("");
    this.imagen = new ElementRef("");
    this.descripcion = new ElementRef("");
  }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }
}
