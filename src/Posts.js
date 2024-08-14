import React from 'react'

export default function Posts() {
    return (
        <div className="posts">
            <Post />
        </div>
    )
}

function Post() {

    const itens = [
        {
            imgperfil: "assets/img/meowed.svg",
            nomeperfil: "meowed",
            imagem: "assets/img/gato-telefone.svg",
            curtidas: 101503
        },
        {
            imgperfil: "assets/img/barked.svg",
            nomeperfil: "barked",
            imagem: "assets/img/dog.svg",
            curtidas: 98351
        },
        {
            imgperfil: "assets/img/filomoderna.svg",
            nomeperfil: "filomoderna",
            imagem: "assets/img/mindmap.jpg",
            curtidas: 49999
        },
    ]

    return (
        itens.map((item) =>
            <div className="post" key={item.imagem}>
                <Topo imgperfil={item.imgperfil} nomeperfil={item.nomeperfil} />

                <Fundo imagem={item.imagem} nomeperfil={item.nomeperfil} curtidas={item.curtidas} />
            </div >
        )
    )
}

function Topo(props) {
    return (
        <div className="topo">
            <div className="usuario">
                <img src={props.imgperfil} alt={props.nomeperfil} />
                {props.nomeperfil}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Fundo(props) {

    const [curtir, setCurtir] = React.useState("heart-outline")
    
    let qtdcurtidas = 0
    curtir==="heart" ? qtdcurtidas = props.curtidas + 1 : qtdcurtidas = props.curtidas;

    return (
        <>
            <div className="conteudo">
                <img src={props.imagem} alt={props.nomeperfil} onClick={() => setCurtir("heart")} />
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon color={curtir} name={curtir} onClick={() => (curtir === "heart") ? setCurtir("heart-outline") : setCurtir("heart")}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <Salvar />
                </div>

                <div className="curtidas">
                    <img src="assets/img/respondeai.svg" alt="respondeai" />
                    <div className="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras {qtdcurtidas.toLocaleString("pt-br")} pessoas</strong>
                    </div>
                </div>
            </div>
        </>
    )
}

function Salvar() {
    const [salvo, setSalvo] = React.useState("bookmark-outline")

    return (
        <div onClick={() => (salvo === "bookmark") ? setSalvo("bookmark-outline") : setSalvo("bookmark")}>
            <ion-icon name={salvo}></ion-icon>
        </div>
    )
}