import { FaHeart, FaList, FaRegHeart, FaTrashAlt } from "react-icons/fa";
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
  useDisclosure,
} from "@chakra-ui/react";

import { useContext } from "react";
import { TmdbContext } from "../../providers/context";
import { AddIcon } from "@chakra-ui/icons";
import ModalCreate from "../ModalCreateList";
import { ItemI } from "../../interfaces";

interface props {
  item: ItemI;
  list?: string;
}

const Card = ({ item, list }: props) => {
  const {
    lists,
    AddMovieList,
    RemoveMovieList,
    isFavorites,
    AddFavorites,
    RemoveFavorites,
  } = useContext(TmdbContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ModalCreate isOpen={isOpen} onClose={onClose} />
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
        color="gray.900"
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
              onClick={() => RemoveMovieList(item.id, Number(list))}
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
                <MenuItem
                  icon={<AddIcon />}
                  as={Button}
                  aria-label="Lists"
                  onClick={() => onOpen()}
                >
                  Criar Lista
                </MenuItem>

                {lists.length > 0 ? (
                  <>
                    <MenuDivider />
                    <MenuGroup title="Adicionar a uma lista">
                      {lists.map((list) => (
                        <MenuItem
                          key={list.list_id}
                          onClick={() => AddMovieList(item.id, list.list_id)}
                        >
                          {list.name}
                        </MenuItem>
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
            icon={isFavorites(item.id) ? <FaHeart /> : <FaRegHeart />}
            fontSize="20px"
            _hover={{
              borderWidth: "1px",
              rounded: "md",
              borderColor: "yellow.700",
            }}
            onClick={() =>
              isFavorites(item.id)
                ? RemoveFavorites(item.id)
                : AddFavorites(item.id, item)
            }
          />
        </Flex>
      </Box>
    </>
  );
};

export default Card;
