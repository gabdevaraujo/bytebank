import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() onTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: string;

  constructor(private service: TransferenciaService) { }

  ngOnInit() {
  }

  tranferir() {
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.service.adicionarTransferencia(valorEmitir).subscribe(
      resultado => {
        console.log(resultado);
        this.limparCampos();
      },
      error => console.log(error)
    )

  }

  limparCampos() {
    this.valor = 0;
    this.destino = '';
  }

}
