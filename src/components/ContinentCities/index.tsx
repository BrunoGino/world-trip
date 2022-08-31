import { Heading, Wrap } from "@chakra-ui/react";
import { ContentContainer } from "../ContentContainer";
import { CityCard } from "./CityCard";

type City = {
    id: string;
    name: string;
    image: string;
    country: string;
    code: string;
}

type ContinentCitiesProps = {
    cities: City[];
}

export function ContinentCities({ cities }: ContinentCitiesProps) {
    return (
        <ContentContainer mt="4rem" flexDir="column" align="flex-start" mb="4rem">
            <Heading>Cidades +100</Heading>
            <Wrap
                mt="2rem"
                spacing="3rem"
                justify={["center", "center", "center", "flex-start"]}
            >
                {cities.map((city) => (
                    <CityCard
                        id={city.id}
                        key={city.id}
                        city={city.name}
                        country={city.country}
                        flagCode={city.code}
                        imageSrc={city.image}
                    />
                ))}
            </Wrap>
        </ContentContainer>
    );
}