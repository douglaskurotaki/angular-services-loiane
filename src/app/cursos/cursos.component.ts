import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

	cursos: string[] = [];	

  constructor(private cursoService: CursosService) { }

  ngOnInit() {
		this.cursos = this.cursoService.getCursos();
		this.cursoService.emitirCursoCriado.subscribe(
			curso => console.log(curso)			
			// function(curso) {
			// 	console.log(curso);				
			// }
		);

		CursosService.criouNovoCurso.subscribe(
			curso => this.cursos.push(curso)
		)
  }

}
