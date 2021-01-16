import { Component, OnInit } from '@angular/core';
import{DataStudentService} from 'src/app/shared/services/data-student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
lisData=[];
  constructor( private dataStudentService:DataStudentService) {

   }

  ngOnInit(): void {
    this.getListMaterias();
  }
  getListMaterias(){
    this.dataStudentService.getDataLogs('GestionProyectos').subscribe((logs:any) =>this.lisData=logs);
    this.dataStudentService.getDataLogs('GestionProyectos').subscribe(logs =>console.log('Estas son las materias',logs));
    // console.log('prueba')
  }
}
