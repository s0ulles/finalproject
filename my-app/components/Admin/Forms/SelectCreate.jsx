'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getUniqueCategories } from "@/lib/actions"


export default async function SelectCreate({ cats }) {

    return (
        <Select className="w-full">
            <SelectTrigger >
                <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent >
                {
                    cats.map((cat) => (
                        <SelectItem value={cat.category}>{cat.category}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
}
