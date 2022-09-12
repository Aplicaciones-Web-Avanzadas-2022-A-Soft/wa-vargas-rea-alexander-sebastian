import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) =>{
  const {method} = req;
  switch (method){
    case "GET":
      return res.status(200).json("getting tasks");
    case "POST":
      return res.status(200).json("crating tasks");
    default:
      return res.status(400).json("inavlid method");

  }
}