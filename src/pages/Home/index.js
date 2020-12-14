import React from 'react';
import { Row, Col, Button, Input } from 'reactstrap';
import BestDeals from './BestDeals';
import TopSelling from './TopSelling';
import { toggleAddToCart } from '../../redux/actions/popupAction';
import { useDispatch } from 'react-redux'
import AdsComponent from './AdsComponent';
import PlaystoreImg from "../../assets/images/icons/playstore.png"
import AppstoreImg from "../../assets/images/icons/appstore.png"
function Home(props) {
    const dispatch = useDispatch()
    let shoModal = () => {
        dispatch(toggleAddToCart())
    }
    return (
        <>
            <Row>
                <Col sm="12">
                    <AdsComponent toggleAddToCart={shoModal} />
                </Col>
            </Row>
            <Row>
                <Col sm="12">
                    <BestDeals toggleAddToCart={shoModal} header="Best Deals" link={{ text: "All Products", to: "/products" }} data={[]} />
                </Col>
            </Row>
            <hr />
            <Row>
                <div className="col-6">
                    <div className="ordering-sales px-md-5 px-3 py-3">
                        <h4>Ordering Sales Partner</h4>
                        <p className="text-white">Register now to become a Nutloop Ordering Sales Partner and enjoy high commission, bonuses, support, training etc. </p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="ordering px-md-5 px-3 py-3">
                        <h4>Ordering Sales Partner</h4>
                        <p className="text-white">Register now to become a Nutloop Ordering Sales Partner and enjoy high commission, bonuses, support, training etc. </p>
                    </div>
                </div>
            </Row>
            <hr />
            <TopSelling toggleAddToCart={shoModal} />

            <Row className="my-4  py-5">
                <Col md="6">
                    <h2>Download the App now.</h2>
                    <p className="text-justify">Experience a unique shopping experience like you have never had on the Nutloop app. On the app you can shop and share foodstuff with other users, you can chat with other users who you follow or people who follow you, you can also receive general or personalized notifications etc. Shop foodstuff directly from farmers and wholesalers at your convenience. Download the app and enjoy discounts on your food and grocery shopping. Available on android and iOs.</p>
                    <a><img className="mr-3" width="150" src={PlaystoreImg} /></a>
                    <a><img width="150" src={AppstoreImg} /></a>
                </Col>
                <Col md="6">
                    <h3>New to Nutloop?</h3>
                    <p>Subscribe to out Newsletter to get updates on our latest offers</p>
                    <div className="search-div d-flex ">

                        <Input type="email" placeholder="Enter Your Email Address" />
                        <Button color="warning" className="text-white">
                            Subscribe
                        </Button>
                    </div>
                </Col>
            </Row>
            <hr className="mb-2" />

        </>
    );
}

export default Home;