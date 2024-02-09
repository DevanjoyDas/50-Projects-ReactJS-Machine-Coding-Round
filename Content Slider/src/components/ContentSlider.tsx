import { useEffect, useState } from "react"
import "./style.css"

const ContentSlider = () => {

    type urlObject = {
        "id": string,
        "author": string,
        "width": number,
        "height": number,
        "url": string,
        "download_url": string
    }

    const url = "https://picsum.photos/v2/list"
    const [contentArray, setcontentArray] = useState<urlObject[]>([])
    const [currentImageId,setCurrentImageID] = useState<number>(0)
    async function fetchContent() {
        const response = await fetch(url);
        const data = await response.json()
        setcontentArray(data)
    }

    useEffect(() => {
        fetchContent();
    }, [])



    return (
        <div className="wholeContainer">
        <button onClick={()=>{
            setCurrentImageID(currentImageId === 0? contentArray.length-1 : currentImageId-1 )
        }}
        >Previous</button>
        <div className="flexImageContainer">
            {
                (contentArray && contentArray.length>0) ? contentArray.map((eachObject : urlObject)=>{
                    return(
                        <img key={eachObject.id} className={`${currentImageId===Number(eachObject.id)? "eachImageVisibleClass" : "eachImageHiddenClass"}`} src={`${eachObject.download_url}`} alt={`${eachObject.download_url}`} />
                    )
                }) : null
            }
        </div>
        <button onClick={()=>{
            setCurrentImageID(currentImageId === contentArray.length-1? 0 : currentImageId+1 )
        }}>Next</button>
        </div>
    )
}

export default ContentSlider