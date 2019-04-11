import { Injectable } from '@angular/core';
import { Musica } from './musica';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor(private db: AngularFireDatabase) { }

  insert(musica: Musica){
    this.db.list('musica').push(musica)
    .then((result: any) => {
      console.log(result.key);
    });
  }
  update(musica: Musica, key: string){
    this.db.list('musica').update(key, musica)
    .catch((erro: any) => {
      console.log(erro.key);
    });
  }
  getAll(){
    return this.db.list('musica')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }
  delete(key: string){
     this.db.object(`musica/${key}`).remove();
  }
}
