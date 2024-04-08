import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'> {
    children: string

}

export function NavLink(props: NavLinkProps) {
    return (
        <a {...props} className="font-medium text-sm">
            {props.children}
            </a>
    )
}

{/* O conteúdo de um componente o react nomeia como children. Acima temos um componente, como estamos utilizando uma informação para dentro
de um componente o tsx tem a necessidade de aqui dentro passamos a informação que esse componente irá recebe-lo 

interface - precisa ser feito pois precisa de uma tipagem, se não da erro na aplicação 
extender propriedade nativos do html e colocar em um elemento do react*/}