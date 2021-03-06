import styled from '@emotion/styled'

const Output = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Image = styled.img`
    display: block;
    width: 100%;
    max-width: 150px;
`

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

export default function Result({ result }) {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
        result

    return (
        <Output>
            <Image
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt='Criptomoneda'
            />
            <div>
                <Price>
                    El Precio es de: <span>{PRICE}</span>
                </Price>
                <Text>
                    Precio más alto del día: <span>{HIGHDAY}</span>
                </Text>
                <Text>
                    Precio más bajo del día: <span>{LOWDAY}</span>
                </Text>
                <Text>
                    Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
                </Text>
                <Text>
                    Última actualización: <span>{LASTUPDATE}</span>
                </Text>
            </div>
        </Output>
    )
}
