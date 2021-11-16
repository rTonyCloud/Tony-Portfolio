import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import qtum from '../../assets/projects/qtum.png'
import api from '../../assets/projects/api-quiz.png'
import books from '../../assets/projects/books.png'
import music from '../../assets/projects/music.png'
import readlips from '../../assets/projects/readlips.png'
import tracker from '../../assets/projects/tracker.png'



const Projects = () => {
    return (
        <div>
            <section>
                    <Row xs={1} md={2} className="g-4">
 
                            <Col>
                            <Card>
                                <Card.Img variant="" src={qtum} />
                                <Card.Body>
                                <Card.Title>Qtum Halvening</Card.Title>
                                <Card.Text>
                                    <p>A countdown timer for Qtum Block halving reward.</p>
                                    <a href="https://github.com/qtumproject/halvingcountdown" className="hover:bg-blue-400 rounded-full p-2 hover:text-white md:text-2xl lg:text-3xl border-blue-400" id="qtum">
                                        Visit Repo
                                    </a>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>

                            <Col>
                            <Card>
                                <Card.Img variant="top" src={music} />
                                <Card.Body>
                                <Card.Title>Music World</Card.Title>
                                <Card.Text>
                                <p>A musical store that sales music products and equipment.</p>
                                <a href="https://github.com/rTonyCloud/music-world-ecommerce" className="hover:bg-blue-400 rounded-full p-2 hover:text-white md:text-2xl lg:text-3xl border-blue-400" id="qtum">
                                        Visit Repo
                                    </a>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>

                            <Col>
                            <Card>
                                <Card.Img variant="top" src={tracker} />
                                <Card.Body>
                                <Card.Title>Employee tracker</Card.Title>
                                <Card.Text>
                                <p>Employee tracker that stores information based on a company, employee, department and salary.</p>
                                <a href="https://github.com/rTonyCloud/Mysql-Employee-Tracker" className="hover:bg-blue-400 rounded-full p-2 hover:text-white md:text-2xl lg:text-3xl border-blue-400" id="qtum">
                                        Visit Repo
                                    </a>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>

                            <Col>
                            <Card>
                                <Card.Img variant="top" src={books}/>
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                <p>A countdown timer for Qtum Block halving reward.</p>
                                <a href="https://github.com/rTonyCloud/Mern-Book-Search" className="hover:bg-blue-400 rounded-full p-2 hover:text-white md:text-2xl lg:text-3xl border-blue-400" id="qtum">
                                        Visit Repo
                                    </a>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>

                            <Col>
                            <Card>
                                <Card.Img variant="top" src={readlips} />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                <p>A countdown timer for Qtum Block halving reward.</p>
                                <a href="https://github.com/rTonyCloud/Read-My-Lips" className="hover:bg-blue-400 rounded-full p-2 hover:text-white md:text-2xl lg:text-3xl border-blue-400" id="qtum">
                                        Visit Repo
                                    </a>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>

                            <Col>
                            <Card>
                                <Card.Img variant="top" src={api} />
                                <Card.Body>
                                <Card.Title>Code quiz</Card.Title>
                                <Card.Text>
                                    <p>A code quiz I created.</p>
                                    <a href="https://github.com/rTonyCloud/web-quiz" className="hover:bg-blue-400 rounded-full p-2 hover:text-white md:text-2xl lg:text-3xl border-blue-400" id="qtum">
                                        Visit Repo
                                    </a>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                    </Row>
            </section>
        </div>
    )
}

export default Projects