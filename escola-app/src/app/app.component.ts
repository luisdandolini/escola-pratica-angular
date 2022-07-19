import { Component } from '@angular/core';
import { Disciplina } from './disciplina.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  disciplinas = [
    new Disciplina('Lingua Portuguesa', 'O objetivo é aprender português'),
    new Disciplina('Educação Física', 'O objetivo é aprender sobre todos os esportes'),
    new Disciplina('Geografia', 'O objetivo é aprender sobre os países'),
    new Disciplina('História', 'O objetivo é aprender sobre história'),
    new Disciplina('Artes', 'O objetivo é aprender sobre pintura'),
    new Disciplina('Biologia', 'O objetivo é aprender sobre tudo'),
    new Disciplina('Química', 'O objetivo é aprender a fazer vulcão'),
  ];
}
