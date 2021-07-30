import React from 'react';
const Alert = ({error}) => {
	

	
	
	return (
		error !== null && error.length !== 0 && 
			
			error.map((item, i) => (
				<>
				<div key={`alert-${i}`} style={{backgroundColor: 'blue', color: 'white', position: 'fixed', width: '100%', zIndex: 1, height: '2rem'}}>
{item.msg}
				</div>
				<div>
				<br />
				</div>
				</>))
			
			
		)
}

export default Alert;