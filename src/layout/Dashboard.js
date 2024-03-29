import React, { useState } from 'react'
import Sidebar from '../components/defaults/Sidebar'
import { AuthGuard } from '../routes/guards/AuthGuard'
import LoggedInGuard from '../routes/guards/LoggedInGuard'
import Main from "../components/common/Main"
import Wrapper from "../components/common/Wrapper"
import Navbar from '../components/defaults/Navbar'
import { Container, Form, Col, Row, Button, Input, ButtonGroup } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAddToCart } from '../redux/actions/popupAction'
import CustomModal from '../components/UI/Modal/CustomModal'
import Icofont from "react-icofont"
import { setCartItems } from '../redux/actions/cartActions'
import CartGuard from '../routes/guards/CartGuard'
import Footer from '../components/defaults/Footer'

const AddToCartForm = (props) => {
    let [number, setNumber] = useState(0)
    let [formState, setFormState] = useState(1)
    let dispatch = useDispatch(null)
    const state = useSelector(state => state)
    let buttonClick = ({ target: { id } }) => {
        switch (id) {
            case "increase":
                setNumber(number + 1)
                break;
            case "decrease":
                setNumber(parseInt(number) > 0 ? number - 1 : 0)
                break;
        }
    }

    let doAddToCart = (e) => {
        e.preventDefault()
        let newItem = {
            ...state.cart.cartItem.item,
            quantity: number
        }
        localStorage.setItem("cart", JSON.stringify([...state.cart.cartItems, newItem]))
        dispatch(setCartItems([...state.cart.cartItems, newItem]))
        setFormState(2)
    }

    let doCancel = () => {
        setFormState(1)
        setNumber(0)
        props.toggle()


    }
    return (
        <CustomModal
            modal={props.modal}
            // modal={true}
            keyboard={false}
            backdrop="static"
            classProp="modal-sm cart-modal"
            hideDismiss={true}
            toggle={props.toggle}>
            <>
                {formState == 1 ?
                    <Form onSubmit={doAddToCart}>
                        <Row>
                            <Col className="text-center" sm="12">
                                <p>Enter Quantity for <span className="text-success text-capitalize">{state.cart ?.cartItem ?.item ?.name}</span></p>
                                <div className="buttons my-3">
                                    <ButtonGroup>
                                        <Button onClick={buttonClick} id="decrease" type="button" className="btn-success">-</Button>
                                        <input type="number" min="0" value={number} onChange={({ target: { value } }) => setNumber(parseInt(value))} />
                                        <Button onClick={buttonClick} id="increase" type="button" className="btn-success">+</Button>
                                    </ButtonGroup>
                                    <p className="small my-2">You have selected: <span className="text-success ">{number}kg</span></p>
                                </div>

                                <Button color="success" className="btn-block text-white">Add to Cart</Button>
                                <Button onClick={doCancel} type="button" outline color="success" className="btn-block">Cancel</Button>
                            </Col>
                        </Row>
                    </Form>
                    :
                    <Row>
                        <Col className="text-center">
                            <p className="small">Product Added to cart</p>
                            <Icofont icon="check-circled" size="5" className="text-success " />

                            <Button onClick={doCancel} color="success" className="btn-block text-white my-3">Continue Shopping</Button>
                            <a href="/cart"  className="btn btn-outline-success btn-block">Proceed to Checkout</a>

                        </Col>
                    </Row>
                }
            </>
        </CustomModal>)
}
export default function Dashboard({ children }) {
    let [toggled, setToggled] = useState(false)
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const updateToggle = () => {
        setToggled(!toggled)
    }
    return (
        <AuthGuard>
            <CartGuard>
                <Wrapper>
                    {/* <Sidebar isToggled={toggled} /> */}
                    <Main>
                        <Navbar updateToggle={updateToggle} />
                        <div className="content">
                            <Container >
                                {children}
                            </Container>
                        </div>
                        <Footer />

                        <AddToCartForm toggle={() => { dispatch(toggleAddToCart()) }} modal={state.popup.showAddToCart} />
                    </Main>
                </Wrapper>
            </CartGuard>
        </AuthGuard>
    )
}
