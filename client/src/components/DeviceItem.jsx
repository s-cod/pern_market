import { Card, Col, Image } from 'react-bootstrap'
import star from '../assets/star.jpg'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({ device }) => {
  const navigate = useNavigate()

  return (
    <Col md={3} className="mt-3" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{ padding: 8, overflow: 'hidden', cursor: 'pointer' }}>
        <Image src={process.env.REACT_APP_STATIC + device.img} />
        <div className=" mt-1 d-flex justify-content-between align-items-center">
          <div className="text-black-50">Samsung ...</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image src={star} width={16} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
}

export default DeviceItem
