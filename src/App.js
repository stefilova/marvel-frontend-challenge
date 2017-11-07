import React, { Component } from 'react';
import './App.css';
import {getChars} from './api/marvel-api';
import Lista from './komponente/Lista.jsx';
import Search from './komponente/Search.jsx';

const LIMIT = 20;
const naslov = "Marvel Heroes Cards"
const Footer = ({title}) => (<footer>{title}</footer>);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { heroes: [], offset: 0, selected:[] };
    this.searchCharacters = this.debounce(this.searchCharacters.bind(this), 200);

  }
  
  componentDidMount() {
    
  }

  debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  next() {
    this.searchCharacters(this.state.startsWith, Math.min(this.state.offset + LIMIT, this.state.total));
  }

  previous() {
    this.searchCharacters(this.state.startsWith, Math.max(this.state.offset - LIMIT, 0))
  }

  searchCharacters(startsWith, offset) {
    getChars(startsWith, offset).then(x => {
      this.setState({ startsWith: startsWith, heroes: x.results, total: x.total, offset: x.offset });
    });
  }




  render() {
     
     const {footer} = this.props;
    return (
      <div className="App">
     
       <div className="Naslov">{naslov}</div>
       <div>
        <Search onChange={this.searchCharacters.bind(this)} />
        <div className="App__SearchPagination">
            {(this.state.offset + LIMIT < this.state.total) ? <div className="App__PagButton" onClick={this.next.bind(this)}>Next</div> : ""}
            {(this.state.offset !== 0) ? <div className="App__PagButton" onClick={this.previous.bind(this)}>Previous</div> : ""}
          </div>
        </div>
        <Lista heroes={this.state.heroes} />
      
        <Footer title={footer}/>
    
    
       </div>
      
    );
  }
  handleSelection(index) {
    this.setState({
      selected: this.state.heroes
    });
  }

}

export default App;
