import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Text, Flex, Heading, Tooltip } from "@chakra-ui/react";
import { ContentContainer } from "./ContentContainer";

type ContinentDetailProps = {
    about: string;
    countries: number;
    languages: number;
    cities100: number;
}

export function ContinentDetail({
    about,
    countries,
    languages,
    cities100
}: ContinentDetailProps) {
    return (
        <ContentContainer
            justify="space-between"
            mt="4rem"
            flexDir={["column", "column", "row"]}
        >
            <Text width={["100%", "100%", "40%"]} align="justify">
                {about}
            </Text>
            <Flex
                width={["100%", "100%", "40%"]}
                mt={["1rem", "1rem", "0"]}
                justify="space-around"
            >
                <Flex flexDir="column" align="center" justify="center">
                    <Heading color="yellow.500">{countries}</Heading>
                    <Text>países</Text>
                </Flex>

                <Flex flexDir="column" align="center" justify="center">
                    <Heading color="yellow.500">{languages}</Heading>
                    <Text>línguas</Text>
                </Flex>
                <Flex flexDir="column" align="center" justify="center">
                    <Heading color="yellow.500">{cities100}</Heading>
                    <Text>
                        cidades +100
                        <Tooltip
                            hasArrow
                            placement="top"
                            label="Cidades entre as 100 mais visitadas do mundo"
                            fontSize="md"
                        >
                            <InfoOutlineIcon
                                color="gray.400"                                
                                w="1rem"
                                h="1rem"
                                ml="0.25rem"
                            />
                        </Tooltip>
                    </Text>
                </Flex>
            </Flex>
        </ContentContainer>
    );
}