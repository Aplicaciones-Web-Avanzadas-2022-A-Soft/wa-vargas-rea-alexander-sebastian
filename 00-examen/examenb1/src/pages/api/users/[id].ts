import {NextApiRequest,NextApiResponse} from "next";

export default (req:NextApiRequest, res:NextApiResponse) => {
    const {method} = req;
    switch (method){
        case "GET":
            return res.json("getting unique consola");
        case "PUT":
            return res.json("updating unique consola");
        case "DELETE":
            return res.json("deleting unique consola");
        default:
            return res.status(400).json("method invalid");
    }

};