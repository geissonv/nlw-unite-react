export function AttendeeList () {
    return (
    <div className="flex gap-3 items-center  ">
        <h1 className="text-2xl font-bold">Participantes</h1>
        
        {/* O react não aceita icones, então se coloca uma div para se adicionar um icone dentro dela que seria o input */}
        
            <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm"> 
            <input className="bg-transparent" placeholder="Buscar participantes..."></input>
            </div>

    </div>
        )
}