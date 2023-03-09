import { Flex, Grid } from "@chakra-ui/react"
import { useGetLandpadsQuery } from "../services/spacexApi"
import Landpad from "./Landpad"
import Loading from "./Loading"

export default function Landpads() {

    const { data, isFetching } = useGetLandpadsQuery()

    if (isFetching)
        return <Loading />
    return (
        <>
            <Flex justify={"center"}>
                <Flex align={"center"} flexDir={"column"}>

                    <Grid gap={3} gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
                        {data && data.map((item, key) => {
                            return <Landpad key={key} {...item} />
                        })}
                    </Grid>
                </Flex>
            </Flex>
        </>
    )
}
