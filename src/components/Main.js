import React, { useState, useEffect } from "react"
import styled from "styled-components"

// imagens
import downArrow from "../assets/downArrow.png"

const MainBox = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: fit-content;
`
const MainFloatingBlock = styled.div`
background-color: gray;
border-radius: 20px;
width: 85%;
height: 40em;
`
const TasksOptionBox = styled.div`
background-color: whitesmoke;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
margin: 10em 0 0 2em;
width: fit-content;
height: fit-content;
cursor: pointer;
`
const P = styled.p`
width: 15em;
font-size: 20px;
margin-top: 0.4em;
padding-bottom: 0.5em;
`
const PDownArrow = styled.img`
width: 5%;
`

// Options Modal Section
const OptionsBox = styled.div`
padding-bottom: 0.4em;
width: 100%;
height: fit-content;
`
const Options = styled.p`
margin: 0.4em 0 0 0.5em;
border-radius: 5px;
width: 80%;
cursor: pointer;

&:hover{
    border: solid 1px
}
`

export default function Main() {
    const [isOptionsOpen, setIsOptionsOpen] = useState(true)
    const [options] = useState([
        "Espaço = S ou H",
        "Tempo = t",
        "Velocidade = V",
        "Velocidade Inicial no Y = Viy",
        "Velocidade Inicial no X = Vx",
    ])
    const [operations, setOperations] = useState({
        S: false,
        t: false,
        V: false,
        Viy: false,
        Vx: false,
    })

    const optionsRender = () => {
        if (isOptionsOpen) {
            return options.map((item, id) => (
                <Options key={id} onClick={() => { showOperation(id) }}>{item}</Options>
            ))
        }
    }
    const showOperation = (id) => {
        console.log(id)
        if (id === 0) {
            setOperations({...operations, S : true})
        } else if (id === 1) {
            setOperations({...operations, t : true,})
        } else if (id === 2) {
            setOperations({...operations, V : true})
        } else if (id === 3) {
            setOperations({...operations, Viy : true})
        } else {
            setOperations({...operations,Vx : true})
        }
    }

    useEffect(() => {
    }, [])

    console.log(operations)
    return (
        <MainBox>
            <MainFloatingBlock>
                <TasksOptionBox
                    onClick={() => { setIsOptionsOpen(!isOptionsOpen) }}
                    onMouseLeave={() => { }}>
                    <P>O que você que descobrir? <PDownArrow src={downArrow} alt="uma seta apontada pra baixo" /> </P>
                    {isOptionsOpen &&
                        <OptionsBox>
                            {optionsRender()}
                        </OptionsBox>
                    }
                </TasksOptionBox>
            </MainFloatingBlock>
        </MainBox>
    )
}