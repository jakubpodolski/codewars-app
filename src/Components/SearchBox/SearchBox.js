import React from 'react'
import './SearchBox.css'

import { Form, FormControl, Button, Glyphicon, Grid, Col} from 'react-bootstrap'

const SearchBox = ({searchUser,handleSubmit}) => {
    return (
        <div className='searchbox-div' >
            <Grid>
                <Col xs={10} xsOffset={2} sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3} className='searchbox-col' >
                    <Form inline onSubmit={(event) => handleSubmit(event)}>       
                        <FormControl type='text'  onChange={(event) => searchUser(event)} placeholder='Enter username' bsSize='large' className='searchbox-input'/> 
                        
                        <Button type='submit' value='Submit' bsSize='large' bsStyle='primary' className='searchbox-button'>
                            <Glyphicon glyph='glyphicon glyphicon-search'/>
                        </Button>
                        
                    </Form>
                </Col>  
            </Grid>
        </div>
    )
}

export default SearchBox