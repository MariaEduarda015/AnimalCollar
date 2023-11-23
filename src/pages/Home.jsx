import { Link } from "react-router-dom"
import "./Home.css"


import logo from "../img/logo.svg"
import cachorroHome from "../img/cachorro-home.svg"
import video from "../img/video.svg"

import logoMobile from "../img/mobile/logoM.svg"
import cachorro from "../img/mobile/cachorroHome.svg"

import { useState } from "react";
import { List, X } from "@phosphor-icons/react"

function Home() {
    const [abrirFechar, setAbrirFechar] = useState(false)

    function handleAbrirFecharMenu() {
        if(abrirFechar) {
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

    return (
        <>
            <section className="MobileHome">
                <header>
                    <div className="MobileHomeHeader">
                        <img src={logoMobile} alt="" />

                        <div className="botao-menu">
                            <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={32} color="#fff" /> : <List size={32} color="#fff"/> }</button>
                        </div>
                    </div>

                    <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                        <nav>
                            <Link to={"/objetivo"}>Objetivo</Link>
                            <Link to={"/treinamento"}>Treinamento</Link>
                            <Link to={"/equipamentos"}>Equipamentos</Link>
                        </nav>
                    </div>
                </header>

                <div className="initial">
                    <h1>Coleiras inteligentes para cachorros cegos</h1>
                    <p>O avanço da tecnologia chegou até as coleiras do seu pet. Isso mesmo, hoje você já pode ajudar seu pet com coleiras inteligentes.</p>

                    <img src={cachorro} alt="" />

                    <div>
                        <a href="#mac">Sobre o projeto</a>
                    </div>
                </div>

                <div className="mac" id="mac">
                    <a 
                    target = "_blank" 
                    href="https://youtube.com/shorts/gAX2AnMskAk?si=V_KFrVqOcDuvzNl4" rel="noreferrer">
                        <img src={video} alt="" />
                    </a>    
                </div>
            </section>
    
            <section className="WebHome">
                <div className="headerHome">
                    <div className="headerWebHome">
                        <nav className="navegacaoHome">
                            <img src={logo} alt="logo" />
                            <ul className="nav-menu">
                                <li><a href="#qr-code" className="nav-link">Vídeo</a></li>
                                <li className="nav-item"><Link to={"/Objetivo"} className="nav-link">Objetivo</Link></li>
                                <li className="nav-item"><Link to={"/Treinamento"} className="nav-link">Adaptação</Link></li>
                                <li className="nav-item"><Link to={"/Equipamentos"} className="nav-link">Equipamentos</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="main">
                    <section className="home">
                        <div className="texto-home">
                            <div className="h1-home">
                                <h1>Coleiras inteligentes para cachorros cegos</h1>
                            </div>
                            <div className="p-home">
                                <p>O avanço da tecnologia chegou até as coleiras do seu pet. Isso mesmo, hoje você já pode ajudar seu pet com coleiras inteligentes.</p>
                            </div>
                            <div className="buttonA"> 
                                <a href="#qr-code">Sobre o projeto</a>
                            </div>
                            {/* <div className="contato-icones">
                                <a href="" target="_blank"><i className='bx bxl-facebook'></i></a>
                                <a href="" target="_blank"><i className='bx bxl-instagram'></i></a>
                                <a href="" target="_blank"><i className='bx bxl-twitter'></i></a>  
                            </div> */}
                        </div>
                        <div className="img-home">
                            <img src={cachorroHome} alt="Imagem do cachorro" className="cachorro dog" />
                        </div>
                    </section>

                    <section className="QR-code" id="qr-code">
                        <a 
                        target = "_blank" 
                        href="https://youtube.com/shorts/gAX2AnMskAk?si=V_KFrVqOcDuvzNl4" rel="noreferrer">
                            <img src={video} alt="" />
                        </a>
                    </section>
                </div>
            </section>
        </>

    );
}

export default Home;