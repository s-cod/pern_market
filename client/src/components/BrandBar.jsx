import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'

import { Context } from '../index'
const BrandBar = observer(() => {
  const { devices } = useContext(Context)
  return (
    <Row className="d-flex">
      <div className="d-flex">
        {devices.brands.map((brand) => (
          <Card
            style={{ cursor: 'pointer' }}
            onClick={() => devices.setSelectedBrand(brand)}
            border={brand.id === devices.selectedBrand.id ? 'primary' : ''}
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
