import { Badge, Card, CardBody, CardHeader, Divider, Grid, GridItem, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { LaunchpadI } from '../backend/interface'
import LaunchInfo from './LaunchInfo'
import RocketInfo from './RocketInfo'

export default function Launchpad(props: LaunchpadI) {

    const { isOpen, onClose, onOpen } = useDisclosure()

    const getStatusColor = (status: string) => {
        if (status === "retired") return "red.500"
        else if (status === "under construction") return "gray.500"
        else return "green.500"
    }

    return (
        <>
            <Modal blockScrollOnMount={false} scrollBehavior='inside' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW={"800px"}>
                    <ModalHeader>{props.name} Overview</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Tabs>
                            <TabList flexDir={["column", "column", "row"]}>
                                <Tab>General</Tab>
                                <Tab>Rockets</Tab>
                                <Tab>Launches</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Grid gap={3} gridTemplateColumns={"repeat(2, 1fr)"}>
                                        <GridItem>
                                            <VStack>
                                                <Text>Locality</Text>
                                                <Text fontWeight={"bold"} textAlign={"center"}>{props.locality}</Text>
                                            </VStack>
                                        </GridItem>
                                        <GridItem>
                                            <VStack>
                                                <Text>Region</Text>
                                                <Text fontWeight={"bold"}>{props.region}</Text>
                                            </VStack>
                                        </GridItem>
                                        <GridItem>
                                            <VStack>
                                                <Text>Status</Text>
                                                <Text fontWeight={"bold"} textAlign={"center"}>{props.status}</Text>
                                            </VStack>
                                        </GridItem>
                                        <GridItem>
                                            <VStack>
                                                <Text>Timezone</Text>
                                                <Text fontWeight={"bold"} textAlign={"center"}>{props.timezone}</Text>
                                            </VStack>
                                        </GridItem>
                                        <GridItem>
                                            <VStack>
                                                <Text textAlign={"center"}>Launch attempts</Text>
                                                <Text fontWeight={"bold"}>{props.launch_attempts}</Text>
                                            </VStack>
                                        </GridItem>
                                        <GridItem>
                                            <VStack>
                                                <Text textAlign={"center"}>Launch successes</Text>
                                                <Text fontWeight={"bold"}>{props.launch_successes}</Text>
                                            </VStack>
                                        </GridItem>
                                    </Grid>
                                    <Divider mt={5} mb={5} />
                                    {props.details}
                                </TabPanel>
                                <TabPanel>
                                    <Grid gap={3}>
                                        {props.rockets.length !== 0 ?
                                            props.rockets.map((item, k) => {
                                                return <RocketInfo rocket_id={item} key={k} />
                                            })
                                            : <Text>No rockets provided.</Text>
                                        }
                                    </Grid>
                                </TabPanel>
                                <TabPanel>
                                    <Grid gap={3}>
                                        {props.launches.length !== 0 ?

                                            props.launches.map((item, k) => {
                                                return <LaunchInfo launch_id={item} key={k} />
                                            })
                                            : <Text>No launches recorded.</Text>
                                        }
                                    </Grid>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </ModalBody>
                </ModalContent>
            </Modal>
            <Card variant={"outline"} onClick={onOpen} _hover={{ cursor: "pointer", transform: "scale(1.05)" }}>
                <CardHeader p={0}>
                    <Image maxW={"300px"} h={"250px"} referrerPolicy="no-referrer" src={props.images.large[0]} />
                </CardHeader>
                <CardBody p={3}>
                    <HStack justify={"center"}>
                        <Text textAlign={"center"} fontWeight={"bold"} textTransform={"uppercase"}>{props.name}</Text>
                        <Spacer />
                        <Badge bgColor={getStatusColor(props.status)}>{props.status}</Badge>
                    </HStack>
                </CardBody>
            </Card>
        </>
    )
}
