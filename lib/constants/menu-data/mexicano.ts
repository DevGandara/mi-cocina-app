import type { MenuCategory } from "../menu.types";

export const mexicanoCategory: MenuCategory = {
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
};
