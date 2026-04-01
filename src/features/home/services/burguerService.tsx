import { db } from "@/libs/FirebaseConnection";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { BurguerData } from "../types/BurguerData";

export const getBurguers = async () => {
    const burguersCollection = collection(db, "lanches")

    const q = query(burguersCollection, orderBy("name", "asc"))

    const querySnapshot = await getDocs(q)

    const burguersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })) as BurguerData[]

    return burguersData
}