import React, {Component} from 'react';
import Heroj from "./Heroj";

class Lista extends Component{

	render(){
		return(
				<div>
					{
						this.props.heroes.length > 0 ?
							this.props.heroes.map((hero) =>{
								return(
										<Heroj 
											key ={hero.id}
											name = {hero.name}
											series={hero.series.items}
                      					    stories={hero.stories.items}
                      					    comics={hero.comics.items}
                        					events={hero.events.items}
                        					description={hero.description}
                        					thumbnail={hero.thumbnail.path + "." + hero.thumbnail.extension}

										/>
									);
							})
							:
							<div style={{fontSize:25, color:"#ddd"}}>Heroj sa tim imenom ne postoji!</div>
					}
				</div>
			);
	}
}

export default Lista;