import { Earth, Flag, Sparkles, Sun, Sandwich, CakeSlice } from "lucide-react";

export interface Dish {
  name: string;
  description: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  dishes: Dish[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "mexicano",
    label: "Mexicano",
    icon: <Flag size={20} />,
    dishes: [
      { name: "Arroz Blanco ó a la Mexicana", description: "Arroz preparado al estilo tradicional mexicano" },
      { name: "Papas con Chorizo", description: "También disponible con jamón ó con rajas" },
      { name: "Rajas con Queso", description: "También disponible con crema" },
      { name: "Nopales a la Mexicana", description: "También con chorizo, con chile ó guisados" },
      { name: "Frijoles Adobados", description: "También charros, refritos ó con chorizo" },
      { name: "Flautas", description: "Crujientes flautas doradas rellenas" },
      { name: "Alambre", description: "Mezcla de carnes y verduras al estilo norteño" },
      { name: "Discada Norteña", description: "Platillo tradicional del norte de México" },
      { name: "Bistek a la Mexicana", description: "También con champiñones ó en salsa roja/verde" },
      { name: "Chicharrón en Salsa", description: "En salsa roja ó verde" },
      { name: "Carne de Puerco en Chile", description: "En chile pasilla, poblano ó en salsa roja/verde" },
      { name: "Carne al Pastor", description: "Marinada con achiote y especias tradicionales" },
      { name: "Carne de Cerdo Adobada", description: "Adobada con papas al estilo casero" },
      { name: "Costilla de Cerdo con Nopales", description: "Combinación clásica de sabores mexicanos" },
      { name: "Carne Deshebrada", description: "Con rajas, papas ó chipotle" },
      { name: "Lomo en Salsa Verde", description: "Lomo de cerdo bañado en salsa verde" },
      { name: "Picadillo", description: "Carne molida guisada con verduras" },
      { name: "Mole con Pollo", description: "También con carne de puerco ó mole verde" },
      { name: "Pollo Deshebrado", description: "En salsa verde ó en adobo" },
      { name: "Tinga", description: "De pollo ó de cerdo al chipotle" },
      { name: "Salchichas Guisadas", description: "En salsa casera de tomate" },
      { name: "Cochinita Pibil", description: "Receta tradicional yucateca" },
      { name: "Carne en su Jugo", description: "Estilo Jalisco con frijoles y tocino" },
    ],
  },
  {
    id: "internacional",
    label: "Internacional",
    icon: <Earth size={20} />,
    dishes: [
      { name: "Spaguetti", description: "Poblano, con crema, campesino, al chipotle, al morrón, cheddar, al cilantro ó tres quesos" },
      { name: "Tallarines con Crema", description: "También preparados al gusto" },
      { name: "Tornillos con Pimiento", description: "También preparados al gusto" },
      { name: "Papas con Crema", description: "También al gratín, a la mantequilla ó al limón" },
      { name: "Crepas", description: "Con rajas y elote, con champiñones, a los tres quesos ó espinacas" },
      { name: "Pollo con Rajas", description: "También a la crema con champiñones, al pimiento, en adobo ó barbecue" },
      { name: "Pechugas Rellenas", description: "Poblanas, cordon bleu, tres quesos ó empanizadas" },
      { name: "Lomo en Salsa de Tamarindo", description: "También en adobo, en salsa mignon ó con rajas y elote" },
      { name: "Costillas a la Barbecue", description: "Costillas glaseadas al estilo BBQ" },
      { name: "Lasagna de Res", description: "Capas de pasta con carne y queso gratinado" },
      { name: "Alambre de Bistek", description: "Con pimientos, cebolla y queso fundido" },
      { name: "Pastel Azteca", description: "Capas de tortilla con pollo y salsa" },
      { name: "Nuggets de Pollo", description: "Crujientes nuggets de pollo empanizado" },
      { name: "Pollo a la Mostaza", description: "Pechuga en cremosa salsa de mostaza" },
      { name: "Cerdo al Chile Ancho", description: "Carne de cerdo en salsa de chile ancho" },
    ],
  },
  {
    id: "especial",
    label: "Especial",
    icon: <Sparkles size={20} />,
    dishes: [
      { name: "Filete de Res en Salsa de Vino Tinto", description: "Corte premium bañado en reducción de vino tinto" },
      { name: "Pechuga en Salsa de Mango", description: "Pechuga de pollo con salsa tropical de mango" },
      { name: "Medallones de Cerdo", description: "En salsa de ciruela pasa con hierbas finas" },
      { name: "Salmón a la Parrilla", description: "Con mantequilla de hierbas y limón" },
      { name: "Rib Eye a la Pimienta", description: "Corte de res premium con costra de pimienta" },
      { name: "Pollo Relleno de Espinacas", description: "Con queso de cabra y nuez" },
      { name: "Arrachera Marinada", description: "Con chimichurri y guarniciones gourmet" },
      { name: "Cordon Bleu Premium", description: "Relleno de jamón serrano y queso gruyère" },
    ],
  },
  {
    id: "desayunos",
    label: "Desayunos",
    icon: <Sun size={20} />,
    dishes: [
      { name: "Huevos Rancheros", description: "Huevos estrellados sobre tortilla con salsa ranchera" },
      { name: "Chilaquiles", description: "Rojos ó verdes con pollo, queso y crema" },
      { name: "Huevos a la Mexicana", description: "Revueltos con jitomate, chile y cebolla" },
      { name: "Huevos con Jamón", description: "También disponible con chorizo ó tocino" },
      { name: "Enfrijoladas", description: "Tortillas bañadas en frijol con queso y crema" },
      { name: "Entomatadas", description: "Tortillas en salsa de tomate con pollo" },
      { name: "Molletes", description: "Bolillo con frijoles, queso gratinado y pico de gallo" },
      { name: "Hot Cakes", description: "Con miel de maple, mantequilla y fruta fresca" },
      { name: "Fruta con Granola y Yogurt", description: "Selección de fruta fresca de temporada" },
      { name: "Tamales", description: "De rajas, mole, verde ó dulce" },
    ],
  },
  {
    id: "bocadillos",
    label: "Bocadillos",
    icon: <Sandwich size={20} />,
    dishes: [
      { name: "Taquitos Dorados", description: "De pollo ó papa con lechuga, crema y queso" },
      { name: "Quesadillas", description: "De flor de calabaza, huitlacoche ó champiñones" },
      { name: "Sopes", description: "Con frijoles, carne, lechuga, crema y queso" },
      { name: "Gorditas", description: "De chicharrón, rajas, picadillo ó frijol" },
      { name: "Empanadas", description: "De pollo, carne ó queso con rajas" },
      { name: "Mini Hamburguesas", description: "Sliders con queso y aderezos especiales" },
      { name: "Brochetas de Pollo", description: "Marinadas con pimiento y cebolla" },
      { name: "Ensalada César", description: "Con pollo a la parrilla, crutones y parmesano" },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    icon: <CakeSlice size={20} />,
    dishes: [
      { name: "Pastel de Tres Leches", description: "Bizcocho húmedo bañado en tres leches" },
      { name: "Flan Napolitano", description: "Flan cremoso con caramelo casero" },
      { name: "Arroz con Leche", description: "Postre tradicional con canela" },
      { name: "Gelatina Mosaico", description: "Colorida gelatina de múltiples sabores" },
      { name: "Churros con Chocolate", description: "Churros espolvoreados con azúcar y canela" },
      { name: "Pay de Queso", description: "Con base de galleta y frutos rojos" },
      { name: "Carlota de Limón", description: "Postre frío con galletas y limón" },
      { name: "Fresas con Crema", description: "Fresas frescas con crema batida" },
    ],
  },
];
