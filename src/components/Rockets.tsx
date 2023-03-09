import { Flex, Grid } from "@chakra-ui/react";
import { useGetRocketsQuery } from "../services/spacexApi";
import Loading from "./Loading";
import Rocket from "./Rocket";

export default function Rockets() {

    const { data, isFetching } = useGetRocketsQuery()

    if (isFetching)
        return <Loading />

    return (
        <>
            <Flex justify={"center"}>
                <Flex align={"center"} flexDir={"column"}>
                    <Grid gap={3} gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
                        {data && data.map((item, key) => {
                            return <Rocket key={key} {...item} />
                        })}
                    </Grid>
                </Flex>
            </Flex>
        </>
    )
}
