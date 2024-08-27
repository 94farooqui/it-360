import { getAllVendors } from "@/services/api"
import { useEffect, useState } from "react"

const useVendors = () => {

    const [vendors, setVendors] = useState(null)

    useEffect(() => {
        const fetchVendors = async () => {
            const data = await getAllVendors()
            if(data){
                setVendors(data)
            }
        }
        fetchVendors()
    }, [])

    return ({vendors,setVendors})

}

export default useVendors