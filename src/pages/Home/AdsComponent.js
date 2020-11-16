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
        <MultiCaroucel responsive={{ desktop: 1, mobile: 1, tablet: 1 }}>
            <div className="product-div">
                <img src={TomatoesImg} height="170" />
            </div>
        </MultiCaroucel>
    )
}
