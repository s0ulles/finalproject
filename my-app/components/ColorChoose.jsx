'use client'

import { useState } from "react"

export default function ColorChoose({ color, setColor }) {

    return (
        <div>
            <p>{color}</p>
            <div className="mb-3">
                <button
                    onClick={() => {
                        setColor('Желтый')
                    }}
                    className="border border-green-300 p-2 mx-1"
                >Желтый</button>
                <button
                    onClick={() => {
                        setColor('Зеленый')
                    }}
                    className="border border-green-300 p-2 mx-1">Зеленый</button>
                <button
                    onClick={() => {
                        setColor('Красный')
                    }}
                    className="border border-green-300 p-2 mx-1"
                >Красный</button>
            </div>
        </div >
    )
}