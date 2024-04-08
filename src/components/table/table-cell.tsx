import { ComponentProps } from "react";
{/* o twMerge é utilizado para conseguir unificar o className utilizado dentro do componente com o que for feito fora desse componente assim tudo se mantem */ }
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<"td"> { }

export function TableCell(props: TableCellProps) {
    return (
        <td {...props} className={twMerge('py-3 px-4 text-sm text-zinc-300', props.className)} />
    )
}