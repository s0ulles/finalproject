'use client'

import { useState } from "react"

export default function CardDescription({ description }) {

    const [open, setOpen] = useState(false)

    return (
        <div>

            {open && <p className="description">{description}</p>}
            <button
                className=" text-green-400"
                onClick={() => {
                    setOpen(!open)
                }}
            >{open ? 'Скрыть описание' : 'Показать описание'}</button>

        </div>
    )
}