import Card from "@/components/Card"
import getGoods from "@/lib/getGoods"



export default async function goodsPage() {
    const goods = await getGoods()
    return (
        <div className="flex flex-wrap gap-5 justify-between">
            {
                goods.map((good) => (
                    <Card
                        key={good.id}
                        title={good.name}
                        price={good.model}
                        rating={good.price}
                        description={good.description}
                    />
                ))
            }
        </div>
    )
}