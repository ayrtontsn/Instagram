export default function Posts() {
    return (
        <div class="posts">
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
        },
        {
            imgperfil: "assets/img/barked.svg",
            nomeperfil: "barked",
            imagem: "assets/img/dog.svg",
        },
        {
            imgperfil: "assets/img/filomoderna.svg",
            nomeperfil: "filomoderna",
            imagem: "assets/img/mindmap.jpg",
        },
    ]

    return (
        itens.map((item) =>
            <div class="post">
                <Topo imgperfil={item.imgperfil} nomeperfil={item.nomeperfil} />
                <div class="conteudo">
                    <img src={item.imagem} alt={item.nomeperfil}/>
                </div>
                <Fundo />
            </div >
        )
    )
}

function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imgperfil} alt={props.nomeperfil} />
                {props.nomeperfil}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Fundo() {

    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src="assets/img/respondeai.svg" alt="respondeai" />
                <div class="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
        </div>
    )
}