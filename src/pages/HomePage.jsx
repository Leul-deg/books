import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'

const HomePage = () => {
return (<Grid 
    templateAreas={{
      base: `"main"`,
      lg: `"aside main"`
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr"
    }}
  >
    <Show above='lg'>
      <GridItem area={"aside"} paddingX={5}>
      </GridItem>
    </Show>

    <GridItem area={"main"} paddingX={5}>
      <HStack spacing={2} marginBottom={5}>

      </HStack>
    </GridItem>
  </Grid>);
}

export default HomePage
