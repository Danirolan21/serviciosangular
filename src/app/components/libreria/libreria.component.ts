import { Component, ElementRef, ViewChild } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css'
})
export class LibreriaComponent {
  public comics: Array<Comic>;
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

  constructor() {
    this.titulo = new ElementRef("");
    this.imagen = new ElementRef("");
    this.descripcion = new ElementRef("");
    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://www.zonanegativa.com/imagenes/2018/03/Groot-portada.jpg",
        "Yo soy Groot"
      ),
      new Comic(
      "Avengers",
      "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
      "Los Vengadores"
      ),
      new Comic(
      "Spawn",
      "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
      "Todd MacFarlane"
      )
    ]; 
  }
}
