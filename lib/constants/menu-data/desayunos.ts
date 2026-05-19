import type { MenuCategory } from "../menu.types";

export const desayunosCategory: MenuCategory = {
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
};
