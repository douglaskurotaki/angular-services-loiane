import { CursosService } from '../cursos/cursos.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [    
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
		CursosService
	],
	exports: [
		CriarCursoComponent
	]
})
export class CriarCursoModule { }
