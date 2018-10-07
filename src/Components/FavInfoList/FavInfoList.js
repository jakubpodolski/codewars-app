import React from 'react'
import { Panel, Button, Badge, Glyphicon } from 'react-bootstrap'
import './FavInfoList.css'

const FavInfoList = (props) => {
    
    const { username, honor } = props.user
    const deleteSpecificUser = props.deleteSpecificUser
    const showMoreInfo = props.showMoreInfo
    
    return (
        <Panel.Body >
            <div>
                <div className='favinfo-div'>
                    <img src={`https://robohash.org/${username}.png?size=80x80`} alt='img-placeholder' className='favinfo-img'/>
                </div>
                <div className='favinfo-div'>
                    <Button onClick={() => showMoreInfo(username)} bsStyle="link">
                        <strong>{ username }</strong>
                    </Button>
                    <Button onClick={() => deleteSpecificUser(username)}bsSize='xsmall'>
                        <Glyphicon glyph='glyphicon glyphicon-remove'/>
                    </Button>
                    <p> <Badge>Honor:</Badge> { honor } </p>
                </div>
            </div>
        </Panel.Body>
    )
}

export default FavInfoList