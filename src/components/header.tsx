import nlwUniteIcon from "../assets/nlw-unite-icon.svg"

export function Header () {
    return (
    <div className="flex items-center gap-5 py-2">
        <img src={nlwUniteIcon} />

        <nav className="flex items-center gap-6">
            <a href="" className="font-medium text-sm text-z">Eventos</a>
            <a href="" className="font-medium text-sm">Participantes</a>
        </nav>
        
    </div>
    )
}