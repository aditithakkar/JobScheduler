import React from 'react';
import style from '../stylesheets/appRows.scss'
import FaTrash from 'react-icons/lib/fa/trash';

export const ApplicationRows = React.createClass({
	
	render(){		
		var today=new Date();		
		return(		
				<div><div id="appl">
					<h3 id="title">{this.props.company} 
						<button id="trashButton" onClick={()=>this.props.deleteHandler(this.props.index, this.props.status)}>
							<FaTrash/>
						</button>
					</h3>
					{
						(this.props.status=="applied") ? 
						<h3> Applied On: {this.props.date.getMonth() + 1}/{this.props.date.getDate()}/{this.props.date.getFullYear()} <br/> ({Math.floor((today-this.props.date) / (24 * 60 * 60 * 1000))} <i>days back</i>)</h3>

						:(this.props.status=="scheduled") ?		
						(<h3>Interview On: {this.props.date.getMonth() + 1}/{this.props.date.getDate()}/{this.props.date.getFullYear()} <br/> ({Math.floor((this.props.date-today) / (24 * 60 * 60 * 1000))} <i>days to go</i>)</h3>) 

						: null
					}
					<h3>{this.props.notes}</h3>
				</div></div>							
			)
	}
})