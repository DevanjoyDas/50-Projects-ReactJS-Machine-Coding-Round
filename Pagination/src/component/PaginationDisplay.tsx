import { useEffect, useState } from "react"


const PaginationDisplay = () => {

    type urlObject = {
        "id": number,
        "title": string,
        "description": string,
        "price": number,
        "discountPercentage": number,
        "rating": number,
        "stock":number,
        "brand": string,
        "category": string,
        "thumbnail": string,
        "images": string[]
    }

    const url = "https://dummyjson.com/products?limit=20&skip=0"
    const [DataArray, setDataArray] = useState<urlObject[]>([])
    const [pageNumber, setPageNumber] = useState<number>(0)
    

    async function fetchData(DataUrl: string) {
        try {
            const response = await fetch(DataUrl);
            const data = await response.json()
            setDataArray(data.products);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchData(url)
    }, [])

    useEffect(() => {
        const url = `https://dummyjson.com/products?limit=20&skip=${pageNumber * 20}`
        fetchData(url)
    }, [pageNumber])

    return (
        <div>
            {
                (DataArray && DataArray.length > 0) ? (
                    DataArray.map((eachObject: urlObject) => {
                        console.log(eachObject)
                        return (
                            <div key={eachObject.id}>{eachObject.title}</div>
                        )
                    })
                ) : null
            }
            <button disabled={pageNumber===0} onClick={() => {
                setPageNumber(pageNumber - 1)
            }} >Previous Page</button>
            <button disabled={pageNumber===4} onClick={() => {
                setPageNumber(pageNumber + 1)
            }}  >Next Page</button>
        </div>
    )
}

export default PaginationDisplay