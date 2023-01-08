import { Component } from '@angular/core';
import { User, Category, Product } from './Interfaces/interfaces';
import { UsersComponent } from './users/users.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Pruebajr';

  users: User[] = [];
  categories: Category[] = [];
  products: Product[] = [];

  
  usersComponent = new UsersComponent();

}
