import {
  Earth,
  Flag,
  Sparkles,
  Sun,
  CakeSlice,
  HandPlatter,
} from "lucide-react";

export interface Dish {
  name: string;
  description: string;
}

export interface MenuSection {
  title: string;
  dishes: Dish[];
}

export interface MenuCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  dishes?: Dish[];
  sections?: MenuSection[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "mexicano",
    label: "Mexicano",
    icon: <Flag size={20} />,
    sections: [
      {
        title: "Carne",
        dishes: [
          {
            name: "Alambre",
            description:
              "Jugosa combinación de carnes salteadas con pimiento morrón, cebolla y un toque ahumado al estilo norteño.",
          },
          {
            name: "Discada Norteña",
            description:
              "Mezcla tradicional de diversos cortes de carne, embutidos y vegetales, sazonados con el auténtico sabor del norte.",
          },
          {
            name: "Bistek a la Mexicana",
            description:
              "Finas láminas de res cocinadas con tomate, chile y cebolla; también disponible con champiñones o en salsa roja/verde.",
          },
          {
            name: "Chicharrón en Salsa",
            description:
              "Crujiente chicharrón de cerdo que se suaviza en una cocción lenta dentro de nuestra especial salsa roja o verde.",
          },
          {
            name: "Carne de Puerco en Chile",
            description:
              "Trozos de cerdo tiernos, bañados en una selección de chiles pasilla, poblano o en nuestras clásicas salsas de la casa.",
          },
          {
            name: "Carne al Pastor",
            description:
              "Carne de cerdo marinada en un tradicional adobo de achiote y especias, con ese sabor agridulce tan característico.",
          },
          {
            name: "Carne de Cerdo Adobada",
            description:
              "Cerdo suavemente cocinado en adobo rojo y acompañado de papas, logrando un sabor casero y reconfortante.",
          },
          {
            name: "Costilla de Cerdo con Nopales",
            description:
              "Jugosas costillas guisadas con tiernos nopales, una combinación clásica que resalta lo mejor de la cocina mexicana.",
          },
          {
            name: "Carne Deshebrada",
            description:
              "Carne de res finamente deshebrada, preparada al gusto con rajas de poblano, papas o en una picante salsa chipotle.",
          },
          {
            name: "Lomo en Salsa Verde",
            description:
              "Cortes selectos de lomo de cerdo bañados en una salsa verde de tomatillo fresco y especias seleccionadas.",
          },
          {
            name: "Picadillo",
            description:
              "Carne molida de res guisada con cubitos de zanahoria y papa en una base de tomate con sazón de hogar.",
          },
          {
            name: "Mole con Pollo",
            description:
              "Piezas de pollo cubiertas en nuestro complejo y artesanal mole poblano; también disponible con cerdo o mole verde.",
          },
          {
            name: "Pollo Deshebrado",
            description:
              "Pechuga de pollo deshebrada, ideal para quienes buscan algo ligero en salsa verde o en un suave adobo rojo.",
          },
          {
            name: "Tinga",
            description:
              "Guiso tradicional de pollo o cerdo deshebrado con cebolla y el toque ahumado y picante del chile chipotle.",
          },
          {
            name: "Salchichas Guisadas",
            description:
              "Rodajas de salchicha de primera calidad cocinadas en una sencilla pero deliciosa salsa de tomate y cebolla.",
          },
          {
            name: "Cochinita Pibil",
            description:
              "Carne de cerdo desmenuzada marinada en naranja agria y achiote, cocinada lentamente al estilo tradicional yucateco.",
          },
          {
            name: "Carne en su Jugo",
            description:
              "Especialidad de Jalisco consistente en finos cortes de res en su propio caldo, acompañados de frijoles de la olla y tocino.",
          },
        ],
      },
      {
        title: "Acompañamientos",
        dishes: [
          {
            name: "Arroz Blanco ó a la Mexicana",
            description:
              "Granos de arroz perfectamente cocidos, ya sea en una versión blanca con verduras o roja con el sazón tradicional de la casa.",
          },
          {
            name: "Papas con Chorizo",
            description:
              "Dados de papa suavemente dorados con chorizo de la región; también puedes pedirlas con jamón o rajas para un sabor más ligero.",
          },
          {
            name: "Rajas con Queso",
            description:
              "Tiras de chile poblano asado y combinadas con queso fundido; una opción clásica que también puede servirse con crema ácida.",
          },
          {
            name: "Nopales a la Mexicana",
            description:
              "Nopales tiernos salteados con tomate, cebolla y chile; disponibles también con chorizo o guisados en nuestra salsa especial.",
          },
          {
            name: "Frijoles Adobados",
            description:
              "Frijoles de la olla sazonados en adobo; si lo prefieres, pide nuestros frijoles charros, refritos o con un toque de chorizo.",
          },
          {
            name: "Flautas",
            description:
              "Tortillas de maíz rellenas y fritas hasta alcanzar una textura perfectamente crujiente; el acompañamiento ideal para cualquier guiso.",
          },
        ],
      },
    ],
  },
  {
    id: "internacional",
    label: "Internacional",
    icon: <Earth size={20} />,
    sections: [
      {
        title: "Carnes",
        dishes: [
          {
            name: "Pollo con Rajas",
            description:
              "Tiras de pollo con rajas poblanas; también disponible en versiones a la crema con champiñones, al pimiento, adobo o barbecue.",
          },
          {
            name: "Pechugas Rellenas",
            description:
              "Exquisitas pechugas preparadas al estilo Cordon Bleu, poblanas o a los tres quesos, con opción de empanizado crujiente.",
          },
          {
            name: "Lomo en Salsa de Tamarindo",
            description:
              "Corte selecto de lomo bañado en una reducción agridulce de tamarindo; también se ofrece en salsa mignon, adobo o con rajas.",
          },
          {
            name: "Costillas a la Barbecue",
            description:
              "Costillas de cerdo tiernas y jugosas, glaseadas lentamente con nuestra salsa BBQ ahumada de la casa.",
          },
          {
            name: "Lasagna de Res",
            description:
              "Capas de pasta artesanal intercaladas con boloñesa de res sazonada y una generosa mezcla de quesos fundidos.",
          },
          {
            name: "Alambre de Bistek",
            description:
              "Bistec de res salteado con pimientos coloridos y cebolla, coronado con una capa de queso fundido de excelente calidad.",
          },
          {
            name: "Pastel Azteca",
            description:
              "Tradicional combinación de capas de tortilla, pollo deshebrado, salsa verde o roja, crema y queso gratinado al horno.",
          },
          {
            name: "Nuggets de Pollo",
            description:
              "Pequeños bocados de pechuga de pollo empanizados y fritos hasta obtener una textura dorada y crujiente.",
          },
          {
            name: "Pollo a la Mostaza",
            description:
              "Tiernas piezas de pollo bañadas en una salsa aterciopelada a base de mostaza fina y especias seleccionadas.",
          },
          {
            name: "Cerdo al Chile Ancho",
            description:
              "Carne de cerdo de cocción lenta sumergida en una salsa de chile ancho de sabor profundo, dulce y ligeramente ahumado.",
          },
        ],
      },
      {
        title: "Acompañamiento",
        dishes: [
          {
            name: "Spaguetti",
            description:
              "Pasta larga en salsa a elegir: poblana, chipotle, morrón, cilantro, tres quesos o nuestra cremosa receta campesina.",
          },
          {
            name: "Tallarines con Crema",
            description:
              "Cintas de pasta suave bañadas en una delicada base láctea; podemos prepararlos al gusto con su ingrediente favorito.",
          },
          {
            name: "Tornillos con Pimiento",
            description:
              "Pasta corta tipo rotini salteada con una vibrante salsa de pimientos; opción de personalizarlos con su sazón preferido.",
          },
          {
            name: "Papas con Crema",
            description:
              "Rebanadas de papa cocidas a la perfección, servidas con crema o disponibles al gratín, a la mantequilla o al limón.",
          },
          {
            name: "Crepas",
            description:
              "Delgadas y suaves crepas rellenas de rajas con elote, champiñones frescos, espinacas o una mezcla de tres quesos.",
          },
        ],
      },
    ],
  },
  {
    id: "platillos",
    label: "Platillos",
    icon: <HandPlatter size={20} />,
    sections: [
      {
        title: "Carnes",
        dishes: [
          {
            name: "Lomo",
            description:
              "En salsa de champiñones, crema de poblano, adobo, con rajas y elote, salsa de tamarindo, relleno, salsa agridulce, salsa de ciruela pasa ó salsa de cacahuate y nuez",
          },
          {
            name: "Pechugas de Pollo",
            description:
              "Con crema de poblano, crema de chipotle, salsa de champiñones, a los tres quesos, rellenas de espinacas, salsa de mango, al chipotle con piña, agridulce ó al tocino en salsa frutal",
          },
        ],
      },
      {
        title: "Acompañamientos",
        dishes: [
          {
            name: "Papas",
            description:
              "Tiernos cortes de papa preparados al gusto: gratinados con queso, salteados a la mantequilla o con un toque cítrico de limón.",
          },
          {
            name: "Puré de Papa",
            description:
              "Clásica receta casera de textura tersa y cremosa, elaborada con papas seleccionadas y el sazón secreto de la casa.",
          },
          {
            name: "Papa Rellena",
            description:
              "Papa horneada de gran tamaño, rellena de ingredientes selectos que se funden para crear una experiencia reconfortante.",
          },
          {
            name: "Crepas Rellenas",
            description:
              "Elegantes crepas saladas rellenas de rajas con elote, champiñones, mezcla de tres quesos o espinacas a la crema.",
          },
          {
            name: "Verduras al Vapor",
            description:
              "Mezcla saludable de vegetales de temporada cocidos al punto exacto para mantener su frescura, color y nutrientes.",
          },
          {
            name: "Ensalada",
            description:
              "Variedad refrescante a elegir: desde la clásica César hasta combinaciones frutales de piña, manzana o col con zanahoria.",
          },
          {
            name: "Montaña de Arroz",
            description:
              "Generosa porción de arroz esponjoso, servido de forma estética para acompañar y realzar el sabor de cualquier plato fuerte.",
          },
        ],
      },
      {
        title: "Pastas",
        dishes: [
          {
            name: "Spaguetti a gusto",
            description:
              "Pasta clásica preparada a tu elección con nuestra cremosa salsa de la casa, poblana, campesina, chipotle, cheddar o mantequilla.",
          },
          {
            name: "Tallarines con Crema",
            description:
              "Cintas de pasta suave bañadas en una delicada base láctea; una opción ligera y elegante que también podemos personalizar a tu gusto.",
          },
          {
            name: "Tornillos con Pimiento",
            description:
              "Pasta rotini salteada con una vibrante salsa de pimientos frescos, sazonada con hierbas aromáticas para un sabor casero único.",
          },
        ],
      },
      {
        title: "Cremas",
        dishes: [
          {
            name: "Crema Poblana",
            description:
              "Una opción suave y aterciopelada hecha a base de chile poblano asado; tiene un sabor ligeramente ahumado y un toque de picor muy sutil",
          },
          {
            name: "Crema Campesina",
            description:
              "Preparada con granos de elote, calabacita y un toque de chile poblano; rescata los sabores tradicionales del campo en cada cucharada.",
          },
          {
            name: "Crema de Nuez",
            description:
              "Una opción sofisticada con un sabor ligeramente dulce y tostado; la textura es delicada y el retrogusto a frutos secos es delicioso.",
          },
          {
            name: "Crema de Queso",
            description:
              "Mezcla cremosa y reconfortante de quesos seleccionados que se funden en una textura sedosa; es ideal para los amantes de los sabores lácteos intensos",
          },
          {
            name: "Crema de Champiñones",
            description:
              "Una receta tradicional con trozos de champiñones frescos salteados; destaca por su aroma terroso y su consistencia elegante",
          },
          {
            name: "Crema de Elotes",
            description:
              "Dulce y reconfortante, hecha con granos de elote tierno procesados hasta lograr una textura fina; es un favorito de todas las edades.",
          },
          {
            name: "Crema Verde",
            description:
              "Elaborada con una variedad de vegetales verdes y hierbas frescas; ofrece un perfil de sabor ligero, herbal y muy equilibrado",
          },
          {
            name: "Crema de Cilantro",
            description:
              "Muy aromática y refrescante, esta crema resalta el sabor vibrante del cilantro fresco con una base láctea muy suave.",
          },
          {
            name: "Sopa Campesina",
            description:
              "A diferencia de la crema, suele ser un caldo más ligero con verduras picadas y granos de elote; es nutritiva y con un sazón muy casero.",
          },
          {
            name: "Sopa Tarasca",
            description:
              "Un clásico michoacano de frijol con un toque de jitomate y chile ancho; se distingue por su profundidad de sabor y su textura espesa.",
          },
        ],
      },
    ],
  },
  {
    id: "especial",
    label: "Especial",
    icon: <Sparkles size={20} />,
    sections: [
      {
        title: "Plato Fuerte",
        dishes: [
          {
            name: "Lasagna",
            description:
              "Láminas de pasta intercaladas con una rica salsa boloñesa y bechamel, terminadas con una capa de queso gratinado.",
          },
          {
            name: "Poblano Hojaldrado",
            description:
              "Chile poblano relleno envuelto en una crujiente y dorada masa de hojaldre, ofreciendo una textura única y elegante.",
          },
          {
            name: "Crepas Rellenas",
            description:
              "Suaves y delgadas crepas rellenas de guisos selectos, bañadas en salsa para resaltar su sabor delicado.",
          },
          {
            name: "Pastel de Carne",
            description:
              "Un clásico reconfortante de carne molida sazonada y horneada, con una textura jugosa y un sabor tradicional.",
          },
          {
            name: "Balsas de Camarones",
            description:
              "Base de masa o pan rellena de camarones preparados, ideal para quienes buscan un sabor marino y sofisticado.",
          },
          {
            name: "Empanadas Rellenas",
            description:
              "Masa frita o al horno con rellenos a elegir como champiñones, rajas, pollo, atún o variedades dulces.",
          },
          {
            name: "Chiles en Nogada",
            description:
              "Platillo barroco de chile poblano relleno de picadillo de frutas, bañado en crema de nuez de Castilla y granada.",
          },
        ],
      },
      {
        title: "Acompañamientos",
        dishes: [
          {
            name: "Ensalada de Espinaca con Fresa",
            description:
              "Hojas de espinaca fresca combinadas con la dulzura de la fresa, creando un contraste ligero y refrescante.",
          },
          {
            name: "Ensalada de Manzanas Rojas",
            description:
              "Combinación clásica de manzanas rojas con un aderezo cremoso, perfecta para equilibrar platos fuertes.",
          },
          {
            name: "Ensalada Nochebuena",
            description:
              "Mezcla tradicional de manzanas y betabel que aporta un color vibrante y un sabor dulce y terroso.",
          },
          {
            name: "Ensalada de Zanahoria y Piña",
            description:
              "Zanahoria rallada con trozos de piña, una opción dulce y crujiente muy popular en celebraciones.",
          },
          {
            name: "Ensalada de Col Morada y Crema Dulce",
            description:
              "Col morada finamente picada en una base de crema dulce, ofreciendo una textura firme y un sabor suave.",
          },
          {
            name: "Ensalada de Piña y Manzana",
            description:
              "Un acompañamiento frutal y fresco que combina la acidez de la piña con la textura crujiente de la manzana.",
          },
          {
            name: "Ensalada Verde (Cesar)",
            description:
              "Hojas de lechuga orejona con aderezo César, crutones y queso, un clásico indispensable y balanceado.",
          },
          {
            name: "Verduras a la Mantequilla",
            description:
              "Variedad de vegetales de temporada salteados suavemente en mantequilla para resaltar su sabor natural.",
          },
          {
            name: "Arroz",
            description:
              "Arroz blanco o rojo cocido a la perfección, el acompañamiento tradicional ideal para cualquier guiso del menú.",
          },
        ],
      },
    ],
  },
  {
    id: "desayunos",
    label: "Desayunos",
    icon: <Sun size={20} />,
    dishes: [
      {
        name: "Huevo (con jamón, salchichas, chorizo o a la mexicana)",
        description:
          "Huevos preparados al gusto con ingredientes frescos, ideales para un desayuno tradicional y completo.",
      },
      {
        name: "Chilaquiles (rojos, verdes o martajados)",
        description:
          "Crujientes totopos bañados en la salsa de tu elección, acompañados de crema, queso y un toque de cebolla.",
      },
      {
        name: "Chicharrón (rojo, verde o molcajete)",
        description:
          "Suave chicharrón de cerdo cocinado a fuego lento en salsas tradicionales llenas de sabor y sazón casero.",
      },
      {
        name: "Costilla con nopales",
        description:
          "Jugosa costilla de cerdo acompañada de tiernos nopales en una salsa especial que resalta su sabor campestre.",
      },
      {
        name: "Cerdo en salsa (verde, roja o martajada)",
        description:
          "Trozos seleccionados de cerdo bañados en salsas de chiles frescos o martajados para un toque rústico.",
      },
      {
        name: "Bistec (a la mexicana, en salsa verde o roja o con champiñones)",
        description:
          "Finas láminas de res cocinadas en su jugo con vegetales frescos o una cremosa salsa de champiñones.",
      },
      {
        name: "Rajas (con queso, crema, elote o papas)",
        description:
          "Tiras de chile poblano salteadas y combinadas con ingredientes cremosos y dulces granos de elote.",
      },
      {
        name: "Papas (con jamón, chorizo, crema o a la mexicana)",
        description:
          "Papas en trozos perfectamente cocidas y salteadas con el ingrediente de tu elección para un sabor reconfortante.",
      },
      {
        name: "Molletes",
        description:
          "Pan bolillo tostado con una base de frijoles refritos y queso fundido, servidos con pico de gallo fresco.",
      },
      {
        name: "Pollo en salsa verde o con chipotle",
        description:
          "Piezas de pollo tiernas bañadas en una vibrante salsa verde o una ahumada y picante salsa de chipotle.",
      },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    icon: <CakeSlice size={20} />,
    dishes: [
      {
        name: "Pastel de Tres Leches",
        description: "Bizcocho húmedo bañado en tres leches",
      },
      {
        name: "Flan Napolitano",
        description: "Flan cremoso con caramelo casero",
      },
      { name: "Arroz con Leche", description: "Postre tradicional con canela" },
      {
        name: "Gelatina Mosaico",
        description: "Colorida gelatina de múltiples sabores",
      },
      {
        name: "Churros con Chocolate",
        description: "Churros espolvoreados con azúcar y canela",
      },
      {
        name: "Pay de Queso",
        description: "Con base de galleta y frutos rojos",
      },
      {
        name: "Carlota de Limón",
        description: "Postre frío con galletas y limón",
      },
      {
        name: "Fresas con Crema",
        description: "Fresas frescas con crema batida",
      },
    ],
  },
];
