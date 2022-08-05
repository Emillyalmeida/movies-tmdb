import { Heading, HStack, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons/lib/cjs/iconBase";
import Card from "../Card";

interface Props {
  load: boolean;
  title: string;
  trend: any[];
  icon: IconType;
}

const SectionHome = ({ load, title, trend, icon: Icon }: Props) => {
  return (
    <VStack mt={4} alignItems="self-start" p={8} w="100%">
      <HStack spacing={3}>
        <Icon size="32px" />
        <Heading size="lg">{title}</Heading>
      </HStack>

      {load ? (
        <Heading>Carregando</Heading>
      ) : (
        <HStack w="100%" overflowX="scroll" spacing={4} py={6}>
          {trend.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </HStack>
      )}
    </VStack>
  );
};

export default SectionHome;
