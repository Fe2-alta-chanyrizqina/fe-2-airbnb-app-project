import { Container, Image, Row, Col, ListGroup } from "react-bootstrap";
import Navigation from "../../components/navbar";
import './homeDetails.css'

const HomeDetails = () =>{

    
        return  <>
                    <Navigation className=""/>
                    <Container className="mt-5 pt-5">
                        <h2 classnameName="title mt-5">Villa Malang</h2>
                        <p>4.32 (34 ulasan) - Malang, Jawa Timur</p>
                    </Container>   
                    <Container>
                        <Row className="">
                            <Col xs={1} md={6}>
                            <Image src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg" width="100%"></Image>
                            </Col>
                            <Col xs={1} md={3}>
                                <Row>
                                    <Image src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg" width="100%"></Image>
                                </Row>
                                <Row className="pt-3">
                                    <Image src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg" width="100%"></Image>
                                </Row>                                
                            </Col>
                            <Col xs={1} md={3}>
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
                            <Col md={6}>
                                <h3>Villa Malang. Tuan Rumah: Rudi</h3>
                                <h6>2 tamu - 1 kamar tidur - 1 tempat tidur - 1 kamar mandi</h6>
                                <hr />
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-5 mb-5">
                            <Col md={6}>
                                <h3>Kamar Anda</h3>
                                <ListGroup horizontal>
                                    <ListGroup.Item>
                                        <h5><b>Kamar Tidur</b></h5>
                                        <h5>1 Tempat Tidur Ganda</h5>
                                    </ListGroup.Item>
                                </ListGroup>
                                
                                <hr />
                            </Col>
                            <Col></Col>
                        </Row>
                            
                        <Row>
                            <h3>Fasilitas Yang Ditawarkan</h3>
                            <Col md={6}>
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
                    </Container>

                </>
}

export default HomeDetails