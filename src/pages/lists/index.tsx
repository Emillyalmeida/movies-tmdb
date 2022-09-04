import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useContext, useEffect, useState } from "react";
import { MdInfo } from "react-icons/md";
import { useHistory, useParams } from "react-router-dom";
import Card from "../../components/Card";

import Header from "../../components/header";
import SkeletonCard from "../../components/skeleton";
import { TmdbContext } from "../../providers/context";

import { ItemI } from "../../interfaces";

interface typeParams {
  id: string;
}

const PageList = () => {
  const { id } = useParams<typeParams>();
  const history = useHistory();

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
        gap={4}
        py={8}
        h="250px"
        justifyContent="center"
        bgGradient="linear(to-l, #fff350, #ffea44, #ffe139, #ffd72c, #ffce1f, #fac618, #f6bd0f, #f1b505, #e6ac04, #dca302, #d19a01, #c79100)"
      >
        <Flex justifyContent="space-between">
          <Heading size="2xl">Lista: {infoList.name}</Heading>
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

        <VStack alignItems="flex-start" spacing={2}>
          <Text fontSize="xl">Sobre a lista :</Text>
          <Text> descrição:{infoList.description}</Text>
        </VStack>
      </Flex>
      {infoList.item_count > 0 ? (
        <Grid
          w="100%"
          templateColumns="repeat(auto-fill, minmax(200px,220px))"
          justifyContent="center"
          gap={10}
          p="8"
          mt="4"
        >
          {loading ? (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((key) => (
                <SkeletonCard key={key} />
              ))}
            </>
          ) : (
            infoList.items.map((item: ItemI) => (
              <Card list={id} key={item.id} item={item} />
            ))
          )}
        </Grid>
      ) : (
        <Center pt={8}>
          <VStack alignItems="center" spacing={3}>
            <Icon as={MdInfo} fontSize="60px" />
            <Heading>Sua lista está vazia</Heading>

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

export default PageList;
