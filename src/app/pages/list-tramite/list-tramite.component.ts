import { Component, OnInit } from '@angular/core';
import {CatastrosService} from "../../services/catastros/catastros.service";

@Component({
  selector: 'app-list-tramite',
  templateUrl: './list-tramite.component.html',
  styleUrls: ['./list-tramite.component.css']
})
export class ListTramiteComponent implements OnInit {

  constructor(private catastrosService: CatastrosService) { }

  ngOnInit(): void {
  }

}
