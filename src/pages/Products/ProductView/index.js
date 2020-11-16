import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { setCartItem } from '../../../redux/actions/cartActions'
import TomatoesImg from "../../../assets/images/icons/ic_tomatoes.png"
import { toggleAddToCart } from '../../../redux/actions/popupAction'
import BestDeals from '../../Home/BestDeals'
export default function Productview() {
    const dispatch = useDispatch()
    let doToggleAddToCart = (data) => {
        dispatch(setCartItem({ name: 'tomatoes', image: TomatoesImg, price: 125 }))
        dispatch(toggleAddToCart())
    }
    return (
        <>
        <Row>
            <Col md="6">
                <div className="product-div">
                    <img src={TomatoesImg} />
                    <div className="p-3">
                    <div className="row">
                        <div className="col-6 text-left">
                            <p>Tomatoes</p>
                            <p className="small text-success">N125/kg</p>
                        </div>
                        <div className="col-6 text-right">
                            <Button onClick={doToggleAddToCart} color="success">Add to cart</Button>
                        </div>
                    </div>

                    <div>
                        <p>
                            Okras contain antioxidants, vitamin C and fiber.Fresh apples are one of the most important parts of a healthy diet.
                        </p>
                    </div>
                    </div>
                </div>
            </Col>
        </Row>

        <Row>
            <Col sm="12">
            <BestDeals toggleAddToCart={doToggleAddToCart} header="Similar Products" link={{text: null, to: null}} data={[]} />
            </Col>
        </Row>
        </>
    )
}
