import { Component, OnInit } from '@angular/core';
import {CatastrosService} from "../../services/catastros/catastros.service";

@Component({
  selector: 'app-add-tramite',
  templateUrl: './add-tramite.component.html',
  styleUrls: ['./add-tramite.component.css']
})
export class AddTramiteComponent implements OnInit {

  constructor(private catastrosService: CatastrosService) { }

  ngOnInit(): void {
  }

}
