import {createContext,useEffect,useState} from "react";
import {sanityClient} from "../sanityclient"

export const sanityDataContext = createContext();

export const SanityDataContextProvider = ({children}) => {
    const [allNewsData, setAllNewsData] = useState([]);
    const [allNewsCategories, setAllNewsCategories] = useState([]);

    const fetchAllNewsData = () => {
        sanityClient.fetch(`*[_type=="news"]{
            ...,
            "poster" : newsImage.asset-> url 
          }`)
        .then((res)=>setAllNewsData(res))
        .catch((err)=>console.log(err))
    }

    const fetchAllNewsCategories = () => {
        sanityClient.fetch(`*[_type=="catagories"]`)
        .then((res)=>setAllNewsCategories(res))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        fetchAllNewsData();
        fetchAllNewsCategories();
    },[])

    return (
        <sanityDataContext.Provider value={{allNewsData, allNewsCategories}}>
            {children}
        </sanityDataContext.Provider>
    )
}