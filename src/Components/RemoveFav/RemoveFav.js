import React from 'react'
import { Button } from 'react-bootstrap'
import './RemoveFav.css'

const RemoveFav = ({deleteAllUsers}) => {
    
    return (
        <div className='remove-button'>
            <Button onClick={() => deleteAllUsers()} bsSize='xsmall' bsStyle='danger'>Remove All Users </Button>
        </div>
    )
}

export default RemoveFav