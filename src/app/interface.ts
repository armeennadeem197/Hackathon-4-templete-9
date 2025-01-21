export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}
export interface fullProduct {
  price_id: string;
  _id: string
  name: string
  slug: string
  category: string
  price: number
  description: string
  images: string[]
  stockStatus: string;
  products: fullProduct[];
  createdAt: string;
  rating?: number; 
  imageUrl: string; 

}

type ProductGridProps = {
  imageUrl: string; // Added imageUrl property

  images: string[];

};

