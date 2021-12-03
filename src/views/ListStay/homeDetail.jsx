import { Container, Image, Row, Col, Card, ListGroup, Form, FloatingLabel, Button } from "react-bootstrap";
import Navigation from "../../components/navbar";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import './homeDetails.css'
import Footer from '../../components/footer'

const HomeDetails = () =>{
    const params = useParams()
    const navigate = useNavigate()
    const gotoPayment = ()=>{
        navigate(`/book/stays/${params.id}`)
    }

    // Check //
    const [showCheck, setShowCheck] = useState(true);
    const handleShowCheck = () => setShowReserve (false)
    // Reserve //
    const [showReserve, setShowReserve] = useState(false);
    const handleShowReserve = () => setShowReserve(true);

    const returnCheck =()=>{
        if(showCheck) {
            return  <>
                    
                    <Card show={showCheck} style={{ width: '100%', color: 'black'}}> 
                        <Card.Body>
                        <Card.Title>$36 / Malam</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            <Row className="g-2">
                                <Col md={6} sm={6} xs={6}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Check-in Date">
                                        <Form.Control type="date" placeholder="2021-12-01" />
                                    </FloatingLabel>
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                    <FloatingLabel controlId="floatingSelectGrid" label="Check-out Date">                                                
                                        <Form.Control type="date" placeholder="name@example.com" />
                                    </FloatingLabel>
                                </Col>
                                <Button onClick={()=>handleShowReserve()} variant="primary" type="submit" width="100%">Check Availability</Button>
                            </Row>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </>
        }
    }

   

    const returnReserve =()=>{
        // setShowCheck(false)
        if(showReserve){
            return  <>
                    <h5>Your room is still available !</h5>
                    <Card show={showReserve} style={{ width: '100%', color: 'black'}}>
                        <Card.Body>
                            <Card.Title>$36 / Malam</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                <Row className="g-3">
                                    <Col md={6} sm={6} xs={6}>
                                        <FloatingLabel controlId="floatingInputGrid" label="Check-in">
                                            <Form.Control type="date" placeholder="2021-12-01" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={6} sm={6} xs={6}>
                                        <FloatingLabel controlId="floatingSelectGrid" label="Check-out">                                                
                                            <Form.Control type="date" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>
                                    <Button onClick={()=>gotoPayment()} variant="primary" type="submit" width="100%">Reserve</Button>
                                </Row>
                                <Row>
                                    <Col md={12} className="mt-3">
                                        <Row>
                                            <Col > $36 X 2 malam</Col>
                                            <Col > $72</Col>
                                            <hr />
                                            <Col> <b>Total</b> </Col>
                                            <Col><b>$72</b> </Col>
                                        </Row>
                                    </Col>
                                </Row> 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </>
        }
    }

    
        return  <>
                    <Navigation className=""/>
                    <Container className="mt-5 pt-5">
                        <h2 classnameName="title mt-5">Villa Malang</h2>
                        <p>4.32 (34 ulasan) - Malang, Jawa Timur</p>
                    </Container>   
                    <Container>
                        <Row className="">
                            <Col xs={12} md={6} className="pb-3">
                            <Image src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg" width="100%"></Image>
                            </Col>
                            <Col xs={6} md={3}>
                                <Row>
                                    <Image src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg" width="100%"></Image>
                                </Row>
                                <Row className="pt-3">
                                    <Image src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg" width="100%"></Image>
                                </Row>                                
                            </Col>
                            <Col xs={6} md={3}>
                                <Row>
                                    <Image src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg" width="100%"></Image>
                                </Row>
                                <Row className="pt-3">
                                    <Image src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg" width="100%"></Image>
                                </Row>                                
                            </Col>                       
                        </Row>
                    </Container>
                    <Container className="mt-5">
                        <Row className="">
                            <Col md={7}>
                                <Row>
                                    <Col md={12}>
                                        <h3>Villa Malang. Tuan Rumah: Rudi</h3>
                                        <h6>2 tamu - 1 kamar tidur - 1 tempat tidur - 1 kamar mandi</h6>
                                        <hr />
                                    </Col>
                                </Row>
                                <Row className="mt-5 mb-5">
                                    <Col md={12}>
                                        <h3>Kamar Anda</h3>
                                        <ListGroup horizontal>
                                            <ListGroup.Item>
                                                <h5><b>Kamar Tidur</b></h5>
                                                <h5>1 Tempat Tidur Ganda</h5>
                                            </ListGroup.Item>
                                        </ListGroup>                                    
                                        <hr />
                                    </Col>
                                </Row>
                                <Row>
                                    <h3>Fasilitas Yang Ditawarkan</h3>
                                    <Col md={12}>
                                        <Row>
                                            <Col>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                                </ListGroup>
                                            </Col>
                                            <Col>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                                </ListGroup>                                    
                                            </Col>
                                        </Row>  
                                        <hr />                              
                                    </Col>                            
                                </Row>
                            </Col>
                            <Col md={5} xs={12} >
                                {returnCheck()}        
                                <br />                        
                                {/* availablity = true */ }
                                {returnReserve()}
                                

                            </Col>
                        </Row>                     
                    </Container>
                    <Footer/>

                </>
}

export default HomeDetails