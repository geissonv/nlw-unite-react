import { ComponentProps } from "react";

interface TablerowProps extends ComponentProps<"tr"> { }

export function Tablerow(props: TablerowProps) {
    return (
        <tr className='border-b border-white/10 hover:bg-slate-700/10' {...props} />
    )
}