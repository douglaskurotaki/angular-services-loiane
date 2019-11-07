import { LogService } from './shared/log.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosService } from './cursos/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursoModule } from './cursos/curso.module';



@NgModule({
  declarations: [
    AppComponent	
  ],
  imports: [
		BrowserModule,
		CriarCursoModule,
		CursoModule
  ],
  providers: [
		CursosService,
		LogService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
