import { useEffect, useState } from "react";
import "./style.css"

type urlData = {
  "id": number,
  "title": string,
  "description": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "brand": string,
  "category": string,
  "thumbnail": string,
  "images": string[]
}

const ScrollBar = () => {

   

    const [dataArray, setDataArray] = useState<urlData[]>([]);
    const [scrollPercentage, setScrollPercentage] = useState<number>(0);
    const url = "https://dummyjson.com/products?limit=0";

    const fetchData = async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        setDataArray(data.products);
    }

    function handleScrollPercentage() {
        const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

    useEffect(() => {
      fetchData();
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);
    
        return () => {
          window.removeEventListener("scroll", () => {});
        };
      }, []);
    

  return (
    <div className="cont">
          <div className="scrollBar" style={{
          width: `${scrollPercentage}%`
        }}></div>
        { 
            (dataArray && dataArray.length>0)? (
                dataArray.map((eachObject)=>{
                    return(
                        <img key={eachObject.id} className="imgProps" src={eachObject.thumbnail} alt={eachObject.thumbnail} />
                    )
                })
            ):null
        }
    </div>
  )
}

export default ScrollBar