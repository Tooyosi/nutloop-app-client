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

const AddToCartForm = (props) => {
    let [number, setNumber] = useState(0)

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
    return (
        <CustomModal
            modal={props.modal}
            classProp="modal-sm cart-modal"
            hideDismiss={true}
            toggle={props.toggle}>
            <Form>
                <Row>
                    <Col className="text-center" sm="12">
                        <p>Enter Quantity for <span className="text-success">Apple</span></p>
                        <div className="buttons my-3">
                            <ButtonGroup>
                                <Button onClick={buttonClick} id="increase" type="button" className="btn-success">+</Button>
                                <input type="number" min="0" value={number} onChange={({ target: { value } }) => setNumber(parseInt(value))} />

                                <Button onClick={buttonClick} id="decrease" type="button" className="btn-success">-</Button>
                            </ButtonGroup>
                        </div>

                        <Button color="success" className="btn-block text-white">Add to Cart</Button>
                        <Button onClick={props.toggle} type="button" outline color="success" className="btn-block">Cancel</Button>
                    </Col>
                </Row>
            </Form>
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
            {/* <LoggedInGuard> */}
            <Wrapper>
                <Sidebar isToggled={toggled} />
                <Main>
                    <Navbar updateToggle={updateToggle} />
                    <Container fluid>
                        {children}
                    </Container>
                    {console.log({ state })}
                    <AddToCartForm toggle={()=> {dispatch(toggleAddToCart())}} modal={state.popup.showAddToCart} />
                </Main>
            </Wrapper>
            {/* </LoggedInGuard> */}
        </AuthGuard>
    )
}
