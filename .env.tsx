import { Container, Grid, TextField, Typography } from "@mui/material";
import { Card, Select, Button } from "@geist-ui/core";
import Spacer from "./_spacer";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/lab";
import { Box } from "@mui/system";
() => (
  <Container className="no-select">
    <Spacer />
    <Grid>
      <Grid item xs={12}>
        <Card shadow>
          <Typography variant="h6">Obtener datos cors</Typography>
          <Spacer />

          <Box display="flex" gap="20px">
            <label>Cors</label>
            <Select
              value={cors}
              onChange={handleChange}
              placeholder="Seleccione una Cors"
            >
              {Object.keys(corsList).map((key: any) => {
                return (
                  <Select.Option key={key} value={key}>
                    {corsList[key].name} ({corsList[key].city})
                  </Select.Option>
                );
              })}
            </Select>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDateTimePicker
                renderInput={(props: any) => (
                  <TextField
                    {...props}
                    variant="outlined"
                    sx={{ height: "10px" }}
                  />
                )}
                value={value}
                maxDate={new Date()}
                onChange={(newValue: any) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>

            <Button type="secondary" onClick={DownloadData}>
              Descargar
            </Button>
          </Box>

          <Typography variant="body2" color="GrayText">
            El programa automaticamente suma las 4 horas a la hora que
            seleccione
          </Typography>

          <Spacer height={10} />
          <Typography variant="body1">
            {cors && (
              <>
                CORS:{" "}
                <b>
                  {cors} ({corsList[cors].city})
                </b>
                <br />
              </>
            )}
          </Typography>
          <Spacer height={10} />
          <Typography variant="body2" color="GrayText">
            En caso de algun error, puede intentar descargarlo manualmente.
            <br />
            para hacerlo visite el siguiente enlace{" "}
            {
              <a href={corsList[cors].url} target="_blank" rel="noreferrer">
                {corsList[cors].url}
              </a>
            }
          </Typography>
        </Card>
      </Grid>
    </Grid>
  </Container>
);
