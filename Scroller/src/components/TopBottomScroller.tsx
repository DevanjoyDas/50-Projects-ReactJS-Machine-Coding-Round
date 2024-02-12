import { useEffect, useRef, useState } from 'react'


interface apiDataInterfaceObject{
    [key:string] : string | number
}


const TopBottomScroller = () => {

    const [apiData,setApiData] = useState<apiDataInterfaceObject[]>()
    const [loading,setLoading] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)

    const fetchData = async ()=>{
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products?limit=0");
        const data = await response.json();
        setApiData(data.products);
        setLoading(false)
    }

    useEffect(()=>{
        fetchData();
    },[])

    const reachBottom = ()=>{
        ref.current?.scrollIntoView({behavior:'smooth'})
    }
    const reachTop = ()=>{
        window.scrollTo(
            {
                top : 0,
                left : 0,
                behavior : 'smooth'
            }
        )
    }
    const reachSection = ()=>{
        const position = sectionRef.current?.getBoundingClientRect().top;
        window.scrollTo(
            {
                top : position,
                behavior : 'smooth'
            }
        )
    }

    if(loading){
        return(
            <div>
                Loading...
            </div>
        )
    }

  return (
    <div>
        <button onClick={reachBottom}>Go To Bottom</button>
        <button onClick={reachSection}>Click to go to 4th Product</button>
        {
            (apiData && apiData.length>0)?
            (apiData.map((eachObject)=>{
                return(
                    <div ref={eachObject.id===4?sectionRef:null} key={eachObject.id}>{eachObject.title}</div>
                )
            })) : null
        }
        <div ref={ref}>End of Document</div>
        <button onClick={reachTop}>Go To Top</button>
    </div>
  )
}

export default TopBottomScroller