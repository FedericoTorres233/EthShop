import Carousel from "react-bootstrap/Carousel";

function MyCarousel() {
  return (
    <Carousel variant="dark" fade className="container-xl pt-3 pb-3">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 rounded border border-dark"
          src="/ethereum_price.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>
            <strong>La moneda del futuro</strong>
          </h1>
          <h4>
            <strong>
              Utiliza las mas avanzadas tecnologias para obtener los beneficios
              de las crypto
            </strong>
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 rounded border border-dark"
          src="happy-man.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>
            <strong>Sé independiente</strong>
          </h1>
          <h4>
            <strong>Invierte el 100% de tu dinero en el producto</strong>
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 rounded border border-dark"
          src="economia.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>
            <strong>Descubre los beneficios a largo y corto plazo</strong>
          </h1>
          <h4>
            <strong>
              Experimente los beneficios de las cryptomonedas sin riesgo alguno,
              gracias a nuestro sistema anti-pérdidas
            </strong>
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
