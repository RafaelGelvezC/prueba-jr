import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../ApiService/api-service.service';
import { User, Category, Product } from '../Interfaces/interfaces'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  selectedUser: User = { id: 0, name: '', email: '' };
  categories: Category[] = [];
  selectedCategory: Category = { id: 0, name: ''};
  products: Product[] = [];
  selectedProduct: Product = { id: 0, name: '', category: {id: 0, name: ''}, price: 0 };

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
    });
    this.apiService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.apiService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  createUser(name: string, email: string) {
    this.apiService.createUser({ name, email } as User).subscribe(user => {
      this.users.push(user);
    });
  }

  updateUser(user: User) {
    this.apiService.updateUser(user).subscribe(() => {
      // Actualiza la lista de usuarios
      this.apiService.getUsers().subscribe(users => {
        this.users = users;
      });
    });
  }

  deleteUser(user: User) {
    this.apiService.deleteUser(user.id).subscribe(() => {
      // Actualiza la lista de usuarios
      this.apiService.getUsers().subscribe(users => {
        this.users = users;
      });
    });
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  createCategory(name: string) {
    this.apiService.createCategory({ name } as Category).subscribe(category => {
      this.categories.push(category);
    });
  }

  updateCategory(category: Category) {
    this.apiService.updateCategory(category).subscribe(() => {
      // Actualiza la lista de categorías
      this.apiService.getCategories().subscribe(categories => {
        this.categories = categories;
      });
    });
  }

  deleteCategory(category: Category) {
    this.apiService.deleteCategory(category.id).subscribe(() => {
      // Actualiza la lista de categorías
      this.apiService.getCategories().subscribe(categories => {
        this.categories = categories;
      });
    });
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
  createProduct(name: string, category: Category, price: number) {
    this.apiService.createProduct({ name, category, price } as Product).subscribe(product => {
      this.products.push(product);
    });
  }

  updateProduct(product: Product) {
    this.apiService.updateProduct(product).subscribe(() => {
      // Actualiza la lista de productos
      this.apiService.getProducts().subscribe(products => {
        this.products = products;
      });
    });
  }

  deleteProduct(product: Product) {
    this.apiService.deleteProduct(product.id).subscribe(() => {
      // Actualiza la lista de productos
      this.apiService.getProducts().subscribe(products => {
        this.products = products;
      });
    });
  }
}
