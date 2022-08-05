import { Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";

import Header from "../../components/header";
import { TmdbContext } from "../../providers/context";

interface typeParams {
  id: string;
}

const PageList = () => {
  const { id } = useParams<typeParams>();

  const { GetList, infoList } = useContext(TmdbContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    GetList(Number(id));

    setLoading(false);
  }, []);

  return (
    <Flex flexDir="column" w="100%">
      <Header />
      <Flex
        flexDir="column"
        mt={0}
        w="100%"
        p={6}
        color="white"
        gap={2}
        py={8}
        h="250px"
        justifyContent="center"
        bg="yellow.800"
      >
        <Heading size="2xl">{infoList.name}</Heading>

        <VStack>
          <Text fontSize="xl">Sobre a lista </Text>
          <Text> {infoList.description}</Text>
        </VStack>
      </Flex>

      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(200px,220px))"
        justifyContent="center"
        gap={10}
        p="8"
        mt="4"
      >
        {loading ? (
          <Heading>Carregando...</Heading>
        ) : infoList.items.length > 0 ? (
          infoList.items.map((item: { id: any }) => (
            <Card list key={item.id} item={item} />
          ))
        ) : (
          <Heading>Vazio</Heading>
        )}
      </Grid>
    </Flex>
  );
};

export default PageList;
