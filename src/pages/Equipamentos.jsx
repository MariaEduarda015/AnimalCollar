import sensor from "../img/sensor.svg"
import coleira from "../img/coleira.svg"
import placaNano from "../img/placa-nano.svg"
import bateria from "../img/bateria.svg"
import cabo from "../img/cabo.svg"
import carregador from "../img/carregador.svg"

import "./Equipamentos.css"
import { Link } from "react-router-dom"
import logo from "../img/logo.svg"

export function Equipamentos() {
  return(
    <>
        <div className="web other">
            <div className="header-Web">
                <nav className="NavegacaoHeader">
                    <Link to={"/"}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <ul className="nav-menu">
                        <li><Link to={"/#qr-code"} className="nav-linkHeader">Vídeo</Link></li>
                        <li className="nav-item"><Link to={"/Objetivo"} className="nav-linkHeader">Objetivo</Link></li>
                        <li className="nav-item"><Link to={"/Treinamento"} className="nav-linkHeader">Adaptação</Link></li>
                        <li className="nav-item"><Link to={"/Equipamentos"} className="nav-linkHeader">Equipamentos</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="equipamentos" id="equipamentos">

            <h1>Equipamentos utilizados</h1>
            
            <div className="equipamentos-conteudo">
                <div className="containers">
                    <div className="background-equipamentos">
                        <img src={sensor} alt="Imagem do sensor" />
                    </div>
                    <div className="texto-equipamentos">
                        <p>Sensor ultrassônico</p>
                        <span>HC-SR04</span>
                        <span>R$ 14,92</span>
                    </div>
                </div>

                <div className="containers">
                    <div className="background-equipamentos">
                        <img src={coleira} alt="Imagem da coleira" />
                    </div>
                    <div className="texto-equipamentos">
                        <p>Coleira com QR Code</p>
                        <span>R$ 32,24</span>
                    </div>
                </div>

                <div className="containers">
                    <div className="background-equipamentos">
                        <img src={placaNano} alt="Imagem da placa nano" />
                    </div>
                    <div className="texto-equipamentos">
                        <p>Placa Nano</p>
                        <span>Atmega328</span>
                        <span>Ch340</span>
                        <span>R$ 44,09</span>
                    </div>
                </div>

                <div className="containers">
                    <div className="background-equipamentos">
                        <img src={bateria} alt="Imagem da bateria" />
                    </div>
                    <div className="texto-equipamentos">
                        <p>Bateria 9v</p>
                        <span>250mah</span>
                        <span>R$ 33,49</span>
                    </div>
                </div>

                <div className="containers">
                    <div className="background-equipamentos">
                        <img src={cabo} alt="Imagem do cabo" />
                    </div>
                    <div className="texto-equipamentos">
                        <p>Cabo USB 2.0</p>
                        <span>PC-USB1804</span>
                        <span>R$ 10,62</span>
                    </div>
                </div>

                <div className="containers">
                    <div className="background-equipamentos">
                        <img src={carregador} alt="Imagem do carregador" />
                    </div>
                    <div className="texto-equipamentos">
                        <p>Carregador de bateria</p>
                        <span>R$76,70</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}