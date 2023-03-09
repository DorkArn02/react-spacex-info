import { Badge, Card, CardBody, CardHeader, Grid, HStack, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from '@chakra-ui/react';
import millify from "millify";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { RocketI } from '../backend/interface';
import RocketProp from './RocketProp';

export default function Rocket(props: RocketI) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const getStatusColor = (status: boolean) => {
        if (status === true) return "green.500"
        return "red.500"
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW="800px">
                    <ModalHeader>{props.name} Overview</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Tabs variant={"line"}>
                            <TabList flexDir={["column", "column", "row"]}>
                                <Tab>Description</Tab>
                                <Tab>General</Tab>
                                <Tab>Propulsion</Tab>
                                <Tab>1st Stage</Tab>
                                <Tab>2nd Stage</Tab>
                                <Tab>Images</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Text>{props.description}</Text>
                                    <Link target={"_blank"} href={props.wikipedia}>{props.wikipedia}</Link>
                                </TabPanel>
                                <TabPanel>
                                    <Grid gap={3} gridTemplateColumns={"repeat(3, 1fr)"}>
                                        <RocketProp title={"Name"} value={props.name} />
                                        <RocketProp title={"Height"} value={props.height.meters + " m"} />
                                        <RocketProp title={"Mass"} value={millify(props.mass.kg) + " kg"} />
                                        <RocketProp title={"Status"} value={props.active ? "Active" : "Not active"} />
                                        <RocketProp title={"Launch cost"} value={"$" + millify(props.cost_per_launch)} />
                                        <RocketProp title={"First flight"} value={props.first_flight.toString()} />
                                        <RocketProp title={"Country"} value={props.country} />
                                        <RocketProp title={"Stages"} value={props.stages} />
                                        <RocketProp title={"Side Boosters"} value={props.boosters} />
                                    </Grid>
                                </TabPanel>
                                <TabPanel>
                                    <Grid gap={3} gridTemplateColumns={"repeat(3, 1fr)"}>
                                        <RocketProp title='Engine type' value={props.engines.type.toUpperCase() + ' ' + props.engines.version} />
                                        <RocketProp title='Engine count' value={props.engines.number.toString()} />
                                        <RocketProp title='TWR' value={millify(props.engines.thrust_to_weight)} />
                                        <RocketProp title='Sea Level Thrust' value={props.engines.thrust_sea_level.kN.toString() + ' kN'} />
                                        <RocketProp title='Vacuum Thrust' value={millify(props.engines.thrust_vacuum.kN) + ' kN'} />
                                        <RocketProp title='ISP (Sea/Vacuum)' value={props.engines.isp.sea_level + "/" + props.engines.isp.vacuum} />
                                        <RocketProp title='Propellant #1' value={props.engines.propellant_1} />
                                        <RocketProp title='Propellant #2' value={props.engines.propellant_2} />
                                        <RocketProp title='Max engine loss' value={props.engines.engine_loss_max?.toString()} />
                                    </Grid>
                                </TabPanel>
                                <TabPanel>
                                    <Grid gap={3} gridTemplateColumns={"repeat(3, 1fr)"}>
                                        <RocketProp title={"Engine burn time"} value={props.first_stage.burn_time_sec + " sec"} />
                                        <RocketProp title={"Engine count"} value={props.first_stage.engines.toString()} />
                                        <RocketProp title={"Fuel capacity"} value={props.first_stage.fuel_amount_tons + " tons"} />
                                        <RocketProp title={"Reusable"} value={props.first_stage.reusable ? "Yes" : "No"} />
                                        <RocketProp title={"Sea Level Thrust"} value={props.first_stage.thrust_sea_level.kN + " kN"} />
                                        <RocketProp title={"Vacuum Thrust"} value={props.first_stage.thrust_vacuum.kN + " kN"} />
                                    </Grid>
                                </TabPanel>
                                <TabPanel>
                                    <Grid gap={3} gridTemplateColumns={"repeat(3, 1fr)"}>
                                        <RocketProp title={"Engine burn time"} value={props.second_stage.burn_time_sec + " sec"} />
                                        <RocketProp title={"Engine count"} value={props.second_stage.engines.toString()} />
                                        <RocketProp title={"Fuel capacity"} value={props.second_stage.fuel_amount_tons + " tons"} />
                                        <RocketProp title={"Reusable"} value={props.second_stage.reusable ? "Yes" : "No"} />
                                        <RocketProp title={"Thrust"} value={props.second_stage.thrust.kN + " kN"} />
                                    </Grid>
                                </TabPanel>
                                <TabPanel>
                                    <Slide autoplay={true} >
                                        {props.flickr_images.map((i, k) => {
                                            return <Image onDragStart={(e) => e.preventDefault()} referrerPolicy="no-referrer" src={i} key={k} />
                                        })}
                                    </Slide>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Card variant={"outline"} onClick={onOpen} _hover={{ cursor: "pointer", transform: "scale(1.05)" }}>
                <CardHeader p={0}>
                    <Image maxW={"300px"} h={"250px"} referrerPolicy="no-referrer" src={props.flickr_images[0]} />
                </CardHeader>
                <CardBody p={3}>
                    <HStack>
                        <Text textAlign={"center"} fontWeight={"bold"}>{props.name}</Text>
                        <Spacer />
                        <Badge bgColor={getStatusColor(props.active)}>{props.active ? "Active" : "Not Active"}</Badge>
                    </HStack>

                </CardBody>
            </Card>
        </>
    )
}
