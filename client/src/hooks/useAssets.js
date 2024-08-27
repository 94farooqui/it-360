import { getAllAssetCategories, getAllAssetTypes, getAllVendors } from "@/services/api"
import { useEffect, useState } from "react"

const useAssets = () => {

    const [categories, setCategories] = useState(null)
    const [types, setTypes] = useState(null)
    const [vendors, setVendors] = useState(null)
    const [assets, setAssets] = useState(null)

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getAllAssetCategories()
            if (data) {
                setCategories(data)
            }
        }
        const fetchTypes = async () => {
            const data = await getAllAssetTypes()
            if (data) {
                setTypes(data)
            }
        }
        const fetchVendors = async () => {
            const data = await getAllVendors()
            if(data){
                setVendors(data)
            }
        }
        fetchCategories()
        fetchTypes()
        fetchVendors()
    }, [])

    return ({categories,setCategories,types,setTypes})

}

export default useAssets