"use client"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
// import { BarChart } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartConfig = {
    desktop: {
        label: "Escritorio",
        color: "var(--chart-1)" // poner un color de variable
    },
    mobile: {
        label: "Móvil",
        color: "var(--chart-4)",
    },
} satisfies ChartConfig

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const AppBarChart = () => {
    return (
        <div>
            <h1 className="text-xl font-medium mb-5">Total de deuda</h1>

            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    {/* rayas de fondo */}
                    <CartesianGrid vertical={true} />
                    {/* Nombres de los meses en el eje x*/}
                    <XAxis
                        dataKey="month"
                        tickLine={true}
                        tickMargin={10}
                        axisLine={false}
                        // Tomar solo las primeras 3 letras del mes
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    {/* Núm en el eje y */}
                    <YAxis

                        tickLine={true}
                        tickMargin={10}
                        axisLine={false}
                    />
                    {/* Agregar información sobre herramientas */}
                    <ChartTooltip content={<ChartTooltipContent />} />
                    {/* Agregar leyenda */}
                    <ChartLegend content={<ChartLegendContent />} />
                    {/* Barras del gráfico */}
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}

export default AppBarChart