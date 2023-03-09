import { Card, CardBody, CardHeader, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react"
import { useGetCompanyQuery, useGetRoadsterInfoQuery } from "../services/spacexApi"
import DashboardProp from "./DashboardProp"
import millify from "millify"
import Loading from "./Loading"
import { Slide } from "react-slideshow-image"

export default function Dashboard() {

  const { data: companyData, isFetching: isFetchingCompany } = useGetCompanyQuery()
  const { data: roadsterData, isFetching: isFetchingRoadster } = useGetRoadsterInfoQuery()

  if (isFetchingCompany || isFetchingRoadster)
    return <Loading />


  return (
    <Flex justify={"center"}>
      <Flex maxW={"90%"}>
        <Grid gap={3} gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}>
          <Card variant={"outline"}>
            <CardHeader>
              <Heading textAlign={"center"} size="lg">Tesla Roadster</Heading>
            </CardHeader>
            <CardBody>
              <Slide>
                {roadsterData?.flickr_images.map((i, k) => {
                  return <Image onDragStart={(e) => e.preventDefault()} referrerPolicy="no-referrer" src={i} key={k} />
                })}
              </Slide>
            </CardBody>
          </Card>
          <Card variant={"outline"}>
            <CardHeader>
              <Heading textAlign={"center"} size="lg">Company</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                {companyData?.summary}
              </Text>
              <Grid gap={3} gridTemplateColumns={"repeat(3, 1fr)"}>
                <DashboardProp title={"name"} value={companyData?.name} />
                <DashboardProp title={"founded"} value={companyData?.founded} />
                <DashboardProp title={"employees"} value={companyData?.employees} />
                <DashboardProp title={"vehicles"} value={companyData?.vehicles} />
                <DashboardProp title={"launch sites"} value={companyData?.launch_sites} />
                <DashboardProp title={"test sites"} value={companyData?.test_sites} />
                <DashboardProp title={"value"} value={`$ ${millify(companyData?.valuation!)}`} />
              </Grid>
            </CardBody>
          </Card>
          <Card variant={"outline"}>
            <CardHeader>
              <Heading textAlign={"center"} size="lg">Headquarters</Heading>
            </CardHeader>
            <CardBody>
              <VStack className={"frameWrapper"}>
                <iframe allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.163968866506!2d-118.32796371256289!3d33.921002933549005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5dee46db32d%3A0x5589bf4232c10232!2sSpacex!5e0!3m2!1shu!2shu!4v1677509646562!5m2!1shu!2shu" width="600" height="450" loading="lazy"></iframe>
              </VStack>

            </CardBody>
          </Card>
        </Grid>
      </Flex>
    </Flex>
  )
}

