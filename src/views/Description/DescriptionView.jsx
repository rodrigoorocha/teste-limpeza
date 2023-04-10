import { Grid, Image, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import piso from "../../assets/77578021_l.jpg"
import hero from "../../assets/mockup-com-capa.png"

function DescriptionView() {
    return (

        <div style={{position :"relative", display: "flex", justifyContent: "center", alignItems: "center"}}>

          


            <Grid gutter={0} style={{}}>

                <Grid.Col bg={"#004C98"} c={"white"} span={6}>

                    <Stack mt={50} ml={84} maw={537}>

                        <Title >O que é?</Title>
                        <Text>
                            Detergente desincrustante pós obra.
                            Indicado para limpeza pesada das sujidades do pós-obra, principalmente de resíduos como: excesso de rejunte, argamassa, cimento, gesso, terra e respingos de tinta*.
                            *Somente respingos recentes de tintas à base de água
                        </Text>

                        <Title>Indicação de uso</Title>
                        <Text>
                            Ideal para uso em superfícies laváveis e em pisos de porcelanato, cerâmicos, cotto/lajotas, cimentícios, granito, granilite, pastilhas, azulejos, antiderrapantes e pedras porosas, equipamentos como betoneiras e também materiais usados em uma reforma ou construção.

                        </Text>

                        <Title>Tipos de superfícies que podem ser tratadas:</Title>
                        <Text>
                            Devido a versatilidade do produto, ele pode ser utilizado em todo tipo de piso lavável. Para pisos que possuem acabamento com brilho, o ideal é utilizar a diluição de limpeza leve e aplicar em pequenas partes por vez, para que o produto não seque sobre o piso.

                        </Text>

                    </Stack>

                </Grid.Col>

                <Grid.Col span={6}>
                    <Image src={piso} fit='contain' />
                </Grid.Col>


            </Grid>

            <div style={{position :"absolute"}}>
                <Image style={{height: "900px" , marginLeft: "103px"}} src={hero}></Image>
            </div>

        </div>



    )
}

export default DescriptionView