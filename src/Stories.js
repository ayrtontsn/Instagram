export default function Stories() {
    return (
        <div className="stories">
            <Story />

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story() {
    const itens = [
        {
            imagem: "assets/img/9gag.svg",
            usuario: "9gag"
        },
        {
            imagem: "assets/img/meowed.svg",
            usuario: "meowed"
        },
        {
            imagem: "assets/img/barked.svg",
            usuario: "barked"
        },
        {
            imagem: "assets/img/nathanwpylestrangeplanet.svg",
            usuario: "nathanwpylestrangeplanet"
        },
        {
            imagem: "assets/img/wawawicomics.svg",
            usuario: "wawawicomics"
        },
        {
            imagem: "assets/img/respondeai.svg",
            usuario: "respondeai"
        },
        {
            imagem: "assets/img/filomoderna.svg",
            usuario: "filomoderna"
        },
        {
            imagem: "assets/img/memeriagourmet.svg",
            usuario: "memeriagourmet"
        },
    ]

    return (
        itens.map((item) =>
            <div className="story" key={item.usuario}>
                <div className="imagem">
                    <img src={item.imagem} alt={item.usuario} />
                </div>
                <div className="usuario">
                    {item.usuario}
                </div>
            </div>
        )
    )
}