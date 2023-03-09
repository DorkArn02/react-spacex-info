import { Card, CardBody, CardHeader, Grid, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { LaunchI } from '../backend/interface'
import { useGetLaunchpadByIdQuery, useGetRocketByIdQuery } from '../services/spacexApi'
import moment from "moment"
import Loading from './Loading'
import RocketInfo from './RocketInfo'
import LaunchInfo from './LaunchInfo'
import PayloadInfo from './PayloadInfo'

export default function Launch(props: LaunchI) {

    const { data: launchpad, isFetching: launchpadIsFetching } = useGetLaunchpadByIdQuery(props.launchpad)
    const { data: rocket, isFetching: rocketIsFetching } = useGetRocketByIdQuery(props.rocket)

    const { isOpen, onClose, onOpen } = useDisclosure()

    if (launchpadIsFetching || rocketIsFetching)
        return <Loading />


    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent maxW={"700px"}>
                    <ModalHeader>{props.name} Overview</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Tabs>
                            <TabList flexDir={["column", "column", "row"]}>
                                <Tab>Information</Tab>
                                <Tab>Rocket</Tab>
                                <Tab>Payload</Tab>
                                <Tab>Launchpad</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <LaunchInfo launch_id={props.id} />
                                </TabPanel>
                                <TabPanel>
                                    <RocketInfo rocket_id={props.rocket} />
                                </TabPanel>
                                <TabPanel>
                                    <Grid gap={2}>
                                        {props.payloads.length !== 0 ?
                                            props.payloads.map((item, k) => {
                                                return <PayloadInfo payload_id={item} key={k} />
                                            })
                                            : <Text>No payload(s) provided.</Text>
                                        }
                                    </Grid>
                                </TabPanel>
                                <TabPanel>
                                    <Text>{launchpad?.full_name}</Text>
                                    <Image src={launchpad?.images.large[0]} />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Card variant={"outline"} onClick={onOpen} _hover={{ cursor: 'pointer', transform: "scale(1.05)" }} flexDir={"row"}>
                <CardHeader w={"25%"} p={1}>
                    <VStack>
                        <Text fontFamily={"monospace"} textTransform={"uppercase"} textAlign={"center"}>{props.name}</Text>
                        <Image maxW={"100px"} src={props.links.patch.small} />
                    </VStack>
                </CardHeader>
                <CardBody p={1}>
                    <Grid gap={2} gridTemplateColumns={"repeat(2, 1fr)"}>
                        <GridItem>
                            <VStack>
                                <Text>Flight</Text>
                                <Text fontWeight={"bold"}>{props.flight_number}</Text>
                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack>
                                <Text>Launchpad</Text>
                                <Text fontWeight={"bold"}>{launchpad?.name}</Text>
                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack>
                                <Text>Time</Text>
                                <Text fontWeight={"bold"}>{moment(props.date_utc).format("MMM. YYYY")}</Text>
                            </VStack>
                        </GridItem>

                        <GridItem>
                            <VStack>
                                <Text>Rocket</Text>
                                <Text fontWeight={"bold"}>{rocket?.name}</Text>
                            </VStack>
                        </GridItem>
                    </Grid>
                </CardBody>
            </Card>
        </>
    )
}
