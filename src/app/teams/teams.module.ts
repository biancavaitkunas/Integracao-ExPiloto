import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent,
    TabelaComponent,
    TeamsComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [TeamsComponent]
})
export class TeamsModule { }
