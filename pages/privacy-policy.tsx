import { Card, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Spacer from "./_spacer";

function Privacy() {
  return (
    <Container>
      <Head>
        <title>Políticas de privacidad</title>
        <meta name="description" content="Políticas de privacidad" />
        <meta
          name="keywords"
          content="privacidad, politica, politica de privacidad"
        />
        <meta name="author" content="MedraMart" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <Box marginTop="30px" padding="50px 0">
        <Card>
          <Box padding={"20px"} textAlign="justify">
            <Typography variant="h3">Privacidad</Typography>
            <Typography variant="body1">
              El presente Política de Privacidad establece los términos en que
              MedraMart usa y protege la información que es proporcionada por
              sus usuarios al momento de utilizar su sitio web. Esta compañía
              está comprometida con la seguridad de los datos de sus usuarios.
              Cuando le pedimos llenar los campos de información personal con la
              cual usted pueda ser identificado, lo hacemos asegurando que sólo
              se empleará de acuerdo con los términos de este documento. Sin
              embargo, esta Política de Privacidad puede cambiar con el tiempo o
              ser actualizada por lo que le recomendamos y enfatizamos revisar
              continuamente esta página para asegurarse que está de acuerdo con
              dichos cambios.
            </Typography>
            <Spacer />
            <Typography variant="h4">Servicio de Cors</Typography>
            <Spacer />
            <Typography variant="h5">Información que es recogida</Typography>
            <Typography variant="body1">
              Nuestro servicio de CORS no recopila información personal de los
              usuarios que no es necesaria para el servicio. Toda información
              recolectada en este servicio no es guardada en nuestra base de
              datos, dicha información es enviada a los servicios de CORS una
              vez usted presiona el botón{" "}
              <strong>&quot;Descargar datos&quot;</strong>. La empresa se
              descarga de toda responsabilidad de la información administrada
              por el usuario una vez presiona el botón{" "}
              <strong>&quot;Descargar datos&quot;</strong>, ya que hacemos es un
              enlace directo del cliente con la CORS y no tenemos acceso a{" "}
              <strong>NINGUNA</strong> información administrada a estos
              servicios por el cliente.
            </Typography>
            <Spacer />

            <Typography variant="h5">Enlaces a Terceros</Typography>

            <Typography variant="body1">
              Este sitio web pudiera contener en laces a otros sitios que
              pudieran ser de su interés. Una vez que usted de clic en estos
              enlaces y abandone nuestra página, ya no tenemos control sobre al
              sitio al que es redirigido y por lo tanto no somos responsables de
              los <strong>términos o privacidad</strong> ni de la protección de
              sus datos en esos otros sitios terceros. Dichos sitios están
              sujetos a sus propias políticas de privacidad por lo cual es
              recomendable que los consulte para confirmar que usted está de
              acuerdo con estas.
            </Typography>
            <Spacer height={10} />
            <Typography variant="body1">
              Esta compañía no venderá, cederá ni distribuirá la información
              personal que es recopilada sin su consentimiento, salvo que sea
              requerido por un juez con un orden judicial.
            </Typography>
            <Spacer height={10} />
            <Typography variant="body1">
              MedraMart Se reserva el derecho de cambiar los términos de la
              presente Política de Privacidad en cualquier momento.
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}

export default Privacy;
