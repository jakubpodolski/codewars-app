import React, { Component } from 'react'
import { fetchData } from '../../Components/Helper'
import FavInfoList from '../../Components/FavInfoList/FavInfoList'
import Loading from '../../Components/Loading/Loading'
import { Panel, Grid, Col } from 'react-bootstrap'
import './FavoriteUsers.css'

class FavoriteUsers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            data: [],
            loading: true
        }
        const promises = this.props.favUsers.map(user => fetchData(user).then(response=> response.json()));
        Promise.all(promises)
        .then(data => {
            this.setState({
                data: data,
                loading: false
            })
        })    
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.favUsers !== this.props.favUsers){
            this.setState({loading:true})
            Promise.all(nextProps.favUsers.map(user => fetchData(user).then(response => response.json())))
            .then(data => {
                this.setState({
                    data: data,
                    loading: false
                })
            })  
        }
    }

    render() {
        if (this.state.loading) return <Loading />
        return (
        <div className='favorite-wrapper'>
            <Grid>
                <Col xs={8} xsOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
                    <Panel className='favorite-panel'>
                        <Panel.Heading>
                            <strong> Favorites</strong>
                        </Panel.Heading>
                        {this.state.data.map(user=> <FavInfoList key={user.name}
                                                                user={user}
                                                                deleteSpecificUser={this.props.deleteSpecificUser}
                                                                showMoreInfo={this.props.showMoreInfo} />)}
                    </Panel>
                </Col>
            </Grid>
        </div>            
        )
    }
}
export default FavoriteUsers