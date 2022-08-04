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
} from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCreate = ({ isOpen, onClose }: Props) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
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
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Descrição</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Escreva um a descrição para a Lista"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="yellow.800"
              color="white"
              mr={3}
              _hover={{ bg: "gray.300", color: "yellow.800" }}
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
