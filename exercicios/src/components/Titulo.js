import React, {Fragment} from 'react'
import {View, Text} from 'react-native'
import Estilo from './estilo'

/* export default props => (
    <View>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </View>
) */

/* export default props => (
    <React.Fragment>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </React.Fragment>
) */

/* export default props => (
    <Fragment>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </Fragment>
) */

export default props => (
    <>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>
)