import { createSectionedCategory } from "../menu.types";

export const internacionalCategory = createSectionedCategory({
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
});
