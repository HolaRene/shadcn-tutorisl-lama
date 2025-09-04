"use client"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartConfig = {
    desktop: {
        label: "Escritorio",
        color: "var(--chart-3)" // poner un color de variable
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

const AppAreaChart = () => {
    return (
        <div>
            <h1 className="text-xl font-medium mb-5">Visitas</h1>

            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <AreaChart accessibilityLayer data={chartData}>
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
                        axisLine={true}
                    />
                    {/* Agregar información sobre herramientas */}
                    <ChartTooltip content={<ChartTooltipContent />} />
                    {/* Agregar leyenda */}
                    <ChartLegend content={<ChartLegendContent />} />
                    <defs>
                        <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="var(--color-desktop)"
                                stopOpacity={0.5}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-desktop)"
                                stopOpacity={0.4}
                            />
                        </linearGradient>
                        <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="var(--color-mobile)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-mobile)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                    </defs>
                    {/* Areas del gráfico */}
                    <Area
                        dataKey="mobile"
                        type="natural"
                        fill="url(#fillMobile)"
                        fillOpacity={0.4}
                        stroke="var(--color-mobile)"
                        stackId="a"
                    />
                    <Area
                        dataKey="desktop"
                        type="natural"
                        fill="url(#fillDesktop)"
                        fillOpacity={0.2}
                        stroke="var(--color-desktop)"
                        stackId="a"
                    />

                </AreaChart>
            </ChartContainer>
        </div>
    )
}

export default AppAreaChart