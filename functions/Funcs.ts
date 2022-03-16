import { corsList, ICors } from "../pages/api/cors";''

export function GetDaysOfYear(dateToCompare: Date): number {
    const date:any = new Date(dateToCompare);
    const start: any = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day;
}

export const getCorsByName = (name: string): ICors | null => {
  const cors = corsList.find((cors) => cors.name === name);
  if (!cors) return null;
  return cors;
};

const numerToAlphabetLetter = (value: number, lowerCase?:boolean): string => {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowerCase) alphabet = alphabet.toLowerCase();
  return alphabet[value];
};

const addZero = (value: number, before = 10): string =>
  value < before ? `0${value}` : `${value}`;


export type IModifiedDate = {
  year: number | string;
  month: number | string;
  day: number | string;
  hours: string;
  transcurredDays : string;
};

const getModifiedDate = (date: Date): IModifiedDate => {
  const _month = date.getMonth() + 1;
  const _hour = date.getHours();
  const _day = date.getDate();
  const year = date.getFullYear();
  const hours = addZero(_hour);
  const day = addZero(_day);
  const month = addZero(_month);
  const transcurredDays = addZero(GetDaysOfYear(date), 100); 
  return { year, month, day, hours, transcurredDays };
};


export type IGetCorsURL = {
  date: Date;
  host: string;
  code: string;
}

export type IGettedCors = {
    url?: string;

  fileName?: string;
  date?: string;
}

export function getCorsURL(cors: string, data: IGetCorsURL): IGettedCors {
  const { date, host, code } = data;
  const { year, month, day, hours, transcurredDays } = getModifiedDate(date);
  let hourToLetter = numerToAlphabetLetter(parseInt(hours), true);
  let file = `${cors}${year}${month}${day}${hours}00B.T02`;
  let variantURL = `B`;

  switch (cors) {
    case "RDBN":
      variantURL = `${day}/B`;
      break;
    case "RDSC":
      file = `${cors}${transcurredDays}${hourToLetter}B.T02`;
      break;
  }

  return {
    url: `${host}/${code}/download/Internal/${year}${month}/${variantURL}/${file}`,
    fileName: file,
    date: `${year}-${month}-${day} ${hours}:00:00`,
  };
}