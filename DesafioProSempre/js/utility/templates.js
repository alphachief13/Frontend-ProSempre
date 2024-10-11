// templates de string para replicar

const carroselEquipe = `
    <div class="profissional carousel-cell">
        <img src={imagem}> 
        <h3>{nome}</h3>
        <p>{profissao}</p>
        <p>{extraInfo}</p>
    </div>
`

const cardArtigo = `
    <div>
        <img class="artigo-item" src={imagem}>
        <p class="card-descricao">{descricao}</p>
    </div>
`

const cards = `
    <div class="item">
        <img src={imagem}>
        <p>{descricao}</p>
    </div>
`
export { cardArtigo, carroselEquipe, cards }
