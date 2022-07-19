export class Disciplina {
  nome: string;
  descricao: any;

  constructor(nome: string, descricao?: string) {
    this.nome = nome;
    this.descricao = descricao;
  }
}