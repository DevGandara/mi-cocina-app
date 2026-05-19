import type { MenuCategory } from "../menu.types";

export const postresCategory: MenuCategory = {
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
};
