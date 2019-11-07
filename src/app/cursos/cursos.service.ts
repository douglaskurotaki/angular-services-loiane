import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

	emitirCursoCriado = new EventEmitter<string>();
	static criouNovoCurso = new EventEmitter<string>();

	private cursos: string[] = ['Angular', 'Java', 'Ruby'];

	constructor(private logService: LogService) {
		console.log('CursoService');		
	}

	getCursos() {
		this.logService.consoleLog('Obtendo lista de cursos');
		return this.cursos;
	}

	addCurso(curso: string) {
		this.logService.consoleLog(`Criando um novo curso  ${curso}`)
		this.cursos.push(curso);
		this.emitirCursoCriado.emit(curso);
		CursosService.criouNovoCurso.emit(curso);
	}
}