import { Component } from '@angular/core';
import { Disciplina } from './disciplina.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selecionado:any;
  nome:any;
  descricao:any;
  
  disciplinas = [
    new Disciplina('Lingua Portuguesa', 'O objetivo é aprender português'),
    new Disciplina('Educação Física', 'O objetivo é aprender sobre todos os esportes'),
    new Disciplina('Geografia', 'O objetivo é aprender sobre os países'),
    new Disciplina('História', 'O objetivo é aprender sobre história'),
    new Disciplina('Artes', 'O objetivo é aprender sobre pintura'),
    new Disciplina('Biologia', 'O objetivo é aprender sobre tudo'),
    new Disciplina('Química', 'O objetivo é aprender a fazer vulcão'),
  ];

  selecionar(disciplina: any) {
    this.selecionado = disciplina;
  }

  salvar() {
    const d = new Disciplina(this.nome, this.descricao);
    this.disciplinas.push(d);
    this.nome;
    this.descricao;
  }

  excluir(disciplina:any) {
    if (confirm('Tem certeza que deseja excluir a disciplina "'
    + disciplina.nome + '"?')) {
    const i = this.disciplinas.indexOf(disciplina);
    this.disciplinas.splice(i, 1);
    }
  }
}
