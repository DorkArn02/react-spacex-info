import { Flex, Grid } from '@chakra-ui/react'
import { useGetLaunchpadsQuery } from '../services/spacexApi'
import Launchpad from './Launchpad'
import Loading from './Loading'

export default function Launchpads() {


    const { data, isFetching } = useGetLaunchpadsQuery()

    if (isFetching)
        return <Loading />
    return (
        <>
            <Flex justify={"center"}>
                <Flex align={"center"} flexDir={"column"}>
                    <Grid gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={3}>
                        {data && data.map((item, key) => {
                            return <Launchpad key={key} {...item} />
                        })}
                    </Grid>
                </Flex>
            </Flex>
        </>
    )
}
