import { useEffect, useState } from "react";

const useDebounce = (val , n) =>{
    const [deb , setDeb] = useState(val);

    useEffect(()=>{
        const id = setTimeout(()=>{
            setDeb(val);
        },[n])
        return ()=>{
            clearInterval(id)
        }
    },[val])
    console.log(deb)
    return deb
}
export default useDebounce