import React from 'react'
import Header from '../header'
import Body from '../body'
import Pagination from '../pagination'
import './style.css'
class App extends React.Component{
    
    state = {
        searchWord: '',
        page: 1
    }

    toggleWord = (newWord) => {
        this.setState({ page: 1})
        this.setState({ searchWord: newWord})
    }

    togglePagination = (item) => {
        this.setState({ page: item})
    }


    render(){
        return(
            <div className='main'>
                <Header 
                    searchWord={this.state.searchWord} 
                    toggleWord={this.toggleWord}/>
                <Body  
                    searchWord={this.state.searchWord} 
                    page={this.state.page}/>

                {(this.state.searchWord !== '') ? <Pagination page={this.state.page} togglePagination={this.togglePagination}/> : null}
            </div>
        )
    }
}
export default App;