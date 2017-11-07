import React, {Component} from 'react';
import "./Heroj.css";
class Heroj extends Component{
	constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
        selected: false,
        
    };

  }

	render(){

		const Ikonica_Style = {
			width: 100,
			height: 100,
			backgroundImage: "url("+this.props.thumbnail+")",
			borderRadius: "50%",
			backgroundRadius: "50%",
			backgroundReapet: "no-repeat",
			backgroundSize: "100px 100px",
			marginTop: "10px",
			marginLeft: "5px",

		}
		

		return(
				<div className={`Heroj ${this.state.selected ? "selected" : ""}`}>
				<div className=" animated flipInX">
					<div className="Heroj_Ikonica" style={Ikonica_Style}></div>
					
					<div className="Heroj_Profil">{this.props.name}
					<button onClick={this.handleClick}>+</button>
					

					</div>
				</div>
				</div>
			);
	}
	handleClick() {
    if(this.props.onSelect) { 
        this.props.onSelect(this.props.key);
    }
    this.setState({
        selected: !this.state.selected
    });
    const info = {
    	ime : this.props.name,
    	slika : this.props.thumbnail
    }
    localStorage.setItem('foo', JSON.stringify({info})); 
    var niz = JSON.parse(localStorage.getItem('foo'));
    
    
    console.log(niz);

  }

}

export default Heroj;