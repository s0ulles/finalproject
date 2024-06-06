'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import SelectCreate from "./Admin/Forms/SelectCreate"


export default function CreateProduct({ cats }) {

    const [files, setFiles] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const resp = await fetch('/api/products/create', {
            method: 'PUT',
            body: formData
        })
    }


    return (
        <form
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="w-1/2 mx-auto p-5 border flex flex-col gap-y-5">
            <Input name="name" type="text" placeholder="Введите название товара" />
            <Textarea name="description" placeholder="Введите описание товара" />
            <Input name="price" type="number" placeholder="Введите цену" />
            <SelectCreate cats={cats} />
            <Input onChange={(e) => {
            }} multiple name="images" type="file" />
            <Button>Создать товар</Button>
        </form>
    )
}