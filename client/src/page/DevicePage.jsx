import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import star from '../assets/star.jpg'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] })

  const { id } = useParams()

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data))
  }, [])

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_STATIC + device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-item-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) no-repeat center`,
                backgroundSize: 'cover',
                width: 240,
                height: 240,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
          >
            <h3>от: {device.price} руб.</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2>Характеристики</h2>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  )
}

export default DevicePage
