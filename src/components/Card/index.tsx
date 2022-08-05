import { FaList, FaRegHeart, FaTrashAlt } from "react-icons/fa";
import {
  Box,
  Text,
  Image,
  Flex,
  CircularProgress,
  VStack,
  CircularProgressLabel,
  IconButton,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";

import { useContext } from "react";
import { TmdbContext } from "../../providers/context";
import { AddIcon } from "@chakra-ui/icons";

interface props {
  item: any;
  list?: boolean;
}

const Card = ({ item, list }: props) => {
  const { lists } = useContext(TmdbContext);

  return (
    <Box
      w="200px"
      boxShadow="base"
      bg="white"
      minH="400px"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      pos="relative"
      pb={2}
      rounded="lg"
      _hover={{ transform: "translateY(-10px)", borderColor: "gray.100" }}
      cursor="pointer"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
        alt={item.title}
        minW="200px"
        rounded="lg"
      />
      <VStack>
        <Text fontWeight="bold" textAlign="center">
          {item.title ? item.title : item.original_name}
        </Text>
        <CircularProgress
          rounded="full"
          top="-5px"
          right="5px"
          position="absolute"
          bg="white"
          size="40px"
          value={Math.ceil(item.vote_average * 10)}
          color="green.500"
        >
          <CircularProgressLabel>{`${Math.ceil(
            item.vote_average * 10
          )}%`}</CircularProgressLabel>
        </CircularProgress>
      </VStack>
      <Flex justifyContent="center" gap={3}>
        {list ? (
          <IconButton
            variant="ghost"
            color="yellow.700"
            aria-label="remover"
            icon={<FaTrashAlt />}
            fontSize="20px"
            _hover={{
              borderWidth: "1px",
              rounded: "md",
              borderColor: "yellow.700",
            }}
          />
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FaList />}
              variant="ghost"
              color="yellow.700"
              fontSize="20px"
              _hover={{
                borderWidth: "1px",
                rounded: "md",
                borderColor: "yellow.700",
              }}
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} as={Button} aria-label="Lists">
                Criar Lista
              </MenuItem>

              {lists.length > 0 ? (
                <>
                  <MenuDivider />
                  <MenuGroup title="Minhas listas">
                    {lists.map((list) => (
                      <MenuItem key={list.list_id}>{list.name}</MenuItem>
                    ))}
                  </MenuGroup>
                </>
              ) : (
                <></>
              )}
            </MenuList>
          </Menu>
        )}

        <IconButton
          variant="ghost"
          color="yellow.700"
          aria-label="Send email"
          icon={<FaRegHeart />}
          fontSize="20px"
          _hover={{
            borderWidth: "1px",
            rounded: "md",
            borderColor: "yellow.700",
          }}
        />
      </Flex>
    </Box>
  );
};

export default Card;
