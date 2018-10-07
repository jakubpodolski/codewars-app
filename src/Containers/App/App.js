import React, {Component} from 'react'
import SearchBox from '../../Components/SearchBox/SearchBox'
import UserInfo from '../../Components/UserInfo/UserInfo'
import RemoveFav from '../../Components/RemoveFav/RemoveFav'
import Loading from '../../Components/Loading/Loading'
import FavoriteUsers from '../FavoriteUsers/FavoriteUsers'
import { fetchData } from '../../Components/Helper.js'
import { PageHeader } from 'react-bootstrap'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            user: [], 
            searchfield: '',
            favorite: Object.values(localStorage),
            status: 0,
            statusText: '',
            loading: false
        }
    }
    
    searchUser = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        this.setState({loading:true})
        fetchData(this.state.searchfield)
        .then(response=> this.setState({
            status: response.status,
            statusText: response.statusText,                
        }))
        event.preventDefault();
        this.fetchUser()
    }
    fetchUser = () => {
        fetchData(this.state.searchfield)
            .then(response=> response.json())
            .then(response => this.setState({
                user: response,
                loading: false
            }))
    }
    
    handleFavClick = () => {
        const user = this.state.user.username
        this.saveUser(user);
    }
    
    saveUser = (user) => {
        localStorage.setItem('fav'+ user, user)
        this.setState({favorite: Object.values(localStorage)})
    }

    deleteAllUsers = () => {
        localStorage.clear()
        this.setState({favorite: []})
    }

    deleteSpecificUser = (user) => {
        localStorage.removeItem('fav'+user)
        const filtered = this.state.favorite.filter(item => item !== user)
        this.setState({favorite: filtered})
    }

    showMoreInfo = (user) => {
        this.setState({loading: true})
        fetchData(user)
            .then(response => response.json())
            .then(response => this.setState({
                user: response,
                status: 200,
                loading: false
            }))
    }
    
    render() {

        return (
        <div>
            <PageHeader className='page-header'>CodeWars-App</PageHeader>
            
            <SearchBox
                searchUser = {this.searchUser}
                handleSubmit = {this.handleSubmit}/>
            
            {this.state.loading ? 
                <Loading /> : this.state.status === 200 ? (
                            <UserInfo 
                                user = {this.state.user}
                                handleFavClick = {this.handleFavClick}
                                favorite = {this.state.favorite}/>
                        ) : (
                            <p className='status-text'>{this.state.statusText}</p>
                        )}

            {this.state.favorite.length ?
                (<div>
                    <FavoriteUsers
                        favUsers = {this.state.favorite}
                        deleteSpecificUser = {this.deleteSpecificUser}
                        showMoreInfo = {this.showMoreInfo} /> 
                    <RemoveFav deleteAllUsers = {this.deleteAllUsers}/>
                </div>) : <div></div> }
        </div>
    )}
}
export default App