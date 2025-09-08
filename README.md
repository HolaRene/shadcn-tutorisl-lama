Este es un toturial de Lamadev sobre Shadcn.
## Instalar Nextjs
Comandos para la instalación de Nextjs

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abrir [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Instalar Shadcn

Buscar información en las web oficiales de shadcn:
`pnpm dlx shadcn@latest init`

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- Este pregunta sobre el color(neutral) y agrega en la carpeta  lib/utils.ts.
## Agregar un botón
`pnpm dlx shadcn@latest add button`
- Agrega en la carpeta components/ui/[el nombre del boton o cualquier intalación]
- un  botón puede tener variantes y editarlas.
*Lucide react ya viene instalado con shadcn*
- la clase primary se puede cambiar el color en globals.css
- para que haya autocompletado se debe de usar en theme online, exportar la variable con su tipo
- cn() es para poner condicionales en las clases de tailwind separado por comaas

## Agregar charts 
`pnpm dlx shadcn@latest add chart`
- Despues agregar los charts necesarios, ellos ya tienen el codigo.
## Agregar Tarjetas
`pnpm dlx shadcn@latest add card`
## Agregar un Bagde
`pnpm dlx shadcn@latest add badge`

## Agregar un Scroll-Area
`pnpm dlx shadcn@latest add scroll-area`
## Agregar un checkbox
`pnpm dlx shadcn@latest add checkbox`
## Agregar un Calendario 
`pnpm dlx shadcn@latest add calendar`
## Agregar un papover
`pnpm dlx shadcn@latest add popover`

## Agregar date-fns
**date-fns** proporciona el conjunto de herramientas más completo, pero simple y consistente para manipular Fechas de JavaScript en un navegador & Nodo.js.
`pnpm install date-fns --save`

## Agregar un Breadcrumb
Muestra la ruta al recurso actual utilizando una jerarquía de enlaces.
`pnpm dlx shadcn@latest add breadcrumb`
## Agregar un hover-card
Para que los usuarios videntes puedan obtener una vista previa del contenido disponible detrás de un enlace.
`pnpm dlx shadcn@latest add hover-card`
## Agregar un progress
Muestra un indicador que muestra el progreso de finalización de una tarea, que normalmente se muestra como una barra de progreso.
`pnpm dlx shadcn@latest add progress`
## Agregar un Sheet
Amplía el componente Diálogo para mostrar contenido que complementa el contenido principal de la pantalla.
`pnpm dlx shadcn@latest add sheet`
## Agregar un React Hook Form
Los formularios son complicados. Son una de las cosas más comunes que construirás en una aplicación web, pero también una de las más complejas.
Defina la forma de su formulario utilizando un esquema Zod. Puedes leer más sobre el uso de Zod en el Documentación de Zod.
`pnpm dlx shadcn@latest add form`
## Agregar un Select
Muestra una lista de opciones para que el usuario elija —activada por un botón.
`pnpm dlx shadcn@latest add select`
## Agregar un Table
Puedes utilizar el `<Table />` componente para construir tablas de datos más complejas. Combínalo con @tanstack/tabla de reacciones para crear tablas con clasificación, filtrado y paginación
`pnpm dlx shadcn@latest add table`
## Agregar un Table
componente para crear su propia tabla de datos personalizada.
`pnpm add @tanstack/react-table`

```{
        accessorKey: "status",
        header: "Estatus",
        // Estelizar la celda con condicionales
        cell: ({ row }) => {
            const status = row.getValue("status")
            return (
                <div className={cn(`p-1 rounded-md w-max text-xs`, status === "pending" && "bg-yellow-500/40",
                    status === "success" && "bg-green-500/40",
                    status === "failed" && "bg-red-500/40"
                )}>{status as string}</div>
            )
        }

    }```
Estilizar los resultados de la columna estado.