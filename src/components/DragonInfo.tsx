import { Card, CardBody, CardHeader, Image, Link, Stack, Text } from '@chakra-ui/react'
import { DragonI } from '../backend/interface'

export default function DragonInfo(props: DragonI) {
    return (
        <Card overflow={"hidden"} direction={{ base: "column", sm: "row" }} variant={"outline"}>
            <Image maxW={{ base: "100%", sm: "200px" }} objectFit='cover' onDragStart={(e) => e.preventDefault()} referrerPolicy="no-referrer" src={props.flickr_images[0]} />
            <Stack>
                <CardHeader>
                    {props.name}
                </CardHeader>
                <CardBody>
                    <Text>
                        {props.description}
                    </Text>
                    <Link href={props.wikipedia} target={"_blank"}>
                        {props.wikipedia}
                    </Link>
                </CardBody>
            </Stack>
        </Card>
    )
}
