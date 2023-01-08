import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Category, Product } from '../Interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl = 'https://prueba-tecnica-idecide.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

/*   login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/auth/login`, { email, password });
  } */

  getCategories() {
    return this.http.get<Category[]>(`${this.baseUrl}/categorias`);
  }

  getCategory(id: number) {
    return this.http.get<Category>(`${this.baseUrl}/categorias/${id}`);
  }

  createCategory(category: Category) {
    return this.http.post<Category>(`${this.baseUrl}/categorias`, category);
  }

  updateCategory(category: Category) {
    return this.http.put<Category>(`${this.baseUrl}/categorias/${category.id}`, category);
  }

  deleteCategory(id: number) {
    return this.http.delete<Category>(`${this.baseUrl}/categorias/${id}`);
  }

  getUsers() {
    return this.http.get<User[]>(`${this.baseUrl}/usuarios`);
  }

  getUser(id: number) {
    return this.http.get<User>(`${this.baseUrl}/usuarios/${id}`);
  }

  createUser(user: User) {
    return this.http.post<User>(`${this.baseUrl}/usuarios`, user);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.baseUrl}/usuarios/${user.id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete<User>(`${this.baseUrl}/usuarios/${id}`);
  }

  getProducts() {
    return this.http.get<Product[]>(`${this.baseUrl}/productos`);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/productos/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(`${this.baseUrl}/productos`, product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.baseUrl}/productos/${product.id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.baseUrl}/productos/${id}`);
  }
}
