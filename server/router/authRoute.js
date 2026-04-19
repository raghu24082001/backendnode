import express, { Router } from "express"
import { createdata, getdata } from "../control/authControl.js"

const route = Router()

route.post("/create",createdata)

route.get("/getdata",getdata)

//http://localhost:5000/api/user/create

//http://localhost:5000/api/user/getdata

export default route