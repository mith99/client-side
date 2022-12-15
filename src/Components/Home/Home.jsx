import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import '../Home/Home.scss'
import Context from '../../ContextAPI/Context'
import Delete from '../../Assets/delete-icon.svg'
import Edit from '../../Assets/edit-icon.svg'
import FillStar from '../../Assets/starred.svg'
import Star from '../../Assets/star.svg'
import SearchBar from '../SearchBar/SearchBar'
import DeleteModal from '../Delete/Delete'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Context.Consumer>
      {(context) => (
        <div>
          <SearchBar />
          <div className='title-cont'>
            <Row>
              <Col><div className='col-titles'>SKU</div></Col>
              <Col ><div className='col-titles'>IMAGE</div></Col>
              <Col xs="3"><div className='col-titles'>PRODUCT NAME</div></Col>
              <Col ><div className='col-titles'>PRICE</div></Col>
              <Col xs="1"><div className='col-titles'></div></Col>

            </Row>

            <Row>
              {context?.allProducts?.map((value) => {
                return (
                  <div>
                    <div className='dspl-flex prod-row'>

                      <Col ><div className='sku'>{value.sku}</div></Col>
                      <Col ><div className=''><img src='' alt='Image' /></div></Col>
                      <Col xs="3"><div className='prod-name'>{value.product_name}</div></Col>
                      <Col ><div className='prod-name'>$24.00</div></Col>
                      <Col xs="1">
                        <div className='dspl-flex'>

                          <div className='icons'>
                            <img src={Delete} 
                            onClick={()=>{
                              setIsOpen(true)
                            }}/>
                          </div>
                          <div className='icons'>
                            <img src={Edit}

                              onClick={() => {
                                context.getProduct(value._id)
                              }}

                            />
                          </div>
                          <div className='icons'>
                            <img src={Star} />
                          </div>

                        </div>
                      </Col>

                    </div>
                    <div className='line'></div>

                  </div>


                )
              })
              }
            </Row>

          </div>
          {/* <DeleteModal open={isOpen} setIsOpen={setIsOpen} /> */}

        </div>

      )}
    </Context.Consumer>
  )
}

export default Home