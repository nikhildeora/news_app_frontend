import {createContext,useEffect,useState} from "react";
import {sanityClient} from "../sanityclient"

export const sanityDataContext = createContext();

export const SanityDataContextProvider = ({children}) => {
    const [allNewsData, setAllNewsData] = useState([]);

    const fetchAllNewsData = () => {
        sanityClient.fetch(`*[_type=="news"]{
            ...,
            "poster" : newsImage.asset-> url 
          }`)
        .then((res)=>setAllNewsData(res))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        fetchAllNewsData();
    },[])

    return (
        <sanityDataContext.Provider value={{allNewsData}}>
            {children}
        </sanityDataContext.Provider>
    )
}