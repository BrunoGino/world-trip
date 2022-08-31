import { Flex, Image, Text } from "@chakra-ui/react";
import { CircleFlag } from "react-circle-flags";

type CityCardProps = {
    id: string;
    imageSrc: string;
    city: string;
    country: string;
    flagCode: string;
}

export function CityCard({
    id,
    imageSrc,
    city,
    country,
    flagCode
}: CityCardProps) {
    return (
        <Flex
            w="256px"
            h="282px"
            align="center"
            justify="center"
            flexDir="column"
            _hover={{
                boxShadow: "2xl"
            }}
            cursor="pointer"
        >
            <Image
                w="256px"
                h="175px"
                src={imageSrc}
                borderTopEndRadius="4px"
                borderTopStartRadius="4px"
                alt="imagem da cidade"
            />
            <Flex
                w="256px"
                h="107px"
                border="1px solid"
                borderColor="yellow.500"
                borderTop="none"
                borderBottomEndRadius="4px"
                borderBottomStartRadius="4px"
                p="1rem"
                mt="-1px"
                bg="white"
            >
                <Flex w="256px" h="100px" flexDir="column">
                    <Text fontSize="1.30rem" fontWeight="semibold">
                        {city}
                    </Text>
                    <Text>{country}</Text>
                </Flex>
                <CircleFlag countryCode={flagCode} width="40" height="40"/>
            </Flex>
        </Flex>
    );
}