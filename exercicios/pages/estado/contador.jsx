import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador2() {

const [numero, setNumero] = useState(0)

const inc = () => setNumero(numero + 1)
const dec = () => setNumero(numero - 1)

    return (
        <div>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero} />
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
        </div>
    )
}
