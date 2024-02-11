interface apiDataType{
    [key:string] : boolean
}
const fakeApiResponse:apiDataType = {
    Holi : true,
    Diwali : true,
    Christmas : true,
}
export const fakeApiCallFunction = async ():Promise<apiDataType>=>{
    return await new Promise((resolve,reject)=>{
            if(fakeApiResponse){
                setTimeout(() => {
                    resolve(fakeApiResponse);
                }, 2000);
            }
            else{
                reject("error")
            }
        })
}