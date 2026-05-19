import { createSectionedCategory } from "../menu.types";

export const especialCategory = createSectionedCategory({
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
          description:
            "Chile relleno de masa de tamal con cochinita pibil bañado en salsa de jitomate y cebolla morada.",
          image: "/menu/especial/tamachile.webp",
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
          image: "/menu/especial/fresaespinaca.webp",
        },
        {
          name: "Ensalada de Manzanas Rojas",
          description:
            "Combinación clásica de manzanas rojas con un aderezo cremoso, perfecta para equilibrar platos fuertes.",
          image: "/menu/especial/emanzanaroja.webp",
        },
        {
          name: "Ensalada Nochebuena",
          description:
            "Mezcla tradicional de manzanas y betabel que aporta un color vibrante y un sabor dulce y terroso.",
          image: "/menu/especial/enochebuena.webp",
        },
        {
          name: "Ensalada de Zanahoria y Piña",
          description:
            "Zanahoria rallada con trozos de piña, una opción dulce y crujiente muy popular en celebraciones.",
          image: "/menu/especial/ezanahoria.webp",
        },
        {
          name: "Ensalada de Col Morada y Crema Dulce",
          description:
            "Col morada finamente picada en una base de crema dulce, ofreciendo una textura firme y un sabor suave.",
          image: "/menu/especial/ecol.webp",
        },
        {
          name: "Ensalada de Piña y Manzana",
          description:
            "Un acompañamiento frutal y fresco que combina la acidez de la piña con la textura crujiente de la manzana.",
          image: "/menu/especial/emanzanapina.webp",
        },
        {
          name: "Ensalada Verde (Cesar)",
          description:
            "Hojas de lechuga orejona con aderezo César, crutones y queso, un clásico indispensable y balanceado.",
          image: "/menu/especial/ecaesar.webp",
        },
        {
          name: "Verduras a la Mantequilla",
          description:
            "Variedad de vegetales de temporada salteados suavemente en mantequilla para resaltar su sabor natural.",
          image: "/menu/especial/verduramantequilla.webp",
        },
        {
          name: "Arroz",
          description:
            "Arroz blanco o rojo cocido a la perfección, el acompañamiento tradicional ideal para cualquier guiso del menú.",
          image: "/menu/mexicano/arroz.webp",
        },
      ],
    },
  ],
});
