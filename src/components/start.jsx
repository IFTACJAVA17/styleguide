import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, Row, Col } from 'reactstrap';

import './start.scss';

export default class Start extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col sm="6">
                        <Card className='card-body left' body>
                        <CardTitle>IG Styleguide</CardTitle>
                        <Link to='/style'><Button className='btn-default'>Vidare</Button></Link>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card className='card-body right' body>
                        <CardTitle>Admin Styleguide</CardTitle>
                        <Link to='/admin'><Button className='btn-default'>Vidare</Button></Link>
                        </Card>
                    </Col>
                 </Row>
            </div>
        )
    }

}
