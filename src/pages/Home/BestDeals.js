import React from 'react'
import { Link } from "react-router-dom"
import CarouselSlide from 'react-multi-carousel';
import TomatoesImg from "../../assets/images/icons/ic_tomatoes.png"
import { Button, Row, Col } from 'reactstrap';
export default function BestDeals() {
    return (
        <Row className="mt-4">
            <div className="col-6">
                <h6>Best Deals</h6>
            </div>
            <div className="col-6 text-right">
                <Link className="text-success small">View All Products</Link>
            </div>
            <div className="col-12">
                <CarouselSlide
                    additionalTransfrom={0}
                    arrows={true}
                    // autoPlaySpeed={3000}
                    autoPlay={false}
                    centerMode={false}
                    containerClass="w-md-100 h-100"
                    // itemClass="w-100 h-100"
                    draggable={true}
                    focusOnSelect={false}
                    infinite
                    keyBoardControl={true}

                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 6,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 4,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable={true}
                >

                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button color="success">Add to cart</Button>
                    </div>
                    <div className="product-div">
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                        <Button color="success">Add to cart</Button>
                    </div>
                </CarouselSlide>
            </div>
        </Row>
    )
}
