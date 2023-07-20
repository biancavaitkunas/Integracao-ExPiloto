import { Component, OnInit } from '@angular/core';
import { PilotServiceService } from '../../services/pilot-service.service';
import { Pilot } from '../../models/pilots';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit{

  constructor(private service: PilotServiceService){}

  public pilots!: Pilot[]

  public deletePilot(event: Pilot){
    this.service.deletePilot(event).subscribe(() => this.service.getPilots().subscribe((data) => this.pilots = data));
  }

  public editPilot(pilot: Pilot){
    this.service.editPilot(pilot);
  }

  ngOnInit(): void {
    this.service.getPilots().subscribe((data) => {this.pilots = data})
  }



}
