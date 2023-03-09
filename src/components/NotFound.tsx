import { Flex, Heading } from '@chakra-ui/react'
import Navbar from './Navbar'

export default function NotFound() {
    return (
        <>
            <Navbar />
            <Flex justify={"center"}>
                <Heading>404: Page not found!</Heading>
            </Flex>
        </>
    )
}
