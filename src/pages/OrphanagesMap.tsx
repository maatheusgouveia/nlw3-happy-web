import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import mapMarkerLogo from "../images/map-marker.svg";

import "../styles/pages/Orphanages-map.css";

function OrphanagesMap() {
	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkerLogo} alt="Happy" />

					<h2>Escolha um, orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</header>

				<footer>
					<strong>Avaré</strong>
					<span>São Paulo</span>
				</footer>

				<Link to="" className="create-orphanage">
					<FiPlus size={32} color="#FFF" />
				</Link>
			</aside>

			<Map
				zoom={15}
				center={[-23.1052433, -48.9072906]}
				style={{ width: "100%", height: "100%" }}
			>
				{/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{z}.png" /> */}
				<TileLayer
					url={`https:api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{z}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
				/>
			</Map>
		</div>
	);
}

export default OrphanagesMap;
