import React from 'react'
import {Text} from 'react-native'

import Estilo from  './estilo'

export default ({min, max}) => {
    const delta = max - min +1
    const aleatorio = parseInt(Math.random() * delta) + min
    return (
        <Text style={Estilo.txtG}>
            O valor aleatório é {aleatorio}
        </Text>
    )
}

/* export default (props) => {
    props.min += 1000
    props.max += 2000
    const {min, max} = props
    
    const delta = max - min +1
    const aleatorio = parseInt(Math.random() * delta) + min
    return (
        <Text style={Estilo.txtG}>
            O valor aleatório é {aleatorio}
        </Text>
    )
} */