import { Button, Center, Image } from "@chakra-ui/react"
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate("/blog")
    }

    return (
        <>
            <Center
                display={"flex"}
                flexDir={"column"}
                w={"100%"}
                h={"100vh"}
            >
                <Image src={logo}/>
                <Button
                    onClick={handleClick}
                    colorScheme="blackAlpha"
                >
                    Iniciar
                </Button>
            </Center>
        </>
    )
}