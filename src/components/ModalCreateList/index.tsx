import {
  FormControl,
  Modal,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { TmdbContext } from "../../providers/context";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCreate = ({ isOpen, onClose }: Props) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const toast = useToast();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { CreateLists } = useContext(TmdbContext);

  const handleCreateList = () => {
    if (!name || !description) {
      toast({
        title: `Preencha todos os campos`,
        status: "error",
        position: "top-left",
        isClosable: true,
      });

      return;
    }

    CreateLists(name, description);
    onClose();
  };
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="gray.800" color="yellow.700">
            Criar Lista
          </ModalHeader>
          <ModalCloseButton color="yellow.700" _hover={{ bg: "gray.900" }} />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome da Lista</FormLabel>
              <Input
                ref={initialRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite o nome da lista"
                borderColor="yellow.800"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Descrição</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Escreva um a descrição para a Lista"
                borderColor="yellow.800"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="yellow.800"
              color="white"
              mr={3}
              _hover={{ bg: "gray.300", color: "yellow.800" }}
              onClick={() => handleCreateList()}
            >
              Criar
            </Button>
            <Button
              bg="red.500"
              color="white"
              onClick={onClose}
              _hover={{ bg: "gray.300", color: "red.500" }}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCreate;
