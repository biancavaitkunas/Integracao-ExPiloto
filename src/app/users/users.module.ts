import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';



@NgModule({
  declarations: [
    UserComponent,
    TabelaComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [UserComponent]
})
export class UsersModule { }
