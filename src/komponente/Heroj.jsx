import React, {Component} from 'react';
import "./Heroj.css";
class Heroj extends Component{
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
				<div className="Heroj animated flipInX">
					<div className="Heroj_Ikonica" style={Ikonica_Style}></div>
					
					<div className="Heroj_Profil">{this.props.name}
					<br/><br/>

					</div>
				</div>

			);
	}


}

export default Heroj;