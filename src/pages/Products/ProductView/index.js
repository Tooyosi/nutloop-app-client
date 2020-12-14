import React, {useState} from 'react'
import { Row, Col, Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { setCartItem } from '../../../redux/actions/cartActions'
import TomatoesImg from "../../../assets/images/icons/ic_tomatoes.png"
import { toggleAddToCart } from '../../../redux/actions/popupAction'
import BestDeals from '../../Home/BestDeals'
import { updateObject } from '../../../redux/utility'
export default function Productview() {
    const dispatch = useDispatch()
    let doToggleAddToCart = (data) => {
        dispatch(setCartItem({ name: 'tomatoes', image: TomatoesImg, price: 125 }))
        dispatch(toggleAddToCart())
    }
    let initialState = {
        imgArray: [TomatoesImg, TomatoesImg],
        selectedImg: 0
    }
    const [state, setstate] = useState(initialState)

    let changeState = (val)=>{
        setstate(updateObject(state, val))
    }

    let updateState = (e)=>{

    }
    return (
        <>
            <Row className="mt-5">
                <Col md="6">
                    <div className="product-div">
                        <img src={TomatoesImg} />
                    <div className="smaller-img">
                        {state.imgArray.map((img, i)=>(
                            <img onClick={()=> changeState({selectedImg: i})} key={i} className={`mr-3 ${state.selectedImg == i? 'active' : ''} cursor-pointer`} src={img} />
                        ))}
                    </div>
                    </div>
                </Col>
                <Col md="6">
                    <div>
                        <h4>Tomatoes (N125/kg)</h4>
                        <div className="my-3">
                            <Button className="rounded-pill text-white" onClick={doToggleAddToCart} color="success">Add to cart</Button>
                        </div>
                        <p>
                            Okras contain antioxidants, vitamin C and fiber.Fresh apples are one of the most important parts of a healthy diet.
                            Okras contain antioxidants, vitamin C and fiber.Fresh apples are one of the most important parts of a healthy diet.
                            Okras contain antioxidants, vitamin C and fiber.Fresh apples are one of the most important parts of a healthy diet.
                            Okras contain antioxidants, vitamin C and fiber.Fresh apples are one of the most important parts of a healthy diet.
                            Okras contain antioxidants, vitamin C and fiber.Fresh apples are one of the most important parts of a healthy diet.
                            Okras contain antioxidants, vitamin C and fiber.Fresh apples are one of the most important parts of a healthy diet.
                        </p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm="12">
                    <BestDeals toggleAddToCart={doToggleAddToCart} header="Similar Products" link={{ text: null, to: null }} data={[]} />
                </Col>
            </Row>
        </>
    )
}
