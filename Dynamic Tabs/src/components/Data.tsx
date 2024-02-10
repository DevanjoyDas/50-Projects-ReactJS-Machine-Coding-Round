
const TempComponent = ()=>{
    return(
        <div>Temp Component</div>
    )
}




const Data = [
    {
        Title : "Hello",
        Paragraph : "Hello World , Hello Devanjoy"
    },
    {
        Title : "Apple",
        Paragraph : "Apple is a Fruit"
    },
    {
        Title : "Mango",
        Paragraph : "Mango is a Fruit"
    },
    {
        Title : "Temp Component",
        Paragraph : <TempComponent/>
    },
]
export default Data;