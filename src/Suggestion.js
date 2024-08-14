export default function App() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestão />
        </div>
    )
}

function Sugestão() {

    const itens = [
        {
            imagem: "assets/img/bad.vibes.memes.svg",
            nome: "bad.vibes.memes.svg",
            razao: "Segue você",
        },
        {
            imagem: "assets/img/chibirdart.svg",
            nome: "chibirdart",
            razao: "Segue você",
        },
        {
            imagem: "assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            razao: "Novo no Instagram",
        },
        {
            imagem: "assets/img/adorable_animals.svg",
            nome: "adorable_animals",
            razao: "Segue você",
        },
        {
            imagem: "assets/img/smallcutecats.svg",
            nome: "smallcutecats",
            razao: "Segue você",
        },
    ]

    return (
        itens.map((item) =>
            <div className="sugestao" key={item.nome}>
                <div className="usuario">
                    <img src={item.imagem} alt={item.nome} />
                    <div className="texto">
                        <div className="nome">{item.nome}</div>
                        <div className="razao">{item.razao}</div>
                    </div>
                </div>
                <div className="seguir">Seguir</div>
            </div >
        )
    )
}