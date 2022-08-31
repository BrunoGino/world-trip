import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import { SliderItem } from "./SliderItem";
import "swiper/css/bundle";

type Continent = {
    id: string;
    name: string;
    call: string;
    callImage: string;
}

type SliderProps = {
    continents: Continent[];
}

export function Slider({ continents }: SliderProps) {
    return (
        <Box width="100%" h="450px" mt="4rem" mb="2rem">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {continents.map((continent) => (
                    <SwiperSlide key={continent.id}>
                        <SliderItem
                            backgroundImageSrc={continent.callImage}
                            title={continent.name}
                            subtitle={continent.call}
                            href={`/${continent.id}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}