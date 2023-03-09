import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'
import { useGetPayloadByIdQuery } from '../services/spacexApi'
import Loading from './Loading'
import millify from "millify"

export default function PayloadInfo(props: { payload_id: string }) {

    const { data, isFetching } = useGetPayloadByIdQuery(props.payload_id)

    if (isFetching)
        return <Loading />


    return (
        <Card boxShadow={"md"}>
            <CardHeader>
                <Heading size="sm">{data?.name}</Heading>
            </CardHeader>
            <CardBody>
                <Text>Type: {data?.type}</Text>
                <Text>Mass: {data?.mass_kg ? millify(data?.mass_kg) + ' kg' : "Not provided"}</Text>
                <Text>Customer: {data?.customers}</Text>
                <Text>Manufacturer: {data?.manufacturers}</Text>
                <Text>Orbit: {data?.orbit}</Text>
            </CardBody>
        </Card>
    )
}
