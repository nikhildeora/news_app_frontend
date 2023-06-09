import {createContext,useEffect,useState} from "react";
import {sanityClient} from "../sanityclient"
import {auth} from "../firebase";
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth";

export const sanityDataContext = createContext();

export const SanityDataContextProvider = ({children}) => {
    const [allNewsData, setAllNewsData] = useState([]);
    const [allNewsCategories, setAllNewsCategories] = useState([]);

    const signInWithGoogleFun = () => {
       const provider = new GoogleAuthProvider();
       signInWithPopup(auth,provider)
       .then((res)=>console.log(res))
       .catch((err)=>console.log(err))
    }
    
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
        <sanityDataContext.Provider value={{allNewsData, allNewsCategories, signInWithGoogleFun}}>
            {children}
        </sanityDataContext.Provider>
    )
}