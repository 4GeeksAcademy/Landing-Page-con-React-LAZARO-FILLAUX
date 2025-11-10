import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./Navbar.jsx";
import Cajas from "./Cajas.jsx";
import Cajón from "./Cajón.jsx";
import Narbarbajo from "./Footer.jsx";


//create your first component
function Home() {
	return (
		<>
			<Navbar />
			<div className="container text-center">
				<div className="row align-items-start">
					<div className="col-12"><Cajón /></div>
				</div>
				<div className="row align-items-start">
					<Cajas />
					<Cajas />
					<Cajas />
				</div>
			</div>
			<Narbarbajo />
		</>

	);
};
export default Home;