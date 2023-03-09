import { GridItem, Text, VStack } from '@chakra-ui/react'

interface RocketPropsI {
    title: string,
    value: string | number | null
}

export default function RocketProp({ title, value }: RocketPropsI) {
    return (
        <GridItem>
            <VStack>
                <Text textAlign={"center"}>{title}</Text>
                <Text textAlign={"center"} fontWeight={"bold"}>{value}</Text>
            </VStack>
        </GridItem>
    )
}
