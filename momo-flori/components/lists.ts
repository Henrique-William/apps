export interface ProductPlants {
  id: number;
  title: string;
  biotanicalName: string;
  color: string;
  image: any; // Defina como `any` para o TypeScript aceitar o `require(...)`
  subtitle: string;
  category: string;
  description: string;
  rating: number;
  price: number;
  isLiked: boolean;
}

export const plants: ProductPlants[] = [
  {
    id: 1,
    title: "Planta de figueira-lira",
    biotanicalName: 'Ficus lyrata',
    color: "#E8EDEB",
    image: require("@/assets/images/fiddle-leaf-fig.png"), // Remova as aspas aqui
    subtitle: "Broadleaf evergreen",
    category: "Indoor",
    description: "Nativo das províncias de Yunnan e Sichuan, no sul da China, a planta do dinheiro chinês foi trazida pela primeira vez para o Reino Unido em 1906 pelo botânico escocês George Forrest (sim, sabemos exatamente quem a encontrou). Tornou-se uma planta de casa popular no final do século XX porque é simples de cultivar e muito fácil de propagar, o que significa que os amigos podiam trocar mudas entre si. Isso lhe rendeu o apelido de 'planta de passar adiante'.",
    rating: 5.0,
    price: 35.0,
    isLiked: true,
  },
  {
    id: 2,
    title: "Planta Ninho de Pássaro",
    biotanicalName: 'Asplenium nidus',
    color: "#FCF0F0",
    image: require("@/assets/images/birds-nest.png"), // Remova as aspas aqui também
    subtitle: "Perennial",
    category: "Indoor",
    description: 'Nativa das regiões tropicais da Ásia, Austrália e Havaí, a planta ninho de pássaro foi descoberta em suas exuberantes florestas. Com sua forma única, que lembra um ninho acolhedor, ela rapidamente se tornou uma favorita entre os amantes de plantas, especialmente no século XX. Sua facilidade de cultivo e propagação a tornou uma companheira perfeita para compartilhar com amigos, o que lhe rendeu o apelido carinhoso de "planta de passar adiante".',
    rating: 4.8,
    price: 22.0,
    isLiked: false,
  },
];


const array = [{}, {}]