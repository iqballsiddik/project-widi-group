import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import style from './style.module.css';

export default function CardOrder() {
    return (
        <div>
            <Row>
                <Col sm="4">
                    <Card body>
                        <CardTitle className="d-flex justify-content-center">Order Sudah Dikirm</CardTitle>
                        <div className={style.totalOrderSend}>
                            50
                        </div>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle className="d-flex justify-content-center">Order Sudah Dibayar</CardTitle>
                        <div className={style.totalOrderSend}>
                            100
                        </div>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle className="d-flex justify-content-center">Order Pandding</CardTitle>
                        <div className={style.totalOrderSend}>
                            2444
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
