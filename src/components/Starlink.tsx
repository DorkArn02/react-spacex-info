import { Badge, Flex } from '@chakra-ui/react'
import { useGetStarlinksQuery } from '../services/spacexApi'
import Loading from './Loading'
import ReactGlobe, { Marker } from "react-globe"
import { useMemo } from 'react'

export default function Starlink() {

    const { data, isFetching, isError, isLoading } = useGetStarlinksQuery()

    const cachedMutatedData = useMemo(() => {
        if (isLoading || isError || isFetching) return null

        let arr: Marker[] = []

        data?.map(item => {
            arr.push({ id: item.id, coordinates: [item.latitude, item.longitude], value: item.height_km })
        })
        return arr
    }, [isFetching, isError, isLoading, data])

    if (isFetching)
        return <Loading />

    return (
        <Flex justify={"center"}>
            <Flex align={"center"} flexDir={"column"}>
                <Badge mb={2} colorScheme={"blue"}>Currently {data?.length} starlinks online</Badge>
                <ReactGlobe
                    markers={cachedMutatedData!}
                    height="80vh"
                    width="99vw"
                    globeCloudsTexture={null}
                    options={{
                        enableGlobeGlow: false,
                        globeCloudsOpacity: 0.0,
                        enableMarkerGlow: false,
                        markerType: 'dot',
                        markerRadiusScaleRange: [0.005, 0.005]
                    }}
                />
            </Flex>
        </Flex>
    )
}
