import React from 'react'
import { Link } from "react-router-dom"
import CarouselSlide from 'react-multi-carousel';
import TomatoesImg from "../../assets/images/icons/ic_tomatoes.png"
import { Button, Row, Col } from 'reactstrap';
import { useDispatch } from "react-redux"
import { setCartItem } from '../../redux/actions/cartActions'
import MultiCaroucel from '../../components/common/MultiCarousel';

export default function BestDeals(props) {
    const dispatch = useDispatch(null)

    let doAddToCart = (data) => {
        dispatch(setCartItem(data))
        props.toggleAddToCart()
    }
    return (
        <Row className="mt-4">
            <div className="col-6">
                <h6>{props.header}</h6>
            </div>
            <div className="col-6 text-right">
                <Link to={props.link.to} className="text-success small">{props.link.text}</Link>
            </div>
            <div className="col-12">
                <MultiCaroucel autoPlay={true}  responsive={{desktop: 6, mobile: 2, tablet: 4}}>

                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button onClick={() => doAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button onClick={() => doAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button onClick={() => doAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button onClick={() => doAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button onClick={() => doAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button onClick={() => doAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button onClick={() => doAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button onClick={() => doAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button onClick={() => doAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button onClick={() => doAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                    </div>
                </MultiCaroucel>
            </div>
        </Row>
    )
}
