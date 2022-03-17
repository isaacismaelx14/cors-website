import {
  Typography,
  Button,
  TextField,
  Autocomplete,
  Card,
  Alert,
  Link,
  AlertTitle,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { IGetCrosUrl } from "./api/corsUrl";
import { ICors } from "./api/cors";
import { LocalizationProvider, MobileDateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box } from "@mui/system";
import Spacer from "./_spacer";
import BrowserLink from "next/link"

const openInBrowser = (url: string) => {
  window.open(url, "_blank");
};

function Cors() {
  const [datetime, setDateTime] = useState<Date | null>();
  const [cors, setCors] = useState<string>("");
  const [corsList, setCorsList] = useState<any[]>([]);
  const [maybeFail, setMaybeFail] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [currentCors, setCurrentCors] = useState<ICors>();
  const [convertedDate, setConvertedDate] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const title = useRef("Obtener datos CORS (Beta)");

  useEffect(() => {
    setDateTime(new Date());
    setCorsList([]);
    axios.get<ICors[]>("/api/cors").then(({ data }) => {
      data.forEach((cors) => {
        setCorsList((prev) => [
          ...prev,
          { label: `${cors.name} (${cors.city})`, ...cors },
        ]);
      });
    });
  }, []);

  useEffect(() => {
    if (cors) setCurrentCors(corsList.find((corsD) => corsD.name === cors));
  }, [cors, corsList]);

  const DownloadData = async () => {
    const getSelected: any = document.getElementById("combo-cors-list");
    const selected = getSelected.value;
    //Chek if all is ok
    if (!datetime)
      return setError("Lo sentimos. Ha ocurrdo un error al generar el archivo");
    if (!cors || !selected)
      return setError("Debe seleccionar una cors para descargar");

    //make a consult to get the information
    const consult = await axios.post<IGetCrosUrl>("/api/corsUrl", {
      datetime,
      cors,
    });
    //Get the data from the consult
    const { url, date, fileName } = consult.data;

    if (url) openInBrowser(url);
    else
      return setError("Lo sentimos. Ha ocurrdo un error al generar el archivo");

    if (fileName) setFileName(fileName);
    if (date) setConvertedDate(date);
  };

  const handleChange = (datetime: any) => {
    setCors(datetime as string);
  };

  const clearAll = () => {
    setError("");
    setConvertedDate("");
    setFileName("");
    setMaybeFail(false);
    setCurrentCors(undefined);
  };

  return (
    <Box marginTop="40px">
      <Card>
        <Box
          p={2}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          width={"100%"}
          padding="50px"
        >
          <Box width="100%" maxWidth="800px">
            <Typography variant="h4" display={["none", "block"]}>
              {title.current}
            </Typography>
            <Typography variant="h5" display={["block", "none"]}>
              {title.current}
            </Typography>

            {error && (
              <Alert severity="error">
                <Typography variant="body1">{error}</Typography>
              </Alert>
            )}
            <Spacer />
            <Box display="flex" flexDirection={["column", "row"]} gap="20px">
              <Autocomplete
                id="combo-cors-list"
                options={corsList}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Cors"
                    placeholder="Seleccione una cors"
                    onChange={(e: any) => {
                      clearAll();
                    }}
                    focused
                    fullWidth
                  />
                )}
                onChange={(event, value) => {
                  if (!value) return;
                  handleChange(value.name);
                  clearAll();
                }}
              />

              {/* Timer select */}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDateTimePicker
                  value={datetime}
                  onChange={(newValue) => {
                    console.log(newValue);
                    setDateTime(newValue as Date);
                  }}
                  label="Fecha y hora"
                  onError={console.log}
                  maxDate={new Date()}
                  renderInput={(params: any) => (
                    <TextField {...params} fullWidth />
                  )}
                />
              </LocalizationProvider>
            </Box>
            <Spacer />
            <Button
              variant="outlined"
              size="large"
              onClick={DownloadData}
              fullWidth
            >
              Descargar datos
            </Button>

            <Typography variant="body2" color="GrayText">
              La aplicación automáticamente suma las 4 horas a la hora que
              seleccione
            </Typography>

            <Box>
              {maybeFail && (
                <>
                  <Spacer />
                  <Alert severity="warning">
                    <AlertTitle>
                      Posiblemente no se haya generado el archivo.
                    </AlertTitle>
                    <Typography variant="body1">
                      Si el archivo no se ha generado, es posible que la fecha
                      u/y hora seleccionada no esté disponible o ha colocado la
                      contraseña incorrecta.{" "}
                      <BrowserLink href={"/documentation/errors"} passHref>
                        <Link>Leer más</Link>
                      </BrowserLink>
                    </Typography>
                  </Alert>
                </>
              )}
            </Box>

            <Box marginTop="10px">
              {currentCors && (
                <>
                  <Typography variant="body2" color="GrayText">
                    En caso de algun error, puede intentar descargarlo
                    manualmente.
                    <br /> Para hacerlo visite el siguiente enlace:{" "}
                    {
                      <Link
                        href={currentCors.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {currentCors.url}
                      </Link>
                    }
                  </Typography>{" "}
                  <Spacer height={10} />
                  <Typography variant="body2" color="GrayText">
                    Puede guiarse utilizando esta informacion:{" "}
                    {convertedDate && (
                      <Typography variant="body2" color="GrayText">
                        La fecha y hora del archivo es: <b>{convertedDate}</b>{" "}
                        (UTC)
                      </Typography>
                    )}
                    {fileName && (
                      <Typography variant="body2" color="GrayText">
                        El nombre del archivo es: <b>{fileName}</b>
                      </Typography>
                    )}
                  </Typography>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default Cors;











/* 

TODO: Try to implemet this:

const createIFrame = (url: string) => {
    const getExist = document.getElementById("CorsIframeElement");
    if (getExist) getExist.remove();

    const iframe: any = document.createElement("iframe");

    iframe.id = "CorsIframeElement";
    iframe.src = url;
    iframe.style.display = "none";
    iframe.sandbox = "allow-same-origin allow-scripts allow-downloads ";
    document.body.appendChild(iframe);

    iframe.onload = () => {
      const data = iframe.contentWindow;
      if (data) {
        console.log(data);
      }
      iframe.remove();
      setMaybeFail(true);
      setTimeout(() => {
        openInBrowser(url);
      }, 2000);
    };
  };

*/