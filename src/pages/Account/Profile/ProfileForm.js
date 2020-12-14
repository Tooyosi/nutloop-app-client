import React from 'react'
import { Form, Input, Button } from 'reactstrap'

export default function ProfileForm() {
    return (
        <Form>
            <div className="small text-success floating-label">
                <Input type="text" placeholder="Firstname" />

                <label >
                    Firstname
        </label>
            </div>
            <div className="small text-success floating-label">
                <Input type="text" placeholder="Lastname" />

                <label >
                    Lastname
        </label>
            </div>
            <div className="small text-success floating-label">
                <Input type="number" placeholder="Phone Number" />

                <label >
                    Phone Number
        </label>
            </div>

            <div>
                <Button type="submit" color="success" className="btn-block text-white mt-3">Save Changes</Button>
            </div>
        </Form>

    )
}
