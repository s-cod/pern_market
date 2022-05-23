import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'

import { Context } from '../index'
const BrandBar = observer(() => {
  const { device } = useContext(Context)
  return (
    <Row className="d-flex">
      <div className="d-flex">
        {device.brands.map((brand) => (
          <Card
            style={{ cursor: 'pointer' }}
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? 'primary' : ''}
            className="p-3 ms-2"
            key={brand.id}
          >
            {brand.name}
          </Card>
        ))}
      </div>
    </Row>
  )
})

export default BrandBar
