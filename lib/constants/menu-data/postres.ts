import { createDishListCategory } from "../menu.types";

export const postresCategory = createDishListCategory({
  id: "postres",
  label: "Postres",
  iconKey: "cake-slice",
  dishes: [
    {
      name: "Brownie con nieve",
      description:
        "Brownie tibio de chocolate semi-amargo, crujiente por fuera y densamente suave por dentro, servido con una bola de helado de vainilla que se funde delicadamente.",
      image: "/menu/postres/brownie.webp"
    },
    {
      name: "Cheesecake",
      description:
        "Base crujiente de galleta de mantequilla que sostiene un relleno horneado de queso crema sumamente terso, coronado con tu elección de salsa de fresa o limón.",
      variants: ["limon", "fresa"],
      image: "/menu/postres/cheesecake.webp"
    },
    {
      name: "Tiramisú",
      description:
        "Clásico italiano de bizcochos soleta humedecidos en espresso y licor de café, dispuestos en capas con un sedoso mousse de queso mascarpone y espolvoreados con cacao puro.",
      image: "/menu/postres/tiramisu.webp"
    },
    {
      name: "Pastel Ópera",
      description:
        "Elegante pastel francés de capas finas de bizcocho joconde de almendras impregnado de almíbar de café, intercaladas con crema de mantequilla al café y un terso ganache de chocolate oscuro.",
      image: "/menu/postres/pastelopera.webp"
    },
    {
      name: "Pan de Elote con Helado de Vainilla",
      description:
        "Tradicional pan rústico elaborado con elote tierno y dulce, servido tibio para resaltar su textura esponjosa y acompañado de helado de vainilla gourmet.",
      image: "/menu/postres/elote.webp"
    },
    {
      name: "Tartaleta de Frutas",
      description:
        "Corteza crujiente de pasta sucreé rellena con una suave y aromática crema pastelera de vainilla de Papantla, decorada artísticamente con frutas frescas de temporada.",
      image: "/menu/postres/tartaleta.webp"
    },
    {
      name: "Carlota de Limón",
      description:
        "Refrescante clásico hogareño de capas alternas de galletas María y una sedosa crema batida de limón verde. El balance perfecto entre lo cítrico y lo dulce.",
      image: "/menu/postres/carlota.webp"
    },
    {
      name: "Pastel de Tres Leches",
      description:
        "Bizcocho esponjoso bañado lentamente en nuestra tradicional mezcla de tres leches hasta lograr una humedad perfecta, coronado con una ligera crema batida.",
      image: "/menu/postres/tresleches.webp"
    },
    {
      name: "Crepas",
      description:
        "Delgadas y delicadas crepas francesas preparadas al momento, dobladas en abanico y acompañadas de tu selección de Nutella o frutas frescas.",
      image: "/menu/postres/crepas.webp"
    },
  ],
});
