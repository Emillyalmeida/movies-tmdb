import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Icon,
  VStack,
} from "@chakra-ui/react";

import { useContext, useEffect } from "react";
import { MdInfo } from "react-icons/md";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Card from "../../components/Card";

import Header from "../../components/header";
import { TmdbContext } from "../../providers/context";

import { ItemI } from "../../interfaces";

const Favoritos = () => {
  const history = useHistory();

  const { favorites } = useContext(TmdbContext);

  return (
    <Flex flexDir="column" w="100%">
      <Header />
      <Flex
        flexDir="column"
        mt={0}
        w="100%"
        p={6}
        color="white"
        gap={4}
        py={8}
        h="250px"
        justifyContent="center"
        bgGradient="linear(to-l, #fff350, #ffea44, #ffe139, #ffd72c, #ffce1f, #fac618, #f6bd0f, #f1b505, #e6ac04, #dca302, #d19a01, #c79100)"
      >
        <Flex justifyContent="space-between">
          <Flex gap={2}>
            <FaHeart fontSize="3rem" />
            <Heading size="3xl">Favoritos</Heading>
          </Flex>

          <Button
            rightIcon={<AddIcon />}
            color="gray.700"
            borderColor="gray.700"
            variant="outline"
            _hover={{ bg: "gray.100" }}
            onClick={() => history.push("/")}
          >
            Adicionar Itens
          </Button>
        </Flex>
      </Flex>
      {favorites.length > 0 ? (
        <Grid
          w="100%"
          templateColumns="repeat(auto-fill, minmax(200px,220px))"
          justifyContent="center"
          gap={10}
          p="8"
          mt="4"
        >
          {favorites.map((item: ItemI) => (
            <Card key={item.id} item={item} />
          ))}
        </Grid>
      ) : (
        <Center pt={8}>
          <VStack alignItems="center" spacing={3}>
            <Icon as={FaHeartBroken} fontSize="80px" />
            <Heading>Seus Favoritos está vazio</Heading>

            <Button
              rightIcon={<AddIcon />}
              color="gray.700"
              borderColor="gray.700"
              variant="outline"
              _hover={{ bg: "yellow.700" }}
              onClick={() => history.push("/")}
            >
              Adicionar Itens
            </Button>
          </VStack>
        </Center>
      )}
    </Flex>
  );
};

export default Favoritos;
