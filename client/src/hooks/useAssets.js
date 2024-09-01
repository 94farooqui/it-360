import { getAllAssetCategories, getAllAssets, getAllAssetTypes, getAllVendors } from "@/services/api"
import { useEffect, useState } from "react"

const useAssets = () => {

    const [error,setError] = useState(null)
    const [categories, setCategories] = useState(null)
    const [types, setTypes] = useState(null)
    const [assets, setAssets] = useState(null)

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getAllAssetCategories()
            if (data) {
                //console.log("Categories",data)
                setCategories(data)
            }
        }
        const fetchTypes = async () => {
            const data = await getAllAssetTypes()
            if (data) {
                //console.log("Types",data)
                setTypes(data)
            }
        }
        const fetchAssets = async () => {
            const data = await getAllAssets()
            if (data) {
                //console.log("Assets",data)
                setAssets(data)
            }
            else setError({error:"Unable to ferch data"})
        }
        fetchCategories()
        fetchTypes()
        fetchAssets()
    }, [])

    return ({categories,setCategories,types,setTypes,assets,error,setError})

}

export default useAssets