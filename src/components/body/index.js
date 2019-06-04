import React from 'react'
import Item from '../item'
import './style.css'
class Body extends React.Component{

    state = {
        data: null
    }

    
    componentDidUpdate(prevProps){
        const { searchWord, page } = this.props
        if(this.props.page !== prevProps.page){
            this.setState({ data: []})
            this.fetchingMovie(searchWord, page)
            .then( data => this.setState({ data }))
        }
        if(this.props.searchWord !== prevProps.searchWord){
            this.fetchingMovie(searchWord, page)
            .then( data => this.setState({ data }))
        }
        
    }
    
    fetchingMovie = async (item, page) => {
        const data = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${item}&page=${page}`)
        return data.json()
      }

    render(){
        if(this.state.data === null) return <div className='error'> поищите </div>
        if(this.state.data.Error){
            return <div className='error'> {this.state.data.Error}</div>
        }
      if(!this.state.data.Search){
        return <div className='error'>loading </div>
      }
       
        return(
            <div className='body-container'>
                 <div className='request'>
                        <h3>
                            <span> Ваш запрос: { this.props.searchWord} </span>
                            <span> Найдено: { this.state.data.totalResults} </span>
                        </h3>
                </div>
                 <div className='items-container'>
                    {this.state.data.Search && this.state.data.Search.map( (item, index) => <Item key={index} search={item}/>)}
                </div>
            </div>
            
        )
    }
}
export default Body;