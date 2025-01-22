export interface Plant {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface CartItem extends Plant {
  quantity: number;
}