import { Card, CardBody, CardFooter, CardHeader, Heading, Link, Text, VStack } from "@chakra-ui/react"
import moment from "moment"
import { useGetLaunchByIdQuery } from "../services/spacexApi"
import Loading from "./Loading"


export default function LaunchInfo(props: { launch_id: string }) {

    const { data, isFetching } = useGetLaunchByIdQuery(props.launch_id)

    if (isFetching)
        return <Loading />

    return (
        <Card overflow={"auto"} boxShadow={"md"}>
            <CardHeader>
                <Heading size="sm">{data?.name}</Heading>
                <Text fontFamily={"monospace"}>Launch date: {moment(data?.date_utc).format("MMM. YYYY hh:mm A")}</Text>
                <Text fontFamily={"monospace"}>Flight number: {data?.flight_number}</Text>
                <Text fontFamily={"monospace"}>Status: {data?.success ? "Ok" : "Failed"}</Text>
                <Text fontFamily={"monospace"}>Upcoming: {data?.upcoming ? "Yes" : "No"}</Text>
            </CardHeader>
            <CardBody>
                {data?.details?.length ? data?.details : "No details provided."}
            </CardBody>
            <CardFooter>
                <VStack>
                    {data?.links.article ?
                        <Link href={data?.links.article} target={"_blank"}>{data?.links.article}</Link>
                        : <Text>No links provided</Text>
                    }
                </VStack>
            </CardFooter>
        </Card>
    )
}
