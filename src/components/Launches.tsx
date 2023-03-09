import { Flex, Grid } from '@chakra-ui/react'
import { useState } from 'react'
import { useGetLaunchesQuery } from '../services/spacexApi'
import Launch from './Launch'
import Loading from './Loading'
import { Paginate } from "react-paginate-chakra-ui"

export default function Launches() {

    const { data, isFetching } = useGetLaunchesQuery()

    const [currentPage, setCurrentPage] = useState(0);

    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    const currentPageData = data?.slice(offset, offset + 10)
    const pageCount = Math.ceil(data?.length! / PER_PAGE);


    const handlePageClick = (p: number) => setCurrentPage(p);


    if (isFetching)
        return <Loading />


    return (
        <Flex justify={"center"}>
            <Flex align={"center"} flexDir={"column"}>
                <Grid gap={5} gridTemplateColumns={"repeat(1, 1fr)"}>
                    {currentPageData && currentPageData.map((i, k) => {
                        return <Launch key={k} {...i} />
                    })}
                </Grid>
                <Paginate
                    colorScheme={"blue"}
                    page={currentPage}
                    count={data?.length!}
                    pageSize={pageCount}
                    onPageChange={handlePageClick}
                    margin={2}
                    shadow="lg"
                    fontWeight="blue"
                    variant="outline"
                    border="2px solid"
                />
            </Flex>
        </Flex>
    )
}
