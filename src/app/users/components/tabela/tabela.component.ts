import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit{

  constructor(private service: UserServiceService){}

  public users!: User[]

  //public usersList: Array<User> = [];

  public deleteUser(event: number){
    this.service.deleteUser(event);
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe((data) => {this.users = data})
  }

}