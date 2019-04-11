import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicaService } from '../shared/musica.service';
import { MusicaDataService } from '../shared/musica-data.service';
import { Musica } from '../shared/musica';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  musicas: Observable<any>;

  constructor(private musicaService: MusicaService, private musicaDataService: MusicaDataService) { }

  ngOnInit() {
    this.musicas = this.musicaService.getAll();
  }
  delete(key: string){
    this.musicaService.delete(key);
  }
  edit(musica: Musica, key: string){
    this.musicaDataService.changeMusica(musica, key);
  }

}
