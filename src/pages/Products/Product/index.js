import React from 'react'
import { Row, Col } from 'reactstrap'
import { withRouter } from "react-router-dom"
import ProductCategoryImg from '../../../assets/images/svg/icons/ic_product_category.svg'
import {useDispatch} from 'react-redux'
import { toggleAddToCart } from '../../../redux/actions/popupAction'
import ProductList from '../../../components/common/ProductList'


function Product() {
    const dispatch = useDispatch()
    let shoModal = ()=>{
            dispatch(toggleAddToCart())
    }
    return (
        <Row>
              <ProductList toggleAddToCart={shoModal}/>
        </Row>
    )
}
export default withRouter(Product)