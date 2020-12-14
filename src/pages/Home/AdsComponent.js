import React from 'react'
import { Link } from "react-router-dom"
import CarouselSlide from 'react-multi-carousel';
import TomatoesImg from "../../assets/images/icons/ic_tomatoes.png"
import { Button, Row, Col } from 'reactstrap';
import { useDispatch } from "react-redux"
import { setCartItem } from '../../redux/actions/cartActions'
import MultiCaroucel from '../../components/common/MultiCarousel';

export default function AdsComponent(props) {

    return (
        <MultiCaroucel autoPlay={true} responsive={{ desktop: 1, mobile: 1, tablet: 1 }}>
            <div className="product-div">
                <img 
                    // src={TomatoesImg}
                    src="https://images.unsplash.com/photo-1580750603266-cae8b4b9f72a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA5fHxmb29kJTIwc2hvcHBpbmclMjBiYW5uZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    height="300" />
            </div>

            <div className="product-div">
                <img 
                    // src={TomatoesImg}
                    src="https://images.unsplash.com/photo-1565365629311-dbaf45ae5913?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHNob3BwaW5nJTIwYmFubmVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    height="300" />
            </div>
        </MultiCaroucel>
    )
}
