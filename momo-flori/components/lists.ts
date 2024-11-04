export interface ProductFlowers {
  title: string;
  color: string;
  image: any;
  subtitle: string;
  rating: number;
  price: number;
  isLiked: boolean;
}

export const flores: ProductFlowers[] = [
  {
    title: "Rosa de Pedra",
    color: "#F2F7FF",
    image: require("@/assets/images/rosa-de-pedra.png"),
    subtitle: "From 3 inch",
    rating: 5.0,
    price: 25.0,
    isLiked: false,
  },
  {
    title: "Cacto Pera",
    color: "#FCF0F0",
    image: require("@/assets/images/cacto-pera.png"),
    subtitle: "From 3 inch",
    rating: 4.8,
    price: 20.0,
    isLiked: false,
  },
  {
    title: "Zamioculca",
    color: "#F2F7FF",
    image: require("@/assets/images/zamioculca.png"),
    subtitle: "From 3 inch",
    rating: 3.9,
    price: 40.0,
    isLiked: false,
  },
];
