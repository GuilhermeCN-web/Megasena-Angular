import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  numerosSorteados: number[] = [];
  numerosApostados: number[] = [];
  acertos: number[] = [];

  adicionarAposta(numero: number) {
    if (numero < 1 || numero > 60) {
      alert('Escolha um número entre 1 e 60.');
      return;
    }
    if (this.numerosApostados.length < 10 && !this.numerosApostados.includes(numero)) {
      this.numerosApostados.push(numero);
    } else {
      alert('Número inválido ou já escolhido.');
    }
  }

  adicionarSorteado(numero: number) {
    if (numero < 1 || numero > 60) {
      alert('Escolha um número entre 1 e 60.');
      return;
    }
    if (this.numerosSorteados.length < 6 && !this.numerosSorteados.includes(numero)) {
      this.numerosSorteados.push(numero);
    } else {
      alert('Número inválido ou já escolhido.');
    }
  }

  verificarAcertos() {
    if (this.numerosSorteados.length !== 6) {
      alert('Insira exatamente 6 números sorteados antes de verificar.');
      return;
    }
    if (this.numerosApostados.length < 6) {
      alert('Sua aposta deve ter pelo menos 6 números.');
      return;
    }
    this.acertos = this.numerosApostados.filter(num => this.numerosSorteados.includes(num));
  }

  resetar() {
    this.numerosApostados = [];
    this.numerosSorteados = [];
    this.acertos = [];
  }

}