import express, { Router } from "express"
import { createdata } from "../control/authControl.js"

const route = Router()

route.post("/create",createdata)

//http://localhost:5000/api/user/create

export default route