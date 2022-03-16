import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

function Home(props) {
    const renderLink = (link) => {
        return (
            link.map(item => {
                return ( 
                <div key={item.id}>
                    <Card>
                        <Link to={item.link}>
                            <CardImg width='100%' src={item.image} alt={item.name}/>
                            <CardImgOverlay>
                                <CardTitle>{item.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
                )
            })
            
        )
    }

    const renderCard = (data) => {    
        return (
            data.map(obj => {
                return (
                    <Card>
                        <CardImg src={obj.image} alt={obj.name} />
                        <CardBody>
                            <CardTitle>{obj.name}</CardTitle>
                            <CardText>{obj.description}</CardText>
                        </CardBody>
                    </Card>
                )
            }
        ))
        
    }
    
    return (
        <div className="container"> 
            <div className='row'>   
                <div className='col'>
                    {renderLink(props.promotion)}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    {renderLink(props.links)}
                </div>
                <div className='col-md-6'>
                    <Card>
                        <CardBody>
                            {renderCard(props.partners)}
                        </CardBody>                        
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home