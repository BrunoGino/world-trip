import { Box, Divider, Heading } from "@chakra-ui/react";
import { ContentContainer } from "../ContentContainer";
import { Slider } from "./Slider";

type Continent = {
    id: string;
    name: string;
    call: string;
    callImage: string;
}

type CallToActionProps = {
    continents: Continent[];
}

export function CallToAction({ continents }: CallToActionProps) {
    return (
        <ContentContainer flexDir="column">
            <Box flexDirection="row" w="90px" mt="4rem" mb="2rem">
                <Divider color="blue" size="4rem" borderColor="blue.800" />
            </Box>

            <Heading textAlign="center" fontSize={["xl"]}>
                Vamos nessa? <br /> Então escolha seu continente
            </Heading>
            <Slider continents={continents} />
        </ContentContainer>
    );
}