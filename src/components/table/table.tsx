import { ComponentProps } from "react";

interface TableProps extends ComponentProps<"table"> { }

export function Table(props: TableProps) {
    return (
        <div className='border border-white/10 rounded-lg overflow-x-hidden'>
            <table className='w-full' {...props} />
        </div>
    )
}