export interface basketItem {
  id: number;
  name: string;
  price: number;
    quantiy: number;
  img: string;
}

export const BASKET: basketItem[] = [{
    id: 1,  name: 'Produit 1', price: 10, img: 'https://via.placeholder.com/150',quantiy:0
  },{
    id: 2,  name: 'Produit 2', price: 15, img: 'https://via.placeholder.com/150',quantiy:0
  },{
    id: 3,  name: 'Produit 3', price: 20, img: 'https://via.placeholder.com/150',quantiy:0
}];