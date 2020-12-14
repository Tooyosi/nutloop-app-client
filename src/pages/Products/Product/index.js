import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { withRouter } from "react-router-dom"
import ProductCategoryImg from '../../../assets/images/svg/icons/ic_product_category.svg'
import { useDispatch } from 'react-redux'
import { toggleAddToCart } from '../../../redux/actions/popupAction'
import ProductList from '../../../components/common/ProductList'
import { setCartItem } from '../../../redux/actions/cartActions'
import {Link} from "react-router-dom"
import BestDeals from '../../Home/BestDeals'

function Product() {
    const dispatch = useDispatch()
    let shoModal = (data) => {
        setCartItem(data)
        dispatch(toggleAddToCart())
    }
    return (
        <Row>
            <Col md="12">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/products" className="text-success"> All Products</Link></BreadcrumbItem>
                    <BreadcrumbItem active className="text-warning">Fruits</BreadcrumbItem>
                </Breadcrumb>
            </Col>
            <Col md="12">
                <ProductList toggleAddToCart={shoModal} />
            </Col>
            <Col sm="12">
            <BestDeals toggleAddToCart={shoModal} header="Recommended Products" link={{text: null, to: null}} data={[]} />
            </Col>
        </Row>
    )
}
export default withRouter(Product)