import TestForm from "@/components/TestForm";

export default function CheckoutPage({
    product,
}) {
    return (
        <div>

            <h2 className="text-center">Оформление заказа</h2>

            <p>Наименование товара: {product.name}</p>
            <p>Количество: {product.count}</p>
            <p>Цена за штуку: {product.price}</p>
            <p>Итоговая цена: {product.price * product.count}</p>

            <TestForm />

        </div>
    )
}
