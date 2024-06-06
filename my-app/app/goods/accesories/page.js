import { getProductsByCategory } from "@/lib/queries"
import Counter from "@/components/Counter"
import Link from "next/link"
export default async function page() {
    const products = await getProductsByCategory('accessory')
    return (
        <div>
            <div className="font-mono flex flex-wrap gap-7 justify-center  mx-auto py-4 mb-[30px] dark:bg-slate-800 dark:text-white">
                {
                    products.map((accesories) => (
                        <div className=" h-[400px] w-[300px] m-[50px] ">
                            <div className="flex justify-center mb-5">
                                <img className="h-[200px]" src={`/img/accesories/${accesories.image}`} alt="" />
                            </div>
                            <div className="p-5 ">
                                <p className="mb-2 font-bold">{accesories.name}</p>
                                <p className="mb-2">{accesories.description}</p>
                                <p className="mb-2 font-bold">{accesories.price}</p>
                                <div className="flex justify-between mt-2">
                                    <Counter />
                                    <button className="border border-gray-400 rounded hover:text-white hover:bg-gray-400 py-1 px-3" onClick={products}><Link href="/checkout?">Купить</Link></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
