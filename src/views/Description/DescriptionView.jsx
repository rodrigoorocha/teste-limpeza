import { Grid, Stack, Text, Title } from '@mantine/core'
import React from 'react'

function DescriptionView() {
    return (

        <Grid gutter={0}>

        <Grid.Col bg={"#004C98"} c={"white"} span={6}>

                <Stack mt={50} ml={84}>

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


        </Grid>

    )
}

export default DescriptionView