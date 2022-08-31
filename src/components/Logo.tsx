import { Image, Flex } from "@chakra-ui/react"
import Link from "next/link";

export function Logo() {
    return (
        <Flex w="100%" h="6.25rem"align="center" justify="center">
            <Link href="/">
                <a>
                    <Image
                        src="/Logo.png"
                        alt="World Trip logo"
                    />
                </a>
            </Link>
        </Flex>

    );
}