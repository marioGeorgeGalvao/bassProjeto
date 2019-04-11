import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Musica } from './musica';

@Injectable({
  providedIn: 'root'
})
export class MusicaDataService {
  private musicaSource = new BehaviorSubject({ musica: null, key: '' });
  currentMusica = this.musicaSource.asObservable();

  constructor(){}

  changeMusica(musica: Musica, key: string) {
    this.musicaSource.next({musica: musica, key: key});
  }
}
