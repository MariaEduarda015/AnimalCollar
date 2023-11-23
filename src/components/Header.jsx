import { Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import voltar from "../img/voltar.svg"

import "./Header.css"


export function Header() {
  const [abrir_Fechar, setAbrir_Fechar] = useState(false)

    function handleAbrirFecharMenu() {
        if(abrir_Fechar) {
            setAbrir_Fechar(!abrir_Fechar)
            return
        }

        setAbrir_Fechar(true)
    }

  return(
    <header className="header">
      <div className="mobile">
        <div className="Nav">
            <button className="voltar-mobile">
                <img src={voltar} alt="" />
                <Link to={"/"}>
                    Voltar
                </Link>
            </button>

            <div className="botao-menu">
                <button onClick={handleAbrirFecharMenu}>{abrir_Fechar == true ? <X size={32} color="#fff" /> : <List size={32} color="#fff"/> }</button>
            </div>
        </div>

        <div className={`menuT ${abrir_Fechar == true ? "" : "closeT"}`}>
            <nav>
                <Link to={"/objetivo"} onClick={() => setAbrir_Fechar(false)}>Objetivo</Link>
                <Link to={"/treinamento"} onClick={() => setAbrir_Fechar(false)}>Treinamento</Link>
                <Link to={"/equipamentos"} onClick={() => setAbrir_Fechar(false)}>Equipamentos</Link>
            </nav>
        </div>
      </div>
      
    </header>
  )
}