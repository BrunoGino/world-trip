import { useRouter } from "next/router";
import { Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Logo } from "./Logo";

export function Header() {
    const router = useRouter();
    const isOnSubpage = router.asPath.substring(1)!!;

    return (
        <Flex
            as="header"
            w="100%"
            h={110}
            mx="auto"
            align="center"
            justify="center"
        >
            {isOnSubpage && (

                <IconButton
                    onClick={router.back}
                    icon={<ChevronLeftIcon w={[16, 35]} h={[16, 35]} />}
                    position="absolute"
                    left={["16", "8"]}
                    aria-label="back"
                    backgroundColor="gray.50"
                />
            )}
            <Logo />
        </Flex>
    );
};