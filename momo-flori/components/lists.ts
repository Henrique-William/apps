export interface ProductPlants {
  title: string;
  color: string;
  image: any;
  subtitle: string;
  category: string;
  rating: number;
  price: number;
  isLiked: boolean;
}

export const plants: ProductPlants[] = [
  {
    title: "Fiddle leaf fig plant",
    color: "#E8EDEB",
    image: require("@/assets/images/fiddle-leaf-fig.png"),
    subtitle: "Broadleaf evergreen",
    category: 'Indoor',
    rating: 5.0,
    price: 35.0,
    isLiked: false,
  },
  {
    title: "Birds nest plant",
    color: "#FCF0F0",
    image: require("@/assets/images/birds-nest.png"),
    subtitle: "Perennial",
    category: 'Indoor',
    rating: 4.8,
    price: 22.0,
    isLiked: false,
  },
];

