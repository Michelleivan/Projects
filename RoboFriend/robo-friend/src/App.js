import React ,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBar from './SearchBar';


class App extends Component {
    constructor(){
    super()
        this.state={
        robots:robots,
        searchfield: ''  
        }
    }

    OnSearchChange = (event) =>{
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredRobo = this.state.robots.filter(robots => {
            return(
                robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            )
        });
         return (
        <>
        <div className='tc'>
            <SearchBar searchChange={this.OnSearchChange}/>
            <CardList robots = {filteredRobo} />
        </div>
        </>
        );
    }
}
export default App;