import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { Tablerow } from './table-row'
import { ChangeEvent, useState } from 'react'
import { attendees } from '../data/attendees'

{/* Estado no js são variáveis como várias outras, porém são observadas que quando alteradas de qualquer forma o componente renderiza novamente */ }


export function AttendeeList() {

    const [search, setSearch] = useState('')

    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center  ">
                <h1 className="text-2xl font-bold">Participantes</h1>

                {/* O react não aceita icones, então se coloca uma div para se adicionar um icone dentro dela que seria o input */}

                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />

                    {/* toda vez que o valor do input for alterado algum evento pode ser chamado, no react isso se faz com o onChange */}

                    <input onChange={search} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participantes..."></input>
                </div>

            </div>
            {/* A tabela não consegue ter arredondamento, então é necessário criar uma div e colocar as propriedades nela */}
            <Table>
                <thead>
                    <tr className='border-b border-white/10'>
                        <TableHeader style={{ width: 48 }}  >
                            <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                        </TableHeader>
                        <TableHeader >Código</TableHeader>
                        <TableHeader >Participante</TableHeader>
                        <TableHeader >Data de criação</TableHeader>
                        <TableHeader >Data do check-in</TableHeader>
                        <TableHeader style={{ width: 64 }} ></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {attendees.map((attendee) => {
                        return (
                            <Tablerow key={attendee.id} >
                                <TableCell >
                                    <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                                </TableCell>
                                <TableCell >{attendee.id}</TableCell>
                                <TableCell >
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-semibold text-white'>{attendee.name}</span>
                                        <span>{attendee.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell >{formatRelative(attendee.createdAt, new Date(), { locale: ptBR })}</TableCell>
                                <TableCell >{formatRelative(attendee.checkedInAt, new Date(), { locale: ptBR })}</TableCell>
                                <TableCell >
                                    <IconButton transparent={true}>
                                        <MoreHorizontal className='size-4 ' />
                                    </IconButton>
                                </TableCell>

                            </Tablerow>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>
                            Mostrando 10 de 228 itens
                        </TableCell>
                        <TableCell colSpan={3} className='text-right'>
                            <div className='inline-flex items-center gap-8'>
                                <span>Página 1 de 23</span>

                                <div className='flex gap-1.5'>

                                    <IconButton>
                                        <ChevronsLeft className='size-4 ' />
                                    </IconButton>

                                    <IconButton>
                                        <ChevronLeft className='size-4 ' />
                                    </IconButton>

                                    <IconButton>
                                        <ChevronRight className='size-4 ' />
                                    </IconButton>

                                    <IconButton>
                                        <ChevronsRight className='size-4 ' />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
};