'use client'

import { useState } from "react"

export default function Dropdown({ title, children }) {

    const [show, setShow] = useState(false)

    return (
        <div
            className=" relative text-l transition-all cursor-pointer hover:text-gray-400"
            onClick={() => {
                setShow(!show)
            }}

        >
            <p className="hover:text-gray-400 flex gap-x-1 items-center text-white">{title} <span className="text-sm">🡓</span></p>
            {
                show && (
                    <div className="absolute left-0 top-full">
                        {children}
                    </div>
                )
            }

        </div>
    )
}
