import { useEffect, useState } from "react"

const ProductList = () => {
    const [productList, setProductList] = useState()
    const fetchData = async () => {
        try {
            const response = await fetch();

        } catch (error) {
            
        }
    }

    useEffect(()=> {
        fetchData();
    }, [productList])

    return (
        <div className="grid grid-cols-4 gap-4">
            
        </div>
    )

}