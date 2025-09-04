"use client"
import { useState } from "react"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "./ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from 'date-fns';
import { Calendar } from "./ui/calendar"

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false)
    return (
        <div className=''>
            <h1 className="font-medium text-xl mb-6">Lista de tareas</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon />
                        {
                            date ? format(date, 'PPP') : <span>Crear una fecha</span>
                        }
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" >
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={
                            (selectedDate) => {
                                setDate(selectedDate)
                                setOpen(false)
                            }
                        }
                    />
                </PopoverContent>
            </Popover>

            {/* Lista */}
            <ScrollArea className="h-[400px] overflow-y-auto rounded-md border mt-4">
                {/* Div para dar separación entre las tarjetas */}
                <div className="flex flex-col gap-4">
                    {/* Lista de tarjetas */}
                    <Card className="px-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="check1" checked />
                            <label htmlFor="check1" className="text-sm text-foreground">Lorem ipsum dolor sit amet.</label>
                        </div>
                    </Card>
                    {/* Lista de tarjetas */}
                    <Card className="px-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="check1" />
                            <label htmlFor="check1" className="text-sm text-foreground">Lorem ipsum dolor sit amet.</label>
                        </div>
                    </Card>
                    {/* Lista de tarjetas */}
                    <Card className="px-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="check1" checked />
                            <label htmlFor="check1" className="text-sm text-foreground">Lorem ipsum dolor sit amet.</label>
                        </div>
                    </Card>
                    {/* Lista de tarjetas */}
                    <Card className="px-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="check1" checked />
                            <label htmlFor="check1" className="text-sm text-foreground">Lorem ipsum dolor sit amet.</label>
                        </div>
                    </Card>
                    {/* Lista de tarjetas */}
                    <Card className="px-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="check1" checked />
                            <label htmlFor="check1" className="text-sm text-foreground">Lorem ipsum dolor sit amet.</label>
                        </div>
                    </Card>
                    {/* Lista de tarjetas */}
                    <Card className="px-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="check1" />
                            <label htmlFor="check1" className="text-sm text-foreground">Lorem ipsum dolor sit amet.</label>
                        </div>
                    </Card>
                    {/* Lista de tarjetas */}
                    <Card className="px-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="check1" />
                            <label htmlFor="check1" className="text-sm text-foreground">Lorem ipsum dolor sit amet.</label>
                        </div>
                    </Card>
                    {/* Lista de tarjetas */}
                    <Card className="px-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="check1" />
                            <label htmlFor="check1" className="text-sm text-foreground">Lorem ipsum dolor sit amet.</label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    )
}

export default TodoList