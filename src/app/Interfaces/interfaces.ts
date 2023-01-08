export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
}
