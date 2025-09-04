import { cn } from "@/lib/utils"

const CustomButton = ({
    deshabilitado, esRedondo
}:{deshabilitado:boolean, esRedondo:boolean}) => {
  return (
//     <button className={`text-sm ${deshabilitado ?"bg-gray-300" : "bg-blue-500"} ${esRedondo && "rounded-full"} p-4`}>
// Botón    </button>

// Boton con condicionales de cn
<button className={cn("text-sm", deshabilitado ? "bg-gray-300": "bg-blue-500", esRedondo && "rounded-full", "p-4" )}>
    hola
</button>
  )
}

export default CustomButton