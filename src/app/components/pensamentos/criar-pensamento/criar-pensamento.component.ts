import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.sass'],
})
export class CriarPensamentoComponent {
  constructor(
    private service: PensamentoService,
    private router:Router
    ) {}

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento'])
  }
}
