export interface Dish {
  name: string;
  description: string;
  image?: string;
  variants?: string[];
}

export interface MenuSection {
  title: string;
  dishes: Dish[];
}

export type MenuCategoryId =
  | "mexicano"
  | "internacional"
  | "platillos"
  | "especial"
  | "desayunos"
  | "postres";

export type MenuIconKey =
  | "flag"
  | "earth"
  | "hand-platter"
  | "sparkles"
  | "sun"
  | "cake-slice";

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  iconKey: MenuIconKey;
  dishes?: Dish[];
  sections?: MenuSection[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "mexicano",
    label: "Mexicano",
    iconKey: "flag",
    sections: [
      {
        title: "Carne",
        dishes: [
          {
            name: "Alambre de la Parilla",
            description:
              "Jugosa combinación de carnes y vegetales con un irresistible toque ahumado al estilo norteño; perfecta para enrollar en tortillas recién hechas y compartir en buena compañía.",
            image: "/menu/mexicano/alambre.webp",
          },
          {
            name: "Discada Norteña",
            description:
              "El espíritu del norte en un solo guiso: cortes selectos y embutidos sazonados con la sazón robusta y generosa que solo el campo mexicano puede ofrecer.",
            image: "/menu/mexicano/discada.webp",
          },
          {
            name: "Bistek a la Mexicana",
            description:
              "Finas láminas de res cocinadas en su propio jugo, llenas de sabor y color. Elige la versión que más te apetezca para hacer de cada taco algo especial.",
            variants: ["champiñones", "salsa roja", "salsa verde"],
            image: "/menu/mexicano/bistekm.webp",
          },
          {
            name: "Chicharrón en Salsa",
            description:
              "Chicharrón de cerdo que se suaviza lentamente en salsa hasta absorber todo el sabor del guiso. Intenso, reconfortante y profundamente mexicano.",
            variants: ["salsa roja", "salsa verde", "salsa martajada"],
            image: "/menu/mexicano/chicharronm.webp",
          },
          {
            name: "Carne de Puerco en Chile",
            description:
              "Trozos de cerdo tiernos y jugosos, cocidos a fuego lento hasta que la salsa de chile los envuelve por completo. Un guiso de alma y carácter.",
            variants: ["chile pasilla", "chile chipotle", "chile rojo"],
            image: "/menu/mexicano/cerdochile.webp",
          },
          {
            name: "Carne al Pastor",
            description:
              "Carne de cerdo marinada en nuestro tradicional adobo de achiote y especias secretas, logrando ese equilibrio agridulce que define al clásico taco mexicano.",
            image: "/menu/mexicano/carnepastor.webp",
          },
          {
            name: "Carne de Cerdo Adobada",
            description:
              "Un abrazo al paladar: cerdo cocido a fuego lento en adobo rojo hasta que cada trozo se satura de sabor. Sencillo, profundo y reconfortante.",
            image: "/menu/mexicano/carneadobada.webp",
          },
          {
            name: "Costilla de Cerdo con Nopales",
            description:
              "Costillas jugosas guisadas con tiernos nopales de la huerta, en una salsa que reúne lo mejor de la cocina de rancho. Un clásico que nunca falla.",
            variants: ["salsa verde", "salsa roja"],
            image: "/menu/mexicano/costillacm.webp",
          },
          {
            name: "Carne Deshebrada",
            description:
              "Res finamente deshebrada y sazonada hasta el último hilo. Cada variante le da un carácter distinto; elige la que mejor va con tu ánimo del día.",
            variants: ["rajas de poblano", "papas", "salsa chipotle"],
            image: "/menu/mexicano/carnedeshebrada.webp",
          },
          {
            name: "Lomo de Cerdo",
            description:
              "Corte selecto de lomo tierno, cocinado al punto exacto y bañado en la salsa que prefieras. Un plato delicado que cambia de carácter con cada elección.",
            variants: ["salsa verde", "salsa roja", "crema", "adobo"],
            image: "/menu/mexicano/lomocerdo.webp",
          },
          {
            name: "Picadillo de Res",
            description:
              "Carne molida de res guisada con zanahoria, papa y tomate natural. El sabor reconfortante que solo la cocina hecha con amor tiene.",
            image: "/menu/mexicano/picadillo.webp",
          },
          {
            name: "Mole a Gusto",
            description:
              "La joya de la gastronomía mexicana. El Mole Poblano envuelve con su complejidad dulce y especiada; el Mole Verde sorprende con su frescura aromática. Elige tu favorito.",
            variants: ["mole poblano", "mole verde"],
            image: "/menu/mexicano/mole.webp",
          },
          {
            name: "Pollo Deshebrado",
            description:
              "Pollo tierno y deshebrado que se presta a mil sabores. Cada variante lo transforma por completo — ligero cuando lo quier, contundente cuando lo necesitas.",
            variants: ["salsa verde", "adobo rojo", "crema", "pimiento morrón"],
            image: "/menu/mexicano/pollodeshebrado.webp",
          },
          {
            name: "Tinga Tradicional",
            description:
              "Cebolla caramelizada, chipotle ahumado y la proteína de tu elección: una combinación que lleva décadas ganando corazones en la cocina mexicana.",
            variants: ["pollo", "cerdo", "res"],
            image: "/menu/mexicano/tinga.webp",
          },
          {
            name: "Salchichas Guisadas",
            description:
              "Un guiso clásico y familiar: salchichas doradas en base de tomate y cebolla, con ese sabor casero que gusta a toda la mesa.",
            image: "/menu/mexicano/salchichas.webp",
          },
          {
            name: "Cochinita Pibil",
            description:
              "Un viaje directo a Yucatán: cerdo desmenuzado, marinado en naranja agria y achiote, cocido lentamente hasta deshacerse en capas de sabor puro.",
            image: "/menu/mexicano/cochinita.webp",
          },
          {
            name: "Carne en su Jugo",
            description:
              "Orgullo tapatío: finos cortes de res cocidos en su propio caldo, tocino crujiente y frijoles de la olla. Una sopa contundente que es toda una institución.",
            variants: ["salsa verde", "salsa roja"],
            image: "/menu/mexicano/carnejugo.webp",
          },
        ],
      },
      {
        title: "Acompañamientos",
        dishes: [
          {
            name: "Arroz al Gusto de Casa",
            description:
              "Granos sueltos y perfectamente cocidos, listos para acompañar cualquier guiso. Cada versión tiene su propia personalidad; elige la que mejor maride con tu plato fuerte.",
            variants: ["blanco", "campesino", "al cilantro"],
            image: "/menu/mexicano/arroz.webp",
          },
          {
            name: "Papas al Estilo de Chef",
            description:
              "Dados de papa dorados hasta lograr ese exterior crujiente que contrasta con su interior esponjoso. Una guarnición que nunca decepciona, sin importar la versión que elijas.",
            variants: ["con chorizo", "con jamón", "con crema", "mexicana"],
            image: "/menu/mexicano/papasm.webp",
          },
          {
            name: "Rajas Poblanas Artesanales",
            description:
              "Chile poblano tatemado que llena de aroma toda la cocina. Su sabor ligeramente ahumado combina a la perfección con cualquiera de sus ingredientes de acompañamiento.",
            variants: ["con queso", "con crema", "con elote", "a la mexicana"],
            image: "/menu/mexicano/rajas.webp",
          },
          {
            name: "Nopales Tiernos de la Huerta",
            description:
              "Recién cortados y bien preparados para eliminar cualquier baba. Frescos y versátiles, son el acompañamiento más honesto de la cocina de rancho.",
            variants: ["en ensalada", "guisados"],
            image: "/menu/mexicano/nopales.webp",
          },
          {
            name: "Frijoles Tradicionales",
            description:
              "El alma de la mesa mexicana. Cada versión tiene su momento: caldosos, espesos, refritos o cargados de ingredientes. El frijol siempre encuentra su lugar.",
            variants: [
              "de la olla",
              "charros",
              "refritos",
              "con chorizo",
              "adobados",
            ],
            image: "/menu/mexicano/frijoles.webp",
          },
          {
            name: "Flautas Crujientes",
            description:
              "Tortillas de maíz enrolladas y fritas hasta lograr un crujido irresistible. El relleno lo eliges tú; el resultado siempre será el complemento favorito de la mesa.",
            variants: ["pollo", "res", "requesón", "rajas", "cerdo"],
            image: "/menu/mexicano/flautas.webp",
          },
        ],
      },
    ],
  },
  {
    id: "internacional",
    label: "Internacional",
    iconKey: "earth",
    sections: [
      {
        title: "Carnes",
        dishes: [
          {
            name: "Pollo",
            description:
              "Tiras de pechuga cocinadas con técnica y criterio, adaptadas a cualquier perfil de sabor que desees. Suave o con carácter, siempre jugoso y bien sazonado.",
            variants: [
              "rajas",
              "crema",
              "champiñones",
              "pimiento",
              "chipotle",
              "mostaza",
            ],
            image: "/menu/internacional/pollorajas.webp",
          },
          {
            name: "Pechugas Rellenas",
            description:
              "Pechugas jugosas rellenas con ingredientes de primera y selladas para no perder ni una gota de sabor. Un plato que impresiona tanto por su presentación como por su sabor.",
            variants: [
              "cordon bleu",
              "poblanas",
              "tres quesos",
              "empanizado",
              "champiñon y tocino",
            ],
            image: "/menu/internacional/pechugas.webp",
          },
          {
            name: "Lomo",
            description:
              "Corte noble y jugoso que acepta con elegancia cada salsa que le ofrecemos. Desde sabores agridulces hasta especiados — cada variante revela una personalidad distinta.",
            variants: [
              "tamarindo",
              "ciruela",
              "poblano",
              "mignon",
              "champiñones",
              "adobo",
              "salsa verde",
            ],
            image: "/menu/internacional/lomo.webp",
          },
          {
            name: "Costillas a la Barbecue",
            description:
              "Costillas de cerdo cocidas hasta el punto donde la carne casi se separa sola del hueso, bañadas en nuestra salsa BBQ ahumada de la casa. Para los fanáticos del sabor intenso.",
            image: "/menu/internacional/costillas.webp",
          },
          {
            name: "Lasagna",
            description:
              "Capas de pasta artesanal que abrazan una generosa boloñesa y una mezcla de quesos que se funden al horno. Reconfortante y saciante en cada porción.",
            variants: ["res", "verduras", "espinacas y champiñones"],
            image: "/menu/internacional/lasagna.webp",
          },
          {
            name: "Alambre",
            description:
              "Proteína salteada a fuego vivo con pimientos coloridos, tocino y cebolla. Un plato vibrante que combina texturas y sabores en cada forkful.",
            variants: ["bistek", "pollo"],
            image: "/menu/internacional/alambrebistek.webp",
          },
          {
            name: "Pastel Azteca",
            description:
              "Una lasagna mexicana: capas de tortilla con pollo deshebrado, salsa y queso gratinado al horno. Crujiente por fuera, jugoso y fundido por dentro.",
            image: "/menu/internacional/pastelazteca.webp",
          },
          {
            name: "Nuggets de Pollo",
            description:
              "Bocados de pechuga pura con un empanizado dorado y crujiente que los convierte en el favorito irresistible de la mesa — a cualquier edad.",
            image: "/menu/internacional/nuggets.webp",
          },
          {
            name: "Cerdo al Chile Ancho",
            description:
              "Cerdo de cocción lenta sumergido en una salsa de chile ancho con notas dulces, ahumadas y una calidez que se siente desde el primer bocado.",
            image: "/menu/internacional/cerdoancho.webp",
          },
        ],
      },
      {
        title: "Acompañamiento",
        dishes: [
          {
            name: "Spaguetti",
            description:
              "Pasta larga cocinada al dente y transformada con la salsa que elijas. La versatilidad de nuestra cocina en un solo plato reconfortante.",
            variants: [
              "poblano",
              "chipotle",
              "morrón",
              "cilantro",
              "tres quesos",
              "campesina",
              "hawaiano",
              "a la crema",
              "a la italiana",
            ],
            image: "/menu/internacional/spaguettii.webp",
          },
          {
            name: "Tallarines",
            description:
              "Cintas de pasta de textura sedosa que retienen la salsa en cada vuelta. Un acompañamiento elegante que se adapta a todos los gustos.",
            variants: [
              "poblano",
              "chipotle",
              "morrón",
              "cilantro",
              "tres quesos",
              "campesina",
              "hawaiano",
              "a la crema",
              "a la italiana",
            ],
            image: "/menu/internacional/tallarines.webp",
          },
          {
            name: "Tornillos",
            description:
              "Pasta corta en espiral que atrapa la salsa en cada rizo, garantizando sabor en cada bocado. Perfecta para quienes disfrutan las texturas contrastantes.",
            variants: [
              "poblano",
              "chipotle",
              "morrón",
              "cilantro",
              "tres quesos",
              "campesina",
              "hawaiano",
              "a la crema",
              "a la italiana",
            ],
            image: "/menu/internacional/tornillos.webp",
          },
          {
            name: "Papas",
            description:
              "Papa perfectamente cocida, lista para tomar la forma que prefieras. Un acompañamiento clásico con opciones que van de lo rústico a lo elegante.",
            variants: ["con crema", "al gratín", "al ajillo", "en puré"],
            image: "/menu/internacional/papas.webp",
          },
          {
            name: "Crepas",
            description:
              "Láminas finas y suaves que envuelven rellenos llenos de sabor. Un acompañamiento sofisticado que eleva cualquier plato fuerte.",
            variants: [
              "rajas con elote",
              "champiñones",
              "espinacas",
              "tres quesos",
            ],
            image: "/menu/internacional/crepas.webp",
          },
        ],
      },
    ],
  },
  {
    id: "platillos",
    label: "Platillos",
    iconKey: "hand-platter",
    sections: [
      {
        title: "Carnes",
        dishes: [
          {
            name: "Lomo",
            description:
              "Corte noble de cerdo seleccionado por su jugosidad y terneza. Lo preparamos con la sazón de la casa y lo vestimos con la salsa que más te inspire",
            variants: [
              "adobo",
              "mignon",
              "campesino",
              "poblano",
              "al chipotle",
              "crema de champiñones",
              "cacahuate y nuez",
              "tamarindo",
              "ciruela",
              "agridulce",
            ],
            image: "/menu/internacional/lomo.webp",
          },

          {
            name: "Pechugas de Pollo",
            description:
              "Pechuga entera, jugosa y bien sazonada, llevada a su máximo potencial con rellenos y preparaciones que la convierten en el plato fuerte de cualquier celebración.",
            variants: [
              "corden bleu",
              "tres quesos",
              "champiñones",
              "espinacas y tocino",
              "frutal",
              "poblana",
              "empanizada",
            ],
            image: "/menu/internacional/pechugas.webp",
          },
          {
            name: "Lasagna",
            description:
              "El clásico italiano con sello propio: capas de pasta, carne sazonada y generosa mezcla de quesos fundidos al horno hasta lograr esa corteza dorada perfecta.",
            variants: ["res", "verduras", "espinacas y champiñones"],
            image: "/menu/internacional/lasagna.webp",
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
            variants: ["gratinadas", "a la crema"],
            image: "/menu/platillos/papasgratin.webp",
          },
          {
            name: "Puré de Papa",
            description:
              "Clásica receta casera de textura tersa y cremosa, elaborada con papas seleccionadas y el sazón secreto de la casa.",
            image: "/menu/platillos/purepapa.webp",
          },
          {
            name: "Papa Rellena",
            description:
              "Papa horneada de gran tamaño, rellena de ingredientes selectos que se funden para crear una experiencia reconfortante.",
            image: "/menu/platillos/papasrellenas.webp",
          },
          {
            name: "Crepas Rellenas",
            description:
              "Elegantes crepas saladas rellenas de rajas con elote, champiñones, mezcla de tres quesos o espinacas a la crema.",
            variants: [
              "rajas con elote",
              "champiñones",
              "espinacas",
              "tres quesos",
            ],
            image: "/menu/internacional/crepas.webp",
          },
          {
            name: "Verduras al Vapor",
            description:
              "Mezcla saludable de vegetales de temporada cocidos al punto exacto para mantener su frescura, color y nutrientes.",
            image: "/menu/platillos/verdurasvapor.webp",
          },
          {
            name: "Ensalada",
            description:
              "Variedad refrescante a elegir: desde la clásica César hasta combinaciones frutales de piña, manzana o col con zanahoria.",
            variants: [
              "frutal",
              "espinacas con fresa",
              "manzana",
              "zanahoria",
              "frutos citricos",
            ],
            image: "/menu/platillos/ensalada.webp",
          },
          {
            name: "Montaña de Arroz",
            description:
              "Generosa porción de arroz esponjoso, servido de forma estética para acompañar y realzar el sabor de cualquier plato fuerte.",
            image: "/menu/platillos/montanaarroz.webp",
          },
        ],
      },
      {
        title: "Pastas",
        dishes: [
          {
            name: "Spaguetti",
            description:
              "Pasta clásica preparada a tu elección con nuestra cremosa salsa de la casa, poblana, campesina, chipotle, cheddar o mantequilla.",
            variants: [
              "Al Burro",
              "Hawaiano",
              "Cheddar",
              "Pimiento",
              "Poblano",
              "Chipotle",
              "Campesino",
              "Con jamon",
            ],
            image: "/menu/platillos/spaguettih.webp",
          },
          {
            name: "Tallarines",
            description:
              "Cintas de pasta suave bañadas en una delicada base láctea; una opción ligera y elegante que también podemos personalizar a tu gusto.",
            variants: [
              "Al Burro",
              "Hawaiano",
              "Cheddar",
              "Pimiento",
              "Poblano",
              "Chipotle",
              "Campesino",
              "Con jamon",
            ],
            image: "/menu/platillos/tallarines.webp",
          },
          {
            name: "Tornillos",
            description:
              "Pasta rotini salteada con una vibrante salsa para un sabor casero único.",
            variants: [
              "Al Burro",
              "Hawaiano",
              "Cheddar",
              "Pimiento",
              "Poblano",
              "Chipotle",
              "Campesino",
              "Con jamon",
            ],
            image: "/menu/platillos/tornillos.webp",
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
            image: "/menu/platillos/cpoblana.webp",
          },
          {
            name: "Crema Campesina",
            description:
              "Preparada con granos de elote, calabacita y un toque de chile poblano; rescata los sabores tradicionales del campo en cada cucharada.",
            image: "/menu/platillos/ccampesina.webp",
          },
          {
            name: "Crema de Nuez",
            description:
              "Una opción sofisticada con un sabor ligeramente dulce y tostado; la textura es delicada y el retrogusto a frutos secos es delicioso.",
            image: "/menu/platillos/cnuez.webp",
          },
          {
            name: "Crema de Queso",
            description:
              "Mezcla cremosa y reconfortante de quesos seleccionados que se funden en una textura sedosa; es ideal para los amantes de los sabores lácteos intensos",
            image: "/menu/platillos/cqueso.webp",
          },
          {
            name: "Crema de Champiñones",
            description:
              "Una receta tradicional con trozos de champiñones frescos salteados; destaca por su aroma terroso y su consistencia elegante",
            image: "/menu/platillos/cchampiñones.webp",
          },
          {
            name: "Crema de Elotes",
            description:
              "Dulce y reconfortante, hecha con granos de elote tierno procesados hasta lograr una textura fina; es un favorito de todas las edades.",
            image: "/menu/platillos/celotes.webp",
          },
          {
            name: "Crema Verde",
            description:
              "Elaborada con una variedad de vegetales verdes como chayote y hierbas frescas; con un toque de elote a su sabor",
            image: "/menu/platillos/cverde.webp",
          },
          {
            name: "Crema de Cilantro",
            description:
              "Muy aromática y refrescante, esta crema resalta el sabor vibrante del cilantro fresco con una base láctea muy suave.",
            image: "/menu/platillos/ccilantro.webp",
          },
          {
            name: "Sopa Campesina",
            description:
              "A diferencia de la crema, suele ser un caldo más ligero con verduras picadas y granos de elote; es nutritiva y con un sazón muy casero.",
            image: "/menu/platillos/scampesina.webp",
          },
          {
            name: "Sopa Tarasca",
            description:
              "Un clásico michoacano de frijol con un toque de jitomate y chile ancho; se distingue por su profundidad de sabor y su textura espesa.",
            image: "/menu/platillos/starasca.webp",
          },
        ],
      },
    ],
  },
  {
    id: "especial",
    label: "Especial",
    iconKey: "sparkles",
    sections: [
      {
        title: "Plato Fuerte",
        dishes: [
          {
            name: "Lasagna",
            description:
              "Láminas de pasta intercaladas con una rica salsa boloñesa y bechamel, terminadas con una capa de queso gratinado.",
            variants: ["res", "verduras", "espinacas y champiñones"],

            image: "/menu/internacional/lasagna.webp",
          },
          {
            name: "Poblano Hojaldrado",
            description:
              "Chile poblano relleno envuelto en una crujiente y dorada masa de hojaldre, ofreciendo una textura única y elegante.",
            image: "/menu/especial/poblanohojaldrado.webp",
          },
          {
            name: "Crepas Rellenas",
            description:
              "Suaves y delgadas crepas rellenas de guisos selectos, bañadas en salsa para resaltar su sabor delicado.",
            variants: [
              "rajas con elote",
              "champiñones",
              "espinacas",
              "tres quesos",
            ],
            image: "/menu/internacional/crepas.webp",
          },
          {
            name: "Pastel de Carne",
            description:
              "Un clásico reconfortante de carne molida sazonada y horneada, con una textura jugosa y un sabor tradicional.",
            image: "/menu/especial/pastelcarne.webp",
          },
          {
            name: "Balsas de Camarones",
            description:
              "Base de masa o pan rellena de camarones preparados, ideal para quienes buscan un sabor marino y sofisticado.",
            image: "/menu/especial/balsacamaron.webp",
          },
          {
            name: "Empanadas Rellenas",
            description:
              "Masa frita o al horno con rellenos a elegir como champiñones, rajas, pollo, atún o variedades dulces.",
            image: "/menu/especial/empanada.webp",
          },
          {
            name: "Chiles en Nogada",
            description:
              "Platillo barroco de chile poblano relleno de picadillo de frutas, bañado en crema de nuez de Castilla y granada.",
            image: "/menu/especial/chilenogada.webp",
          },
          {
            name: "Tamachile",
            description: "Chile relleno de masa de tamal con cochinita pibil bañado en salsa de jitomate y cebolla morada.",
            image: "/menu/especial/tamachile.webp",

          }
        ],
      },
      {
        title: "Acompañamientos",
        dishes: [
          {
            name: "Ensalada de Espinaca con Fresa",
            description:
              "Hojas de espinaca fresca combinadas con la dulzura de la fresa, creando un contraste ligero y refrescante.",
            image: "/menu/especial/fresaespinaca.webp"
          },
          {
            name: "Ensalada de Manzanas Rojas",
            description:
              "Combinación clásica de manzanas rojas con un aderezo cremoso, perfecta para equilibrar platos fuertes.",
            image: "/menu/especial/emanzanaroja.webp"
          },
          {
            name: "Ensalada Nochebuena",
            description:
              "Mezcla tradicional de manzanas y betabel que aporta un color vibrante y un sabor dulce y terroso.",
            image: "/menu/especial/enochebuena.webp"
          },
          {
            name: "Ensalada de Zanahoria y Piña",
            description:
              "Zanahoria rallada con trozos de piña, una opción dulce y crujiente muy popular en celebraciones.",
            image: "/menu/especial/ezanahoria.webp"
          },
          {
            name: "Ensalada de Col Morada y Crema Dulce",
            description:
              "Col morada finamente picada en una base de crema dulce, ofreciendo una textura firme y un sabor suave.",
            image: "/menu/especial/ecol.webp"
          },
          {
            name: "Ensalada de Piña y Manzana",
            description:
              "Un acompañamiento frutal y fresco que combina la acidez de la piña con la textura crujiente de la manzana.",
            image: "/menu/especial/emanzanapina.webp"
          },
          {
            name: "Ensalada Verde (Cesar)",
            description:
              "Hojas de lechuga orejona con aderezo César, crutones y queso, un clásico indispensable y balanceado.",
            image: "/menu/especial/ecaesar.webp"
          },
          {
            name: "Verduras a la Mantequilla",
            description:
              "Variedad de vegetales de temporada salteados suavemente en mantequilla para resaltar su sabor natural.",
            image: "/menu/especial/verduramantequilla.webp"
          },
          {
            name: "Arroz",
            description:
              "Arroz blanco o rojo cocido a la perfección, el acompañamiento tradicional ideal para cualquier guiso del menú.",
            image: "/menu/mexicano/arroz.webp"
          },
        ],
      },
    ],
  },
  {
    id: "desayunos",
    label: "Desayunos",
    iconKey: "sun",
    dishes: [
      {
        name: "Huevo al Gusto",
        description:
          "La base perfecta de todo buen desayuno, preparada con ingredientes frescos y el cariño de siempre. Elige el acompañamiento que los haga tuyos.",
        variants: [
          "con jamón",
          "con salchichas",
          "con chorizo",
          "a la mexicana",
        ],
        image: "/menu/desayunos/huevos.webp",
      },
      {
        name: "Chilaquiles",
        description:
          "Totopos bañados en salsa hasta lograr ese equilibrio entre crujiente y suavizado que los hace tan adictivos. Con crema, queso y cebolla morada por encima.",
        variants: ["rojos", "verdes", "martajados"],
        image: "/menu/desayunos/chilaquiles.webp",
      },
      {
        name: "Chicharrón en Salsa",
        description:
          "Chicharrón de cerdo cocido a fuego lento hasta que la salsa lo impregna por completo. Rústico, sabroso y profundamente casero.",
        variants: ["rojo", "verde", "molcajete"],
        image: "/menu/desayunos/chicharron.webp",
      },
      {
        name: "Costilla con Nopales",
        description:
          "Costilla jugosa y tiernos nopales de la huerta en un guiso que sabe a campo y a cocina de rancho. Un maridaje clásico e irresistible.",
      },
      {
        name: "Cerdo en Salsa",
        description:
          "Trozos seleccionados de cerdo cocinados en salsas de chiles auténticos que le aportan carácter y profundidad. A gusto del comensal.",
        variants: ["verde", "roja", "martajada"],
      },
      {
        name: "Bistec",
        description:
          "Finas láminas de res tiernas y bien sazonadas, listas para llenar de sabor el desayuno. Elige la versión que más te apetezca esta mañana.",
        variants: [
          "a la mexicana",
          "en salsa verde",
          "en salsa roja",
          "con champiñones",
        ],
      },
      {
        name: "Rajas Poblanas",
        description:
          "Chile poblano tatemado y cortado en tiras suaves, combinado con ingredientes que resaltan su sabor ahumado y ligeramente picante.",
        variants: ["con queso", "con crema", "con elote", "con papas"],
      },
      {
        name: "Papas al Gusto",
        description:
          "Papas en trozos bien cocidos y perfectamente sazonados, transformados según el ingrediente que elijas. Un clásico que nunca cansa.",
        variants: ["con jamón", "con chorizo", "con crema", "a la mexicana"],
      },
      {
        name: "Molletes",
        description:
          "Bolillo tostado con frijoles refritos y queso fundido al punto exacto, coronados con pico de gallo fresco. Un desayuno directo y satisfactorio.",
      },
      {
        name: "Pollo en Salsa",
        description:
          "Piezas de pollo tiernas y jugosas vestidas con una salsa intensa que llena el plato de aroma y color desde la primera cucharada.",
        variants: ["salsa verde", "chipotle"],
      },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    iconKey: "cake-slice",
    dishes: [
      {
        name: "Pastel de Tres Leches",
        description:
          "Bizcocho esponjoso bañado lentamente en una mezcla de tres leches hasta que cada migaja queda impregnada. Suave, húmedo y delicadamente dulce.",
      },
      {
        name: "Flan Napolitano",
        description:
          "Textura sedosa y perfectamente firme, cubierto por un hilo de caramelo artesanal que se derrite en cada cucharada. Un clásico intemporal.",
      },
      {
        name: "Arroz con Leche",
        description:
          "Cremoso, cálido y perfumado con canela. Un postre que viaja directo a la infancia y siempre deja ganas de repetir.",
      },
      {
        name: "Gelatina Mosaico",
        description:
          "Vibrante mosaico de gelatinas de colores suspendidas en crema, donde cada rebanada es completamente única y llena de alegría.",
      },
      {
        name: "Churros con Chocolate",
        description:
          "Crujientes por fuera, esponjosos por dentro, espolvoreados de azúcar con canela y servidos con chocolate para fundir. El final perfecto.",
      },
      {
        name: "Pay de Queso",
        description:
          "Base crujiente de galleta que sostiene un relleno cremoso de queso con el punto justo de dulzor, coronado con frutos rojos frescos.",
      },
      {
        name: "Carlota de Limón",
        description:
          "Postre frío de capas alternas de galletas suavizadas y crema de limón. Refrescante, cítrico y con una presentación que enamora.",
      },
      {
        name: "Fresas con Crema",
        description:
          "Fresas maduras y jugosas bañadas en crema batida. Sencillo, honesto y absolutamente irresistible cuando la fruta está en su punto.",
      },
    ],
  },
];


export const menuCategorySummaries = menuCategories.map(({ id, label, iconKey }) => ({
  id,
  label,
  iconKey,
}));

export function isMenuCategoryId(value: string): value is MenuCategoryId {
  return menuCategories.some((category) => category.id === value);
}

export function getMenuCategory(categoryId: MenuCategoryId) {
  return menuCategories.find((category) => category.id === categoryId);
}
