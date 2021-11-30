import { useNavigate } from 'react-router-dom'
import Navigation from "../../components/navbar"
import { Container, Row, Col, Image, Card } from "react-bootstrap"
import './listStay.css'

const HomeStay = () => {
    const navigate = useNavigate()
    const goToDetail = (id)=>{
        navigate(`/home-stay-details/${id}`)
    }
    return <>
            <Navigation/>
            <Container>
                <Row xs={1} md={4} className="g-4 mt-5">
                    {Array.from({ length: 12 }).map((_, idx) => (
                        <Col>
                            <Card className="cursor-pointer" onClick={()=>goToDetail(idx)}>
                                <Card.Img className="image-homestay" variant="bottom" src="https://media-cdn.tripadvisor.com/media/photo-s/11/cd/50/ef/kampoong-homestay-malang.jpg" />                            
                                <Card.Body>
                                    <Card.Title>Villa Malang</Card.Title>
                                    <Card.Text>
                                        Malang, Jawa Timut
                                    </Card.Text>
                                </Card.Body> 
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
}

export default HomeStay