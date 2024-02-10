import { useState } from "react"

interface userDataInterface{
    [key:string] : any;
}

const Fetcher = () => {

    const [userData, setUserData] = useState<userDataInterface>({});
    const [loader, setLoader] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("")

    const fetchUserData = async () => {
        setLoader(true)
        const urlOfUser = `https://api.github.com/users/${inputValue}`
        const response = await fetch(urlOfUser);
        const dataOfUser = await response.json();
        setUserData(dataOfUser);
        setLoader(false)
    }

    

    if (loader) {
        return (
            <h1>Loading , Please Wait</h1>
        )
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value);
            }} />
            <button onClick={fetchUserData}>Fetch</button>
            {
                userData ? (
                    <div>
                        <div>
                            <div>
                                <img src={userData.avatar_url} alt={userData.avatar_url} />
                            </div>
                            <div>{userData.login}</div>
                            <div>Created At {userData.created_at}</div>
                        </div>
                    </div>
                ) : (null)
            }

        </div>
    )
}

export default Fetcher