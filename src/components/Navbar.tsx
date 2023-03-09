import { Flex, Heading, HStack, IconButton, Spacer, Text, useColorMode, VStack } from '@chakra-ui/react'
import { Link, NavLink, Outlet } from "react-router-dom"
import { FaList, FaMoon, FaSun } from "react-icons/fa"
import { useEffect, useState } from 'react'


export default function Navbar() {

    const { toggleColorMode, colorMode } = useColorMode()
    const [opened, setOpened] = useState<boolean>(false)

    const [screenSize, setScreenSize] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screenSize > 768) {
            setOpened(false)
        }
    }, [screenSize])

    return (
        <>
            <Flex fontFamily={"Orbitron"} display={["none", "none", "flex"]} align={["center"]} mb={4} justify={"center"} boxShadow={"md"} p={3} >
                <Link to="/"><Heading fontFamily={"Orbitron"} _hover={{ color: "rgb(127, 127, 248)" }} fontWeight={"normal"} size={"lg"}>SpaceX Info</Heading></Link>
                <Spacer />
                <HStack spacing={"40px"}>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/rockets">
                        <Text _hover={{ "textDecor": "underline" }}>Rockets</Text>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/launches"><Text _hover={{ "textDecor": "underline" }}>Launches</Text></NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/launchpads"><Text _hover={{ "textDecor": "underline" }}>Launchpads</Text></NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/landpads"><Text _hover={{ "textDecor": "underline" }}>Landpads</Text></NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/starlinks"><Text _hover={{ "textDecor": "underline" }}>Starlinks</Text></NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/dragons"><Text _hover={{ "textDecor": "underline" }}>Dragons</Text></NavLink>
                    <IconButton size={"sm"} aria-label='color change' onClick={toggleColorMode} icon={colorMode === 'dark' ? <FaMoon /> : <FaSun />} />
                </HStack>
            </Flex>
            <Flex mb={4} boxShadow={"md"} p={3} display={["flex", "flex", "none"]} align={"center"}>
                <Link to="/"><Heading fontFamily={"Orbitron"} fontWeight={"normal"} size={"lg"}>SpaceX Info</Heading></Link>
                <Spacer />
                <HStack>
                    <IconButton size={"sm"} aria-label={"menu"} onClick={() => setOpened(!opened)} icon={<FaList />} />
                    <IconButton size={"sm"} aria-label='color change' onClick={toggleColorMode} icon={colorMode === 'dark' ? <FaMoon /> : <FaSun />} />
                </HStack>
            </Flex>
            <VStack fontFamily={"Orbitron"} boxShadow={"md"} mb={5} p={3} display={opened ? "flex" : "none"}>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/rockets"><Text _hover={{ "textDecor": "underline" }}>Rockets</Text></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/launches"><Text _hover={{ "textDecor": "underline" }}>Launches</Text></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/launchpads"><Text _hover={{ "textDecor": "underline" }}>Launchpads</Text></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/landpads"><Text _hover={{ "textDecor": "underline" }}>Landpads</Text></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/starlinks"><Text _hover={{ "textDecor": "underline" }}>Starlinks</Text></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/dragons"><Text _hover={{ "textDecor": "underline" }}>Dragons</Text></NavLink>
            </VStack>
            <Outlet />
        </>
    )
}
