import translate from 'translate'

export const translateText = async text => {
    const translatedText = await translate(text, {
        to: 'es',
    })
    return translatedText
}
