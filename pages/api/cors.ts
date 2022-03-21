// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type ICors = {
    name: string;
    url: string;
    urlCode: string;
    city: string;
};



export const corsList: ICors[] = [
  {
    name: "RDF2",
    url: "http://ggsrdf2.ddns.net",
    city: "Santiago",
    urlCode: "CACHEDIR2886212069",
  },
  {
    name: "ATT3",
    url: "http://190.80.239.109:81",
    city: "Santo Domingo",
    urlCode: "CACHEDIR2886212069",
  },
  {
    name: "RDBN",
    url: "http://190.80.159.155",
    city: "Bonao",
    urlCode: "CACHEDIR2189444303",
  },
  {
    name: "RDM2",
    url: "http://ggsrdm2.ddns.net:8080",
    city: "Montecristi",
    urlCode: "CACHEDIR2189444303",
  },
  {
    name: "RDEG",
    url: "http://rdeg.ddns.net:8080",
    city: "Puerto Plata",
    urlCode: "CACHEDIR2886212069",
  },
  {
    name: "RDSF",
    url: "http://rdsf.dyndns-ip.com",
    city: "San Francisco",
    urlCode: "CACHEDIR2189444303",
  },
  {
    name: "RDSC",
    url: "http://rdsc.ddns.net:8080",
    city: "Santiago",
    urlCode: "CACHEDIR2886212069",
  },
  {
    name: "RDAZ",
    url: "http://rdaz.ddns.net:8080/",
    city: "Azua",
    urlCode: "CACHEDIR2189444303",
  },
];


export default function handler(req: NextApiRequest, res: NextApiResponse<ICors[]>) {
  const order = corsList.sort((a, b) => a.city.localeCompare(b.city));
  res.status(200).json(order);
}
