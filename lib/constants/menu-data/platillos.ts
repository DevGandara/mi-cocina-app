import { createSectionedCategory } from "../menu.types";

export const platillosCategory = createSectionedCategory({
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
            "Pechuga fileteada, jugosa y bien sazonada, llevada a su máximo potencial con rellenos y preparaciones que la convierten en el plato fuerte de cualquier celebración.",
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
          variants: ["res", "pollo", "verduras", "espinacas y champiñones", "rajas y elote"],
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
            "Tiernos cortes de papa preparados al gusto: gratinados con queso, salteados a la mantequilla, con un toque cítrico de limón y entre otras variantes.",
          variants: ["gratinadas", "a la crema", "al ajillo", "al limon"],
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
        {
          name: "Esparragos Salteados",
          description: "Esparragos frescos salteados con mantequilla y ajo, preparados con la sazón de la casa.",
          image: "/menu/platillos/esparragossal.webp",
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
            "Elaborada con una variedad de vegetales verdes como chayote y hierbas frescas; con un toque de elote y jamón a su sabor",
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
});
