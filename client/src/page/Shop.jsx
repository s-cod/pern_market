import { Container, Row, Col } from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import TypeBar from '../components/TypeBar'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { Context } from '../index'
import { fetchBrands, fetchTypes, fetchDevice } from '../http/deviceAPI'

const Shop = observer(() => {
  const { devices } = useContext(Context)
  useEffect(() => {
    fetchTypes().then((data) => devices.setTypes(data))
    fetchBrands().then((data) => devices.setBrands(data))
    fetchDevice().then((data) => devices.setDevice(data.rows))
  }, [])
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>

        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  )
})

export default Shop
