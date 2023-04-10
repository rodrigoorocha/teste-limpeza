import { BackgroundImage, Box, Button, Center, Container, Divider, Grid, Group, Image, Paper, Rating, Stack, Table, Text, Title } from '@mantine/core'
import galaoImg from '../../assets/mockup_super_pos_obra_principal_5l.png';
import selo1Img from '../../assets/selo_50_litros.png';
import selo2Img from '../../assets/selo_preço_litro.png';
import React from 'react'

function ProductCardView() {
  return (
    <Container size={1700}>
      <Grid mt={30}>
        <Grid.Col span={7}>
          <Group spacing={4}>
            <Stack w={122}>
              <Image radius="xl" src={galaoImg} alt="galao" />
              <Image radius="xl" src={galaoImg} alt="galao" />
              <Image radius="xl" src={galaoImg} alt="galao" />
              <Image radius="xl" src={galaoImg} alt="galao" />
              <Image radius="xl" src={galaoImg} alt="galao" />

            </Stack>

            <Box mx="auto">
              <BackgroundImage w={800} h={800} src={galaoImg} radius="xs"
              >
                <Grid justify='right'>
                  <Grid.Col span={2}>
                    <Stack>
                      <Image src={selo1Img} />
                      <Image src={selo2Img} />
                    </Stack>
                  </Grid.Col>
                </Grid>
              </BackgroundImage>
            </Box>


          </Group>



        </Grid.Col>


        <Grid.Col span={5}>
          <Stack align='center'>
            <h1>SUPER PÓS OBRA 5L - REMOVE SUJIDADES</h1>
            <Rating defaultValue={4} />
            <a><b>(45)Avaliações</b>.Avalie agora! </a>
            <Divider />
            <h1><b>R$75,00</b></h1>
            <a>em até 12x de R$ 7,19</a>
            <Group>
              <Group align='center'>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </Group>
              <Stack>
                <Button bg={"#59C00B"}>Comprar</Button>
                <Text c={"#59C00B"}>Aqui sua compra é 100% segura, compre com tranquilidade.</Text>
              </Stack>
            </Group>
            <Button bg={"#004C98"}>Vende e lucre</Button>
            <Divider />
            <Title order={4}>Frete e prazo de entrega</Title>

            <Group>
              <Text>13098-324 </Text>
              <Title order={5}>CALCULAR</Title>
            </Group>

            <Table>
              <thead>
                <tr>
                  <th>Frete</th>
                  <th>Valor</th>
                  <th>Prazo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CORREIOS PAC</td>
                  <td>R$ 22,49</td>
                  <td>5 a 6 dias úteis.</td>
                </tr>
                <tr>
                  <td>CORREIOS sedex</td>
                  <td>R$ 31,72</td>
                  <td>2 a 3 dias úteis.</td>
                </tr>

              </tbody>
            </Table>

          </Stack>
        </Grid.Col>
      </Grid>

      <Grid columns={15} h={135} mb={100}>


        <Grid.Col span={3}>
          <Box display={"flex"} h={"100%"} sx={{ border: "2px solid #004C98", borderRadius: "10px", justifyContent: "center", alignItems: "center" }}>
            <Center>
              <Title maw={200} align='center' order={3} c={"#004C98"}>O que é?</Title>
            </Center>
          </Box>       
        </Grid.Col>

        <Grid.Col span={3}>
          <Box display={"flex"} h={"100%"} sx={{ border: "2px solid #004C98", borderRadius: "10px", justifyContent: "center", alignItems: "center" }}>
            <Center>
              <Title maw={200} align='center' order={3} c={"#004C98"}>Benefícios do Super Pós Obra?</Title>
            </Center>
          </Box>       
        </Grid.Col>

        <Grid.Col span={3}>
          <Box display={"flex"} h={"100%"} sx={{ border: "2px solid #004C98", borderRadius: "10px", justifyContent: "center", alignItems: "center" }}>
            <Center>
              <Title maw={200} align='center' order={3} c={"#004C98"}>Como usar?</Title>
            </Center>
          </Box>       
        </Grid.Col>

        <Grid.Col span={3}>
          <Box display={"flex"} h={"100%"} sx={{ border: "2px solid #004C98", borderRadius: "10px", justifyContent: "center", alignItems: "center" }}>
            <Center>
              <Title maw={200} align='center' order={3} c={"#004C98"}>Como usar?</Title>
            </Center>
          </Box>       
        </Grid.Col>

        <Grid.Col span={3}>
          <Box display={"flex"} h={"100%"} sx={{ border: "2px solid #004C98", borderRadius: "10px", justifyContent: "center", alignItems: "center" }}>
            <Center>
              <Title maw={200} align='center' order={3} c={"#004C98"}>Quem é a Policlean Oirad?</Title>
            </Center>
          </Box>       
        </Grid.Col>







      </Grid>
    </Container>
  )
}

export default ProductCardView