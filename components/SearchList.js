import React from 'react';
import { ApplicationRows } from './ApplicationRows.js'
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o';
import FaClockO from 'react-icons/lib/fa/clock-o';
import FaHourglass2 from 'react-icons/lib/fa/hourglass-2';
import style from '../stylesheets/applicationList.css';

export const SearchList = React.createClass({
	deleteHandler(i,status){
		this.props.deleteData(i,status);
	},
	render(){

		const applied=this.props.data.filter((data)=>data.status=="applied");
		const scheduled=this.props.data.filter((data)=>data.status=="scheduled");
		const pending=this.props.data.filter((data)=>data.status=="pending");

		return(
			<div>
			<div id="searchList">
			<button id="close" onClick={this.props.closeSearch}>Close</button>
				<div className="applications">
					<h2><FaCheckSquareO/> APPLIED</h2><hr/>
					{applied.map((data,i)=>						
							<ApplicationRows key={i} {...data} index={i} deleteHandler={this.deleteHandler} />					)}					
				</div>
				<div className="applications">
					<h2><FaClockO/> SCHEDULED</h2><hr/>	
					{scheduled.map((data,i)=>
						<ApplicationRows key={i}
										{...data}
										index={i} deleteHandler={this.deleteHandler} />
										)}
				</div>
				<div className="applications">				
					<h2><FaHourglass2/> NEED TO APPLY</h2><hr/>
					{pending.map((data,i)=>
						<ApplicationRows key={i}
										company={data.company}
										status={data.status}
										date={data.date}
										notes={data.notes} 
										index={i} deleteHandler={this.deleteHandler}/>
										)}
				</div>
			
			</div></div>
		)
	}
})

