import React from 'react'
import CustomModal from '../../components/UI/Modal/CustomModal'
import FormsWrapper from "../../components/Forms/Formik"
import * as Yup from "yup"
import { Form, Row, Label, Input, Col, FormGroup, Button } from 'reactstrap'

export const validation = Yup.object().shape({
    address: Yup.string().required("Required"),

})
export default function AddressForm(props) {
    let { formControl, onChange } = props
    return (
        <CustomModal
            modal={props.modal}
            toggle={props.toggle}
            backdrop="static"
            classProp="modal-sm"
            keyboard={false}>

            <FormsWrapper
                values={formControl}
                handleSubmit={props.onSubmit}
                handleChange={onChange}
                validationSchema={validation}
            >
                {
                    props => {
                        const {
                            values,
                            touched,
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit } = props;
                        return (
                            <Form onChange={onChange}>
                                <Row>
                                    <Col md={12} className="mt-3">
                                        <h6>Enter Address Details</h6>
                                        <Label className="text-success  small">Full Address</Label>
                                        <Input
                                            type="textarea"
                                            placeholder="Enter Delivery Address"
                                            name="address"
                                            onBlur={handleBlur}
                                            value={values.firstname}
                                            invalid={errors.address && touched.address}
                                            onChange={handleChange} />
                                    </Col>
                                    <Col md={12} className="mt-3">
                                        <h6>Delivery Options</h6>

                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio2" />{' '}
                                                Set as default delivery address
            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio2" />{' '}
                                                Deliver once to this address
            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={12} className="mt-3">
                                        <Button color="success" className="btn-block text-white">Deliver to this Address</Button>
                                    </Col>
                                </Row>
                            </Form>
                        )
                    }
                }
            </FormsWrapper>
        </CustomModal>
    )
}
