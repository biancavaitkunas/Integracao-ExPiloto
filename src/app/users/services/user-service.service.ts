import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { LoginServiceService } from 'src/app/login/services/login-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService{

  public emitEventUser = new EventEmitter();
  public updateEvent = new EventEmitter();

  public user!: User;

  constructor(private http: HttpClient, private loginService: LoginServiceService) {}

  public urlBase = `http://localhost:8080/usuario`;
  private usersSubject = new Subject<User[]>();

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.loginService.token}),
    responseType: 'text' as 'json' //diz que o tipo será json, content type fica dentro de headers no postman
  };

  public insert(user: User): Observable<User> {
    return this.http
      .post<User>(this.urlBase, JSON.stringify(user), this.httpOptions)
      .pipe(
        tap(() => {
          this.getUsers();
        })
      );
  }

  getUsers(): Observable<User[]> {

    this.loginService.getToken("usuario3@gmail.com", "senha").subscribe((data)=> {console.log(data)})

    this.http
      .get<User[]>(this.urlBase, this.httpOptions)
      .subscribe((users) => this.usersSubject.next(users));
    return this.usersSubject.asObservable();
  }

  deleteUser(user: User): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${user.id}`);
  }

  getUserByName(name: string): Observable<User[]> {
    let url = `${this.urlBase}/name/${name}`;
    this.http
      .get<User[]>(url)
      .subscribe((users) => this.usersSubject.next(users));
    return this.usersSubject.asObservable();
  }

  public editUser(user: User) {
    this.emitEventUser.emit(user);
  }

  
}
