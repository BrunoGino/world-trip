import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { continents } from "../utils/continents";
import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentDetail } from "../components/ContinentDetail";
import { Header } from "../components/Header";
import { ContinentCities } from "../components/ContinentCities";

type City = {
    id: string;
    name: string;
    image: string;
    country: string;
    code: string;
}

type ContinentProps = {
    continent: {
        id: string;
        name: string;
        call: string;
        callImage: string;
        bannerImage: string;
        about: string;
        countries: number;
        languages: number;
        cities100: number;
        cities: City[];
    }
}

export default function Continent({ continent }: ContinentProps) {
    return (
        <Flex width="100%" flexDir="column" bg="gray.50" align="center">
            <Header />
            <ContinentBanner name={continent.name} image={continent.bannerImage} />
            <ContinentDetail
                about={continent.about}
                countries={continent.countries}
                languages={continent.languages}
                cities100={continent.cities100}
            />
            <ContinentCities cities={continent.cities}/>
        </Flex>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: continents.map((continent) => {
            return {
                params: {
                    id: continent.id
                },
            };
        }),
        fallback: "blocking",
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params;

    return {
        props: {
            continent: continents.find((continent) => continent.id === id)
        }
    }
};

