export default function lista() {
    return <span>{exibir(5)}</span>
}

function exibir(tamanho) {
    const lista = []
    for (let i = 0; i <= tamanho; i++) {
        lista.push(<span>{i},</span>)
    }
    return lista;
}