
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";


@Injectable()
export class RequestProvider {
  private PATH = 'requests/';
  constructor(private db: AngularFireDatabase) {
    console.log('Hello RequestProvider Provider');
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('requisicao').equalTo('w'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  getAllMineWithoutAnswer(aluno: string) {
    console.log("este é o email",aluno);
    return this.db.list(this.PATH, ref => ref.orderByChild('id').equalTo(aluno +"Sem resposta"))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  getAllMineWithAnswer(aluno: string) {
    console.log("este é o email",aluno);
    return this.db.list(this.PATH, ref => ref.orderByChild('id').equalTo(aluno +"Com resposta"))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  save(request: any) {
    return new Promise((resolve, reject) => {
      if (request.key) {
        this.db.list(this.PATH)
          .update(request.key, { emailAluno: request.emailAluno,
             emailCoor: request.emailCoor,
             data: request.data,
             requisicao : request.requisicao,
             id: request.id,
             id2: request.emailCoor,
             resposta: request.resposta})
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ emailAluno: request.emailAluno,
            emailCoor: request.emailCoor,
            data: request.data,
            requisicao : request.requisicao,
            id: request.id,
            id2: request.emailCoor,
            resposta: request.resposta})
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}
