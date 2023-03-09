import { Badge, Card, CardBody, CardHeader, Divider, Grid, GridItem, HStack, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { LandpadI } from '../backend/interface'

export default function Landpad(props: LandpadI) {

    const { isOpen, onClose, onOpen } = useDisclosure()

    const getStatusColor = (status: string) => {
        if (status === "retired") return "red.500"
        else return "green.500"
    }

    return (
        <>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW={"700px"}>
                    <ModalHeader>{props.full_name} Overview</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Grid gap={5} gridTemplateColumns={"repeat(2, 1fr)"}>
                            <GridItem>
                                <VStack textAlign={"center"}>
                                    <Text >Locality</Text>
                                    <Text fontWeight={"bold"}>{props.locality}</Text>
                                </VStack>
                            </GridItem>
                            <GridItem>
                                <VStack textAlign={"center"}>
                                    <Text>Region</Text>
                                    <Text fontWeight={"bold"}>{props.region}</Text>
                                </VStack>
                            </GridItem>
                            <GridItem>
                                <VStack textAlign={"center"}>
                                    <Text>Status</Text>
                                    <Text fontWeight={"bold"}>{props.status}</Text>
                                </VStack>
                            </GridItem>
                            <GridItem>
                                <VStack textAlign={"center"}>
                                    <Text>Type</Text>
                                    <Text fontWeight={"bold"}>{props.type}</Text>
                                </VStack>
                            </GridItem>
                            <GridItem>
                                <VStack textAlign={"center"}>
                                    <Text>Landing attempts</Text>
                                    <Text fontWeight={"bold"}>{props.landing_attempts}</Text>
                                </VStack>
                            </GridItem>
                            <GridItem>
                                <VStack textAlign={"center"}>
                                    <Text>Landing successes</Text>
                                    <Text fontWeight={"bold"}>{props.landing_successes}</Text>
                                </VStack>
                            </GridItem>
                        </Grid>
                        <Divider mt={5} mb={5} />
                        <Text>{props.details}</Text>
                        <Link target={"_blank"} href={props.wikipedia}><Text>{props.wikipedia}</Text></Link>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Card variant={"outline"} onClick={onOpen} _hover={{ cursor: "pointer", transform: "scale(1.05)" }}>
                <CardHeader p={0}>
                    <Image referrerPolicy="no-referrer" maxW={"300px"} h={"250px"} src={props.images.large[0]} />
                </CardHeader>
                <CardBody p={3}>
                    <HStack>
                        <Text textAlign={"center"} fontWeight={"bold"} textTransform={"uppercase"}>{props.name}</Text>
                        <Spacer />
                        <Badge bgColor={getStatusColor(props.status)}>{props.status === "active" ? "Active" : "Retired"}</Badge>
                    </HStack>
                </CardBody>
            </Card>
        </>
    )
}
