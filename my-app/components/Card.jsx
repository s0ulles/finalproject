'use client'

import Link from "next/link";
import CardDescription from "./CardDescription";
import ColorChoose from "./ColorChoose";
import Counter from "./Counter";
import { useState } from "react";

export default function Card({ title, price, rating, description }) {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('')

    return (
        <div className="w-1/4 p-5 border border-green-400">
            <h2 className="mb-5">{title}</h2>
            <CardDescription description={description} />

            <div className="flex justify-between items-center mt-5">
                <p>{rating}</p>
                <p>{price}</p>
            </div>
            <ColorChoose color={color} setColor={setColor} />
            <div className="flex justify-between items-center">
                <Counter count={count} setCount={setCount} />
                <Link
                    href={`/checkout?title=${title}&count=${count}&color=${color}&price=${price}
                `} className="px-4 py-2 border rounded-xl border-orange-400 hover:bg-orange-400 hover:text-white transition-all">Купить</Link>
            </div>
        </div>
    )
}