import { NextResponse } from "next/server";

import { db } from "@/libs/FirebaseConnection"; 
import { doc, getDoc } from "firebase/firestore";

export async function POST(request: Request) {
    const { cartItems, customer } = await request.json()

    try {
        const products = await Promise.all(cartItems.map(async (item: any) => {
            const productRef = doc(db, "lanches", item.id); 
            const productSnap = await getDoc(productRef);

            if (!productSnap.exists()) {
                throw new Error(`Tentativa de compra de produto inválido: ${item.id}`);
            }

            const realProduct = productSnap.data();

            return {
                externalId: item.id,
                name: realProduct.name,
                quantity: item.quantity,
                price: Math.round(realProduct.price * 100)
            }
        }));

        const cleanCellphone = customer.cellphone ? customer.cellphone.replace(/\D/g, '') : "11999999999";
        const cleanTaxId = customer.taxId ? customer.taxId.replace(/\D/g, '') : "09162218140"; 

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