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
          <h3>La moneda del futuro</h3>
          <p>Utiliza las mas avanzadas tecnologias para obtener los beneficios de las crypto</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 rounded border border-dark"
          src="happy-man.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Sé independiente</h3>
          <p>Invierte el 100% de tu dinero en el producto</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 rounded border border-dark"
          src="economia.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Descubre los beneficios a largo y corto plazo</h3>
          <p>
            Experimente los beneficios de las cryptomonedas sin riesgo alguno, gracias a nuestro sistema anti-pérdidas
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
