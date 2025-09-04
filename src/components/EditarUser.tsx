"use client"

import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const formSchema = z.object({
    username: z.string().min(2, { message: "el nombre debe ser mayor a 2" }).max(50),
    email: z.email({ message: "correo no válido" }),
    telefono: z.number().min(8, { message: "el número de teléfono debe ser mayor a 2" }).max(15),
    ubicacion: z.string().min(2, { message: "la ubicación debe ser mayor a 2" }).max(50),
    rol: z.enum(["user", "admin"], { message: "rol no válido" }),
})

const EditarUser = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "Don Joe",
            email: "donjoe@test.com",
            telefono: 50578186764,
            ubicacion: "Metro, cerca",
            rol: "admin",
        },
    })
    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-6">Editar Perfil de usuario</SheetTitle>
                <SheetDescription>
                    <Form {...form}>
                        <form className="space-y-6">
                            <FormField control={form.control} name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nombre de usuario</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nombre de usuario" {...field} />
                                        </FormControl>
                                        <FormDescription>El nombre de usuario debe ser único.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField control={form.control} name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Correo Electrónico</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Correo del usuario" {...field} />
                                        </FormControl>
                                        <FormDescription>El correo del usuario debe ser único.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField control={form.control} name="telefono"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Número de teléfono</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Teléfono del usuario" {...field} />
                                        </FormControl>
                                        <FormDescription>El núm de teléfono del usuario.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField control={form.control} name="ubicacion"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ubicación</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nombre de usuario" {...field} />
                                        </FormControl>
                                        <FormDescription>La ubicación del usuario.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField control={form.control} name="rol"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Roles</FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Roles" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="user">User</SelectItem>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>Solo los usuarios verificados pueden ser administradores.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <Button type="submit">Enviar</Button>
                        </form>
                    </Form>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    )
}

export default EditarUser