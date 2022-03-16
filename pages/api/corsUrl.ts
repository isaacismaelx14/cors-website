import type { NextApiRequest, NextApiResponse } from "next";
import { getCorsByName, getCorsURL } from "../../functions/Funcs";

export type IGetCrosUrl = {
  url?: string;
  error?: string;
  fileName?: string;
  date?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IGetCrosUrl>
) {
  const { datetime, cors } = req.body as { datetime: Date; cors: string };
  const date = new Date(datetime);

  date.setHours(date.getHours() + 4);

  const corsGetted = getCorsByName(cors);
  if (!corsGetted) return res.status(400).json({ error: "Invalid cors" });

  const host = corsGetted.url;
  const code = corsGetted.urlCode;

  const data = getCorsURL(cors, { code, host, date });

  res.status(200).json({ ...data });
}
