import { Heading, HStack, VStack } from "@chakra-ui/react";
import Card from "../Card";

interface Props {
  load: boolean;
  title: string;
  trend: any[];
}

const SectionHome = ({ load, title, trend }: Props) => {
  return (
    <VStack mt={4} alignItems="self-start" p={8} w="100%">
      <Heading size="lg">{title}</Heading>
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
