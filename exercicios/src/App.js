import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

/* import Primeiro from  './components/Primeiro'
import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax' 
import Aleatorio from './components/Aleatorio' 
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Pai from './components/direta/Pai'
import Pai from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar'
import ParImpar from './components/ParImpar'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'
import UsuarioLogado from './components/UsuarioLogado'
import ListaProdutos from './components/produtos/ListaProdutos'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import DigiteSeuNome from './components/DigiteSeuNome'
import FlexboxV1 from './components/layout/FlexboxV1'
import FlexboxV2 from './components/layout/FlexboxV2'
import FlexboxV3 from './components/layout/FlexboxV3'
import FlexboxV4 from './components/layout/FlexboxV4' */
import Mega from './components/mega/Mega'

/* function App(){
    return <Text>Primeiro Componente</Text>
} 

export defaul App*/

export default () => (
    <SafeAreaView style={style.App}>

        <Mega qtdeNumeros={7}/>

        {/* 
            <FlexboxV4/>      
            <FlexboxV3/>      
            <FlexboxV2/>      
            <FlexboxV1/>      
            <DigiteSeuNome/>
            <ListaProdutosV2/>
            <ListaProdutos/>
            <UsuarioLogado usuario={{nome: 'Sara', email:'sara@sasaki.com'}}/>
            <Familia>
                <Membro nome="Sara" sobrenome="Sassaki"/>
                <Membro nome="Heitor" sobrenome="Sassaki" />
            </Familia>

            <Familia>
                <Membro nome="Eikichi" sobrenome="Onizuka"/>
                <Membro nome="Souchirou" sobrenome="Nagi" />
            </Familia>
            <ParImpar num={3}/>
            <Diferenciar/>
            <ContadorV2/>
            <Pai/>
            <Pai/>
            <Contador inicial={21} passo={7}/>

            <Contador/>
            <Botao/>
            <Titulo principal="Cadastro Produto"
                secundario="Tela de Cadastro do Produto"/>
            <Aleatorio min={10} max={60}/>
            <Aleatorio min={10} max={60}/>
            <Aleatorio min={10} max={60}/>
            <Aleatorio min={10} max={60}/>
            <Aleatorio min={10} max={60}/>
            <Aleatorio min={10} max={60}/>

            <MinMax min="3" max="20" />
            <MinMax min={1} max={90} />
            <CompPadrao/>
            <Comp1/>
            <Comp2/>
            <Primeiro/> 
        */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})