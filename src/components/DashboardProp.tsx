import { GridItem, Text, VStack } from '@chakra-ui/react'

interface DashboardPropI {
    title: string,
    value: string | number | undefined
}

export default function DashboardProp({ title, value }: DashboardPropI) {
    return (
        <GridItem>
            <VStack>
                <Text textAlign={"center"} textTransform={"uppercase"}>{title}</Text>
                <Text textAlign={"center"} fontWeight={"bold"}>{value}</Text>
            </VStack>
        </GridItem>
    )
}
