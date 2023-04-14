import { ReactNode } from 'react'

interface LinkProps {
    url: string,
    text: string,
    icon?: ReactNode
}

export default function Link(props: LinkProps) {
    return (
        <a href={props.url} 
        target="_blank"
        className="
            bg-sky-500 p-4 w-4/5
            flex gap-2 items-center justify-center 
            text-2xl text-slate-100 font-medium text-center
            border-2 border-sky-500 rounded-lg shadow-card transition-all
            hover:scale-x-105 hover:bg-slate-100 hover:text-sky-500
            focus:outline-none focus:scale-x-105 focus:bg-slate-100 focus:text-sky-500">
            {props.icon}
            {props.text}
        </a>
    )
}