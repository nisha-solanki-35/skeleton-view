import React from 'react'
import PropTypes from 'prop-types';
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';

const DataCard = ({posts, limit, handleOnClick, loading, startLimit}) => {
    // console.log("data", limit);
    return (
        <Container>
            <Row>
                {posts.slice(limit.start, limit.end).map((data, index)=>(
                    loading && index>=startLimit ? <Col key={index} sm="4">
                    <Card>
                        <CardBody>
                            <Skeleton height={40} />
                            <Skeleton height={200} />
                        </CardBody>
                    </Card>
                </Col>:
                <Col key={index} sm="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h4">{data.title}</CardTitle>
                            <CardText>{data.body}</CardText>
                        </CardBody>
                    </Card>
                </Col>
                ))}
            </Row>
            <Button onClick={()=> handleOnClick(limit.end)}>Show More</Button>
        </Container>
    )
}

DataCard.propTypes = {
    posts : PropTypes.arrayOf(PropTypes.object),
    limit : PropTypes.object,
    handleOnClick : PropTypes.func,
    loading : PropTypes.bool,
    startLimit : PropTypes.number
}

export default DataCard