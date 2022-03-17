import { Box, Container, Typography, Link } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Cors from "./_cors";
import RouterLink from "next/link";
import { corsList } from "./api/cors";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Obtener datos CORS || MedraMart</title>
        <meta
          name="description"
          content="Descarga los datos de las CORS en RD. Aquí tienes una lista de las CORS registras en República Dominicana, listadas por MedraMart. Esto es especial para agrimensores, topografos y todas las personas que trabajen con datos GPS."
        />
        <meta
          name="keywords"
          content={`cors, cors rd, cors rd medramart, cors.medramart.com, trimble cors, trimble rd, datos gps,${corsList.map(
            (cors) => " " + cors.name
          )}, cors republica dominicana, ${corsList.map(
            (cors) => " " + cors.city
          )}`}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MedraMart" />
        <meta name="copyright" content="MedraMart" />
        <meta name="application-name" content="MedraMart Cors Client" />
      </Head>

      <Container>
        <Cors />
      </Container>
      <Box width="100%" textAlign="center" marginTop={"20px"}>
        <RouterLink href={"privacy-policy"} passHref>
          <Link>Política de privacidad</Link>
        </RouterLink>
        <Typography variant="body2" color="GrayText">
          MedraMart © 2022
        </Typography>
      </Box>
    </>
  );
};

export default Home;
