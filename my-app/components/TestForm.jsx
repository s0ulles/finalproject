'use client'

import { useState } from "react"

export default function TestForm() {

    const [value, setValue] = useState('')

    const [status, setStatus] = useState('')

    function handleChange(event) {
        setValue(event.target.value)
    }

    async function handleClick(e) {
        e.preventDefault()
        const resp = await fetch(`/api/products/create?data=${value}`)
        const result = await resp.json()
        if (result.result === 'ok') {
            setStatus('ok')
        }
    }

    return (
        <form className="flex flex-col justify-center items-center">
            <input
                value={value}
                onChange={(e) => {
                    handleChange(e)
                }}
                className="w-1/2 p-5 border border-orange-400 rounded-2xl" placeholder="Введите какой-то текст" />

            <button
                className="p-5 mt-3 bg-orange-400 rounded-2xl text-white"
                onClick={handleClick}
            >Отправить</button>
            {
                status === 'ok' ? (<p className="text-green-400 mt-5">Запрос был отправлен успешно</p>) : null
            }
        </form>
    )
}
