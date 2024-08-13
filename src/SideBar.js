import React from 'react'
import Suggestion from "./Suggestion"

export default function App() {
    return (
        <div class="sidebar">
            <Usuario />
            <Suggestion />
            <Suporte />
        </div>
    )
}

function Usuario() {
    const [imagem, setImagem] = React.useState("")
    const [nome, setNome] = React.useState("")

    function alterarnome() {
        const novonome = prompt("Digite seu novo nome!")
        setNome(novonome)
    }
    function alterarimagem() {
        const novaimagem = prompt("Digite o link de seu avatar!")
        setImagem(novaimagem)
    }

    return (
        <div class="usuario">
            <img src={!imagem?"assets/img/catanacomics.svg":imagem} alt="imagem de perfil" onClick={alterarimagem} />
            <div class="texto">
                <span onClick={alterarnome}>
                    <strong>{!nome?"catanacomics":nome}</strong>
                    <ion-icon name="pencil" ></ion-icon>
                </span>
            </div>
        </div>
    )
}

function Suporte() {
    return (
        <>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </>
    )
}