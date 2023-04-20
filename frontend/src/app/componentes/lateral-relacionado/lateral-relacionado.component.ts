import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-lateral-relacionado',
  templateUrl: './lateral-relacionado.component.html',
  styleUrls: ['./lateral-relacionado.component.css']
})
export class LateralRelacionadoComponent implements OnInit {
  @Input('data') nota : any ;
  constructor() { }

  ngOnInit(): void {
  }


}
