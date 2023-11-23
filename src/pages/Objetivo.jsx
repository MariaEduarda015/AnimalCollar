import "./Objetivo.css"
import { Link } from "react-router-dom"

import obj1 from "../img/obj1.svg"
import obj2 from "../img/obj2.svg"
import mulher from "../img//mobile/womanPhoto.svg"
import bgTexto from "../img/mobile/bgTextoDois.svg"
import dog from "../img/mobile/dogBandana.svg"

import logo from "../img/logo.svg"

function Objetivo() {
    return (
        <>
            <section className="MobileObjetivo">
                <main className="objective">
                    <div>
                        <p className="firstM">
                            Programada por sistema arduino a Animal Collar tem como objetivo principal auxiliar na vida cotidiana de cachorros com deficiência visual e seus nossos, ultilizando leves vibrações que vão auxiliar o cão para não se chocar contra obstáculos
                        </p>

                        <img src={mulher} alt="" className="firstImg"/>
                    </div>

                    <div>
                        <p className="secondM">
                            Para melhor experiência com nosso equipamento aconselhamos que se animal passe por um simples treinamento de três etapas
                        </p>
                        <img src={bgTexto} alt="" className="secondIMG"/>
                        <button className="secondBt">TREINAMENTO</button>
                    </div>

                    <div className="thirdM">
                        <img src={dog} alt="" />
                        <div className="BibliografiaM"> 
                            <p>
                                Esse projeto foi uma mordenização da coleira BlinDog que usa o sensores ultrasônicos para alertar o animal 
                                de obstaculos a frente, diferente da BlinDog nossa coleira trás um sistema de QR code que mostra os dados de seu cão.
                            </p>
                            <Link to={"/equipamentos"}>EQUIPAMENTOS</Link>
                        </div>
                    </div>
                </main>
            </section>

           <main id="webObjetivo">
                <div className="web">
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


                <section className="objetivo">
                    <div className="objetivo-cima-conteudo">
                        <div className="obj-um-texto">
                            <p> Programada por sistema arduino a Animal Collar tem como objetivo principal auxiliar na vida cotidiana de cachorros com deficiência visual e seus nossos, ultilizando leves vibrações que vão auxiliar o cão para não se chocar contra obstáculos</p>
                        </div>
                        <div className="obj-um-img">
                            <img src={obj1} alt="" />
                        </div>
                    </div>

                    <div className="objetivo-cima-conteudo meio">
                        <div className="obj-dois-img ">
                            <img src={obj2} alt="" />
                        </div>

                        <div className="obj-um-texto texto-dois">
                            <p>Esse projeto foi uma mordenização da coleira BlinDog que usa o sensores ultrasônicos para alertar o animal de obstaculos a frente, diferente da BlinDog nossa coleira trás um sistema de QR code que mostra os dados de seu cão.</p>
                            <button>bibliografia</button>
                        </div>

                    </div>

                    <div className="objetivo-baixo-conteudo baixo">
                        <div className="obj-tres-texto">
                            <p>Para melhor experiência com nosso equipamento aconselhamos que se animal passe por um simples treinamento de três etapas</p>
                        </div>

                        <button>treinamento</button>
                        
                    </div>
                </section>
           </main>
        </>
    );
}

export default Objetivo;