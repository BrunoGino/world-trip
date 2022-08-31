import { Image, Text, Flex } from "@chakra-ui/react";
import { ContentContainer } from "./ContentContainer";
import { Item } from "./TravelTypes/Item";

export function TravelTypes() {
    return (
        <ContentContainer
            mt="6rem"
            flexWrap={["wrap", "wrap", "nowrap"]}
            justify={["center", "center", "space-between"]}
            align="center"
        >
            <Item imageSrc="cocktail.png" title="vida noturna" />
            <Item imageSrc="surf.png" title="praia" />
            <Item imageSrc="building.png" title="moderno" />
            <Item imageSrc="museum.png" title="clássico" />
            <Item imageSrc="earth.png" title="e mais..." />
        </ContentContainer>
    )
}