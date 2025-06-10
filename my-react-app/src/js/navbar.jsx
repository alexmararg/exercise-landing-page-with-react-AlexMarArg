import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = props => {
	const redirectToWebSelection=(e)=>{
	if (e.target.innerText!=="Navbar"|| (e.target.innerText!=="Home")) window.location.href = window.location.origin +"/"+ e.target.innerText;
	window.location.href = window.location.origin;
	};
	return (
		<nav className="navbar navbar-expand-lg pb-2">
			<div className="container">
				<a className="navbar-brand" onClick={redirectToWebSelection}>Navbar</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto pt-2">
						<li className="nav-item active">
							<a className="nav-link" onClick={redirectToWebSelection}>Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" onClick={redirectToWebSelection}>About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" onClick={redirectToWebSelection}>Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" onClick={redirectToWebSelection}>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
