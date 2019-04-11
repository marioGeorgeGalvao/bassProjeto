import { Component, OnInit } from '@angular/core';
import { Musica } from '../shared/musica';
import { MusicaService } from '../shared/musica.service';
import { MusicaDataService } from '../shared/musica-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  musica: Musica;
  key: string = '';
  constructor(private musicaService: MusicaService, private musicaDataService: MusicaDataService) { }
  
  ngOnInit() {
    this.musica = new Musica();
    this.musicaDataService.currentMusica.subscribe(data => {
      if(data.musica && data.key){
        this.musica = new Musica();
        this.musica.estilo = data.musica.estilo;
        this.musica.nome = data.musica.nome;
        this.musica.autor = data.musica.autor;
        this.musica.banda = data.musica.banda;
        this.key = data.key;
      }
    });
  }
  onSubmit(){
    if(this.key){
      this.musicaService.update(this.musica, this.key);
    }else{
      this.musicaService.insert(this.musica);
    }

    this.musica = new Musica();
  }

}
