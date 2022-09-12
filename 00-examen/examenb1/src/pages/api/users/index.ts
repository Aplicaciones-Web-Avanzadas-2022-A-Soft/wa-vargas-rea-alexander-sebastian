import type { NextApiRequest, NextApiResponse } from 'next'
import {conn} from "../../../utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) =>{
    const {method, body} = req;
    switch (method){
        case "GET":
            return res.status(200).json("getting tasks");
        case "POST":
            const {title, descripcion} =body;
            await conn.query('INSERT INTO consolas')
            console.log(body)
            return res.status(200).json("crating tasks");
        default:
            return res.status(400).json("inavlid method");

    }
}