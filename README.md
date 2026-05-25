# Mi Cocina

Landing comercial para `Mi Cocina`, un servicio de banquetes y catering en Aguascalientes. El sitio presenta paquetes, menu por categorias, informacion de contacto y activos SEO basicos para web publica.

## Stack

- `Next.js 16` con App Router
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `radix-ui` y componentes UI propios
- `Vitest` + `Testing Library` para pruebas

## Requisitos

- `Node.js` 20+
- `pnpm` 10+

## Instalacion

```bash
pnpm install
```

## Desarrollo local

```bash
pnpm dev
```

La aplicacion queda disponible en `http://localhost:3000`.

## Scripts

- `pnpm dev` - inicia el servidor de desarrollo
- `pnpm lint` - ejecuta ESLint
- `pnpm typecheck` - valida tipos con TypeScript
- `pnpm test` - ejecuta la suite de pruebas una vez
- `pnpm test:watch` - ejecuta pruebas en modo observacion
- `pnpm check` - corre `lint`, `typecheck` y `test`
- `pnpm build` - genera el build de produccion
- `pnpm start` - levanta el build de produccion

## Variables de entorno

La variable importante para metadata y SEO es:

```bash
NEXT_PUBLIC_SITE_URL=
```

Usos:

- define la URL canonica del sitio
- completa `metadataBase`, `sitemap.xml` y `robots.txt`
- evita caer al fallback local `http://localhost:3000`

Si no esta definida, el proyecto intenta usar variables de Vercel (`VERCEL_PROJECT_PRODUCTION_URL` o `VERCEL_URL`).

## Testing

La base actual de pruebas cubre tres frentes:

- `tests/lib/site.test.ts` - validacion de normalizacion de URL publica
- `tests/lib/menu.test.ts` - consistencia del dominio del menu
- `tests/components/hero.test.tsx` - accesibilidad de enlaces con iconos en el hero

Ejecutar todas las validaciones recomendadas:

```bash
pnpm check
```

## Estructura del proyecto

```text
app/                        rutas y metadata del App Router
components/                 componentes UI y secciones del sitio
components/landing/         bloques del landing principal
components/menu/            navegacion y grilla del menu
lib/                        utilidades, config de sitio y constantes
lib/constants/menu-data/    datos de categorias y platillos
public/                     imagenes y activos estaticos
tests/                      pruebas automatizadas
```

## Notas de arquitectura

- `app/layout.tsx` concentra metadata global, SEO y navbar compartido.
- `lib/site.ts` centraliza branding, enlaces de contacto, URL publica y helpers SEO.
- `lib/constants/menu.ts` y `lib/constants/menu.types.ts` modelan el dominio del menu.
- Las partes interactivas pesadas del landing se aislan como islas cliente para evitar problemas de hidratacion innecesaria.
- `components/landing/mision-carousel-island.tsx` envuelve la carga cliente del carrusel para mantener `mision.tsx` como server component.

## Flujo recomendado

Antes de abrir un commit o PR:

```bash
pnpm check
```

Eso asegura que el proyecto pase lint, tipos y pruebas basicas.

## Pendientes tecnicos recomendados

- ampliar cobertura de tests en navegacion, footer y pagina de menu
- optimizar imagenes pesadas dentro de `public/`
- seguir reduciendo hidratacion cliente donde no aporte valor real
