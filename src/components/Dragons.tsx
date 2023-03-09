import { Flex, Grid } from "@chakra-ui/react"
import { useGetDragonsQuery } from "../services/spacexApi"
import DragonInfo from "./DragonInfo"
import Loading from "./Loading"

export default function Dragons() {

    const { data, isFetching } = useGetDragonsQuery()

    if (isFetching)
        return <Loading />

    return (
        <>
            <Flex justify={"center"}>
                <Flex w={"80%"} align={"center"} flexDir={"column"}>
                    <Grid gap={3} gridTemplateColumns={"repeat(1, 1fr)"}>
                        {data?.map((i, k) => {
                            return <DragonInfo {...i} key={k} />
                        })}
                    </Grid>
                </Flex>
            </Flex>
        </>
    )
}
