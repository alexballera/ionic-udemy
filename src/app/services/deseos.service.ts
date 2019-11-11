import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    const lista1 = new Lista('Terminar curso Angular');
    const lista2 = new Lista('Volverme Front End');

    this.listas.push(lista1, lista2);
  }
}
