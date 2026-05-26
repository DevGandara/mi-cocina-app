import { createDishListCategory } from "../menu.types";

export const canapesCategory = createDishListCategory({
  id: "canapes",
  label: "Canapés",
  iconKey: "sandwich",
  dishes: [
    {
      name: "Banderilla de Carnes Frias",
      description:
        "Chorizo, salchicha, queso manchego, pimiento morrón y aceituna verde montados en brocheta para un bocado ligero y elegante.",
      image: "/menu/canapes/brochetacarne.webp"
    },
    {
      name: "Banderilla de Frutas",
      description:
        "Fresas, melón, uvas y piña montadas en brocheta para un bocado ligero y elegante.",
      image: "/menu/canapes/brochetafrutas.webp"
    },
    {
      name: "Croissant de Jamón y Queso",
      description:
        "Suave croissant relleno de jamón y queso gouda derretido, ideal para acompañar cualquier platillo.",
      image: "/menu/canapes/croissant.webp"
    },
    {
      name: "Bolovan de Atún",
      description:
        "Base crujiente rellena de ensalada fina de atún con vegetales y un toque fresco de hierbas.",
      image: "/menu/canapes/bolovan.webp"
    },
    {
      name: "Tartaleta de Pollo",
      description:
        "Pequeña tartaleta de masa crujiente con relleno cremoso de pollo, perfecta para eventos formales.",
      image: "/menu/canapes/tartaletapollo.webp"
    },
    {
      name: "Rollo de Dip de Sardina",
      description:
        "Rollo de jamón relleno de dip de sardina con finas hierbas y un toque fresco de limón, servido sobre pan tostado.",
      image: "/menu/canapes/rollo.webp",
    },
    {
      name: "Tosta de Mermelada de Tomate y Queso",
      description:
        "Pan tostado con mermelada de tomate artesanal y queso crema para un contraste dulce y salado.",
      image: "/menu/canapes/tosta.webp"
      },
  ],
});
