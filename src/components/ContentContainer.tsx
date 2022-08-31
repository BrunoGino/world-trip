import { ReactNode } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

interface ContentContainerProps extends FlexProps {
    children: ReactNode;
}

export function ContentContainer({ children, ...rest }: ContentContainerProps) {
    return (
        <Flex
            w="90%"
            maxWidth={1240}
            align="center"
            {...rest}
        >
            {children}
        </Flex>
    )
}