import { Button, Container, Row } from 'react-bootstrap'
import CreateType from '../components/modals/CreateType'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import { useState } from 'react'

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <Container className="d-flex flex-column">
      <Row>
        <Button
          onClick={() => setTypeVisible(true)}
          variant={'outline-primary'}
          className="mt-2 p-3"
        >
          Добавить тип
        </Button>
        <Button
          onClick={() => setBrandVisible(true)}
          variant={'outline-primary'}
          className="mt-2 p-3"
        >
          Добавить бренд
        </Button>
        <Button
          onClick={() => setDeviceVisible(true)}
          variant={'outline-primary'}
          className="mt-2 p-3"
        >
          Добавить устройство
        </Button>
      </Row>

      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  )
}

export default Admin
