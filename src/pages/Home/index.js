import React from 'react';
import { Row, Col } from 'reactstrap';
import BestDeals from './BestDeals';
import TopSelling from './TopSelling';

function Home(props) {
    return (
        <>
            <Row>
                <Col sm="12">
                    <BestDeals />
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
            <TopSelling />
            <hr className="mb-2" />

        </>
    );
}

export default Home;