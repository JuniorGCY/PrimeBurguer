import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { cartItems, customer} = await request.json()

    const products = cartItems.map((item: any) => ({
        externalId: item.id,
        name: item.name,
        quantity: item.quantity,
        price: Math.round(item.price * 100)
    }))

    const cleanCellphone = customer.cellphone ? customer.cellphone.replace(/\D/g, '') : "11999999999";
    const cleanTaxId = customer.taxId ? customer.taxId.replace(/\D/g, '') : "09162218140"; 

    try {
        const response = await fetch('https://api.abacatepay.com/v1/billing/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.ABACATE_PAY_KEY}`
            },
            body: JSON.stringify({
                frequency: "ONE_TIME",
                methods: ["PIX"],
                products: products,
                returnUrl: `${process.env.NEXT_PUBLIC_URL}/cart`,
                completionUrl: `${process.env.NEXT_PUBLIC_URL}/order-success`,
                customer: {
                    name: customer.name,
                    email: customer.email,
                    cellphone: cleanCellphone,
                    taxId: cleanTaxId
                }
            }),
        })

        const data = await response.json()

        if (!response.ok) {
             console.error(" 3. O AbacatePay recusou os dados!");
             return NextResponse.json({ error: data }, { status: response.status });
        }

        return NextResponse.json({ url: data.data.url })
    } catch (error) {
        console.error("Erro fatal no servidor:", error);
        return NextResponse.json({ error: "Erro ao criar checkout"}, {status: 500})
    }
}