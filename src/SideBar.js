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
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>catanacomics</strong>
                    <ion-icon name="pencil"></ion-icon>
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