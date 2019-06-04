import React from 'react'
import Item from '../item'
import './style.css'
class Body extends React.Component{

    state = {
        data: []
    }

    
    componentDidUpdate(prevProps){
        const { searchWord, page } = this.props
        if(this.props !== prevProps){
            this.fetchingMovie(searchWord, page)
            .then( data => this.setState({ data }))
        }
    }
    
    fetchingMovie = async (item, page) => {
        const data = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${item}&page=${page}`)
        return data.json()
      }

    render(){
      if(this.state.data.length < 1){
        return <div className='error'>Поищите</div>
      }
        if(this.state.data.Error === 'Movie not found!'){
            return <div className='error'> {this.state.data.Error}</div>
        }
        if(this.state.data.Error ===  'Too many results.') {
            return <div className='error'>попробуйте еще раз</div>
        }
    
        return(
            <div className='body-container'>
                {this.state.data.Search && this.state.data.Search.map( (item, index) => <Item key={index} search={item}/>)}
            </div>
        )
    }
}
export default Body;