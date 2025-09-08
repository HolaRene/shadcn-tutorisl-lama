import AppLineChart from "@/components/AppLineChart"
import CardList from "@/components/CardList"
import EditarUser from "@/components/EditarUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react"


const SingleUserPage = () => {
    return (
        <div className=''>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Tablero</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Usuarios</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>DonJoe</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* Contenedor */}
            <div className="mt-4 flex flex-col gap-8 xl:flex-row">
                {/* Izquierdo */}
                <div className="w-full xl:w-1/2 space-y-6">
                    {/* Badges del usuario */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">Insignia del usuario</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger><BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" /></HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-semibold mb-2">Usuario verificado</h1>
                                    <p className="text-sm text-muted-foreground">Este usuario ha verificado su cuenta.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield
                                        size={36}
                                        className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">
                                        Admin users have access to all features and can manage
                                        users.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy
                                        size={36}
                                        className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been awarded for their contributions.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus
                                        size={36}
                                        className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Popular</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been popular in the community.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    {/* Info del usuario */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold">Información del usuario</h1>
                            <Sheet>
                                <SheetTrigger asChild><Button>Editar Perfil</Button></SheetTrigger>
                                <EditarUser />
                            </Sheet>
                        </div>
                        <div className="space-y-6 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Perfil Completado</p>
                                <Progress value={63} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Nombre:</span>
                                <span>Don Joe</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Correo:</span>
                                <span>don@don.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Ubicación:</span>
                                <span>Metro, cerca</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Teléfono:</span>
                                <span>+505 7818 6661</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Rol:</span>
                                <Badge>admin</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Se unió el 2/09</p>
                        </div>
                    </div>
                    {/* Lista de cartas del usuario */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Contenido Popular" />
                    </div>
                </div>
                {/* Derecho */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* Lista de cartas del usuario */}
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-3">
                        <div className="flex items-center gap-2">
                            <Avatar className="size-12">
                                <AvatarImage src={'/pexels-adrianlang-2414459.jpg'} alt="img user" />
                                <AvatarFallback>Don</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xl font-semibold">Don Joe</h1>
                        </div>
                        <p className="text-sm text-muted-foreground">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque ipsam culpa doloremque, veritatis doloribus ducimus numquam debitis optio fugit!</p>
                    </div>
                    {/*Chart  del usuario */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">Actividad del usuario</h1>
                        <AppLineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleUserPage