import React from 'react'
import { Button, Badge, Glyphicon, Col, Grid } from 'react-bootstrap'
import './UserInfo.css'
const UserInfo = (props) => {
    
    const {username,name,honor,clan,leaderboardPosition} = props.user
    const handleFavClick = props.handleFavClick
    const favorite = props.favorite
    return (
        <div className='userinfo-wraper'>
            <Grid>
                <Col sm={6} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
                    <div className='userinfo'>
                        
                        <div>
                            <img src={`https://robohash.org/${username}.png?size=300x300`}   alt='img-placeholder' className='userinfo-img' />
                        </div>
                        
                        <div  className='userinfo-info'>
                            <h2 className='userinfo-name'>
                                { username }
                                {favorite.includes(username) ? (
                                        <Button bsSize='large'>
                                            <Glyphicon glyph='glyphicon glyphicon-star' className='button-iconFaved'/>
                                        </Button>   
                                    ) : (
                                        <Button type="button" onClick={handleFavClick} bsSize='large' className='button-preFav' >
                                            <Glyphicon glyph='glyphicon glyphicon-star' className='button-iconFaved'/>
                                            <Glyphicon glyph='glyphicon glyphicon-star-empty' className='button-iconFav'/>
                                        </Button>
                                    )}
                            </h2>
                        
                            <Badge>Name:</Badge> <p>{name}</p>
                            <Badge>Honor:</Badge> <p>{honor}</p>
                            <Badge>Leaderboard position:</Badge> <p>{leaderboardPosition}</p>
                            <Badge>Clan: </Badge> <p>{clan}</p>
                        </div>
                    </div>
                </Col>
            </Grid>
        </div>
    )
}
export default UserInfo