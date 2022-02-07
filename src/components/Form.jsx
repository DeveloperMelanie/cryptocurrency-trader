import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectCurrency from '../hooks/useSelectCurrency'
import Error from './Error'

import { currencies } from '../data/currencies'

const InputSubmit = styled.input`
    background: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 30px;
    transition: background-color 0.3s ease;

    &:hover {
        background: #7a7dfe;
    }
`

export default function Form({ setCurrencies }) {
    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)

    const [currency, SelectCurrency] = useSelectCurrency(
        'Elige tu moneda',
        currencies
    )
    const [crypto, SelectCrypto] = useSelectCurrency(
        'Elige tu criptomoneda',
        cryptos
    )

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
            const response = await fetch(url)
            const result = await response.json()

            const arrayCryptos = result.Data.map(crypto => ({
                id: crypto.CoinInfo.Name,
                name: crypto.CoinInfo.FullName,
            }))
            setCryptos(arrayCryptos)
        }
        fetchAPI()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if ([currency, crypto].includes('')) {
            setError(true)
            return
        }

        setError(false)
        setCurrencies({ currency, crypto })
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form onSubmit={handleSubmit}>
                <SelectCurrency />
                <SelectCrypto />
                <InputSubmit type='submit' value='Cotizar' />
            </form>
        </>
    )
}
