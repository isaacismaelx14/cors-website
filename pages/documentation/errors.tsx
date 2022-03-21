import { Box } from "@mui/system";
import { Container, Typography, Link, Card } from "@mui/material";
import Spacer from "../_spacer";
import Head from "next/head";
import Image from "next/image";

const _TITLE = "Errores al generar archivo CORS";

function Errors() {
  return (
    <>
      <Head>
        <title>{_TITLE} || Docs MedraMart</title>
        <meta
          name="description"
          content={`Al generar el archivo pueden ocurrir algunos errores inesperados. Por esta razón nos hemos propuesto a crear esta documentación para ayudarte a entender mejor los errores y encontrar una posible solución.`}
        />
        <meta name="keywords" content={_TITLE} />
        <meta name="author" content="MedraMart" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <Box marginTop="50px">
        <Container>
          <Card>
            <Box padding="30px" textAlign={"justify"}>
              <Container>
                <Typography variant="h4">
                  <b>{_TITLE}</b>
                </Typography>
                <Spacer />
                <Typography variant="body1">
                  Al generar el archivo pueden ocurrir algunos errores
                  inesperados. Por esta razón nos hemos propuesto a crear esta
                  documentación para ayudarte a entender mejor los errores y
                  encontrar una posible solución.
                </Typography>
                <Spacer height={10} />
                <Typography variant="h5">
                  <b>Funcion del servicio</b>
                </Typography>
                <Typography variant="body1">
                  Empecemos entendiendo como funciona el servicio para entender
                  la razón de estos errores.
                </Typography>
                <Spacer height={10} />
                <Typography variant="body1">
                  Al utilizar{" "}
                  <b>
                    &quot;<i>Obtener datos CORS</i>&quot;
                  </b>{" "}
                  lo que hacemos es recibir tus datos y por medio de algunos
                  algoritmos detectar el nombre del archivo que quieres generar,
                  es decir, no tenemos una conexión directa con la CORS, sino
                  que te ofrecemos simplemente una herramienta para hacerte más
                  fácil la tarea de descargar estos archivos.
                </Typography>
                <Spacer height={10} />
                <Typography variant="h6">
                  <b>¿Cuál es el problema con esto?</b>
                </Typography>
                <Typography variant="body1">
                  Al no tener una conexión directa con la CORS no tenemos forma
                  de saber cuando existe o no un archivo, esta es la razón por
                  la que te puedes encontrar con errores inesperados al momento
                  de intentar descargarlo, tampoco tenemos un manejo de errores
                  eficiente, simplemente por medio de algoritmos podemos “más o
                  menos” saber cuándo no fue posible descargar el archivo que
                  requeriste, pero no es muy preciso. Otro problema de esto es
                  que no tenemos control de los cambios que se hagan en la CORS,
                  si algún día los hacen un cambio en la CORS que afecte la
                  forma en la que trabaja nuestro algoritmo, esto con llevaría a
                  que nuestra herramienta dejase de funcionar en esa CORS.
                </Typography>
                <Spacer height={10} />
                <Typography variant="h6">
                  <b>¿Qué puedo hacer si tengo un error?</b>
                </Typography>
                <Typography variant="body1">
                  En este caso puedes hacerlo manualmente he intentar descargar
                  los datos directamente desde la pagina de la CORS que has
                  seleccionado. (Puedes encontrar la URL al momento que
                  seleccionas una CORS en la herramienta)
                </Typography>
                <Spacer height={10} />
                <Typography variant="body2">
                  Antes de continuar debes detectar cual es el tipo de error que
                  has tenido para saber cómo proceder.
                </Typography>
                <Spacer height={10} />
                <Typography variant="h6">
                  <b>Los errores pueden ser de 3 tipos:</b>
                </Typography>
                <Box className="error">
                  <Spacer height={10} />
                  <Typography variant="body1">
                    <b>No disponible: </b>
                  </Typography>
                  <Spacer height={10} />
                  <Box>
                    <Image
                      src={"/img/err_help_cannot.png"}
                      width="600px"
                      height="220px"
                      alt="not found example"
                      className="error-img"
                      loading="lazy"
                    />
                  </Box>
                  <Spacer height={10} />
                  <Typography variant="body1">
                    Este error se debe a que la CORS no esta disponible, ya sea
                    por algún mantenimiento, que este apagada o alguna
                    actualización de la CORS. En este caso puedes esperar unas
                    horas, y si el problema persiste podrías ponerte en contacto
                    con algún administrador de la CORS para obtener más
                    información.
                  </Typography>
                </Box>
                <Box className="error">
                  <Spacer height={10} />
                  <Typography variant="body1">
                    <b>No Autorizado: </b>
                  </Typography>
                  <Spacer height={10} />
                  <Box>
                    <Image
                      src={"/img/err_help_not-auth.png"}
                      width="600px"
                      height="200px"
                      alt="not found example"
                      className="error-img"
                      loading="lazy"
                    />
                  </Box>
                  <Spacer height={10} />
                  <Typography variant="body1">
                    Este error puede ser debido a que la información que estas
                    introduciendo no es valida y la CORS no ha sido capaz de
                    autentificarte. En este caso podrias revisar la informacio
                    que has provicionado e intentarlo de nuevo. Si continuas
                    teniendo este error puedes intentarlo desde la pagina de la
                    CORS directamente
                  </Typography>
                </Box>
                <Box className="error">
                  <Spacer height={10} />
                  <Typography variant="body1">
                    <b>No encontrado: </b>
                  </Typography>
                  <Spacer height={10} />
                  <Box>
                    <Image
                      src={"/img/err_help_not-found.png"}
                      width="600px"
                      height="220px"
                      alt="not found example"
                      className="error-img"
                      loading="lazy"
                    />
                  </Box>
                  <Typography variant="body1">
                    Este error puede ser debido a varias razones, esto podría
                    ser debido a que la fecha y hora que has introducido no esta
                    disponible en la CORS, y necesitaras entrar otra.
                  </Typography>
                  <Spacer height={10} />
                  <Typography variant="body2">
                    <i>
                      Ten en cuenta que algunas CORS toman de 1 a 4 horas para
                      tener los archivos disponibles
                    </i>
                  </Typography>
                  <Spacer height={10} />
                  <Typography variant="body1">
                    Si estás seguro de que dicho archivo si está disponible en
                    la CORS, es posible que haya habido un cambio y nuestro
                    algoritmo no fue capaz de obtener el archivo exacto, en ese
                    caso podrías entrar a la CORS para identificar mejor el
                    problema. Esto podrás lograrlo siguiendo estos pasos:
                  </Typography>
                  <Spacer height={10} />
                  <Typography variant="body1">
                    <b>Paso 1:</b>
                  </Typography>
                  <Typography variant="body1">
                    Entra a la CORS. Puedes utilizar el link y la información
                    generada para revisar que la información que suministraste
                    es la correcta (recuerda que esta hora es generada por el
                    algoritmo sumándole 4 horas a la hora que seleccionaste)
                  </Typography>
                  <Spacer height={10} />
                  <Box>
                    <Image
                      src={"/img/err_help_2.png"}
                      width={620}
                      height={200}
                      alt="not found example"
                      className="error-img"
                      loading="lazy"
                    />
                  </Box>
                  {/* Step 2 */}
                  <Spacer height={10} />
                  <Typography variant="body1">
                    <b>Paso 2:</b>
                  </Typography>
                  <Typography variant="body1">
                    Inicia sesión con tus credenciales, te encontraras con un
                    Login como este y tendrás que suministrar la información.
                  </Typography>
                  <Spacer height={10} />
                  <Box>
                    <Image
                      src={"/img/err_help_login_1.png"}
                      width={800}
                      height={400}
                      alt="not found example"
                      className="error-img"
                      loading="lazy"
                    />
                  </Box>
                  {/* Step 3 */}
                  <Spacer height={10} />
                  <Typography variant="body1">
                    <b>Paso 3:</b>
                  </Typography>
                  <Typography variant="body1">
                    Luego deberás dirigirte a la sección de <i>“Data Loggin”</i>{" "}
                    y seleccionar <i>/Internal</i>
                  </Typography>
                  <Spacer height={10} />
                  <Box>
                    <Image
                      src={"/img/err_help_platform_1.png"}
                      width={700}
                      height={400}
                      alt="not found example"
                      className="error-img"
                      loading="lazy"
                    />
                  </Box>
                  {/* Step 4 */}
                  <Spacer height={10} />
                  <Typography variant="body1">
                    <b>Paso 4:</b>
                  </Typography>
                  <Typography variant="body1">
                    Luego de hacer click te vas a encontrar con una tabla que
                    contiene numero de 5 cifras, estos hacen referencia al año y
                    mes que quieres seleccionar. Puedes guiarte de la
                    información suministrada por el algoritmo para seleccionar
                    la correcta. En caso de que no encuentres el año y mes
                    deseado, se debe a que esos archivos no están disponibles
                    para ser descargados.
                  </Typography>
                  <Spacer height={10} />
                  <Box
                    display={"flex"}
                    flexDirection={["column", "row"]}
                    gap="10px"
                  >
                    <Box>
                      <Image
                        src={"/img/err_help_3.png"}
                        width={600}
                        height={150}
                        alt="not found example"
                        className="error-img"
                        loading="lazy"
                      />
                    </Box>
                    <Image
                      src={"/img/err_help_platform_2.png"}
                      width={600}
                      height={350}
                      alt="not found example"
                      className="error-img"
                      loading="lazy"
                    />
                  </Box>{" "}
                  {/* Step 5 */}
                  <Spacer height={10} />
                  <Typography variant="body1">
                    <b>Paso 5:</b>
                  </Typography>
                  <Typography variant="body1">
                    Luego de seleccionar, debes elegir la opcion B y luego de
                    hacer click en esta opcion veras una lista de todos los
                    archivos del año y mes que seleccionaste. Aquí deberas hacer
                    una busqueda basada en la fecha y hora que quieres decargar.
                  </Typography>
                  <Spacer height={10} />
                  <Box>
                    <Image
                      src={"/img/err_help_platform_3.png"}
                      width={500}
                      height={400}
                      alt="not found example"
                      className="error-img"
                      loading="lazy"
                    />
                  </Box>
                  {/* Step 6 */}
                  <Box marginLeft="20px">
                    <Spacer height={10} />
                    <Typography variant="body1">
                      <b>Paso 5.1:</b>
                    </Typography>
                    <Typography variant="body1">
                      Si encontraste el archivo en la lista es posible que el
                      problema este en nuestro algoritmo que no le fue posible
                      conectarse con la CORS para obtener esta información. El
                      siguiente paso que debes hacer es hacer click sobre el
                      archivo y descargarlo. En ese caso haremos todo lo posible
                      para solucionarlo lo antes posible.
                    </Typography>
                    <Spacer height={10} />
                  </Box>
                  {/* Step 5.2 */}
                  <Box marginLeft="20px">
                    <Spacer height={10} />
                    <Typography variant="body1">
                      <b>Paso 5.2:</b>
                    </Typography>
                    <Typography variant="body1">
                      Si no esta en la lista, esto se debe a que aún no esté
                      disponible o haya sido eliminado, en se casó tendrías que
                      ponerte en contacto con el administrador de la CORS para
                      tener mas información.
                    </Typography>
                    <Spacer height={20} />
                  </Box>
                </Box>
              </Container>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default Errors;
