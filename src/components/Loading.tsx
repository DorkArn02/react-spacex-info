import { Flex, Spinner } from '@chakra-ui/react'

export default function Loading() {
    return (
        <Flex justify={"center"}>
            <Spinner size={"xl"} />
        </Flex>
    )
}
