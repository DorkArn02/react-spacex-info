import { Badge, Card, CardBody, CardHeader, Heading } from '@chakra-ui/react'
import { useGetRocketByIdQuery } from '../services/spacexApi'
import Loading from './Loading'

export default function RocketInfo(props: { rocket_id: string }) {

    const { data, isFetching } = useGetRocketByIdQuery(props.rocket_id)

    const getStatusColor = (status: boolean) => {
        if (status === true) return "green.500"
        return "red.500"
    }


    if (isFetching)
        return <Loading />

    return (
        <Card boxShadow={"md"}>
            <CardHeader>
                <Heading size="sm">{data?.name}</Heading>
                <Badge bgColor={getStatusColor(data?.active!)}>{data?.active ? "Active" : "Not Active"}</Badge>
            </CardHeader>
            <CardBody>
                {data?.description}
            </CardBody>
        </Card>
    )
}
