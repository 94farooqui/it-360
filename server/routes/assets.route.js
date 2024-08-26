import express from 'express'
import { addAsset, getAllTAssets,addAssetCategory,getAllAssetCategories, addAssetType, getAllAssetTypes } from '../controller/assets.controller.js'

const router = express.Router()

router.get("/", getAllTAssets)
router.post("/",addAsset)

//Routes for asset category
router.post("/category",addAssetCategory)
router.get("/category",getAllAssetCategories)
//router.post("/category",addAssetCategory)

//routes for asset types
router.post("/asset-type",addAssetType)
router.get("/asset-type",getAllAssetTypes)


export default router