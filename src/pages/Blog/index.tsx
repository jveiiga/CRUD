import {
    Button,
    Center,
    Input,
    FormControl,
    FormLabel,
    Textarea,
    Flex,
    Text,
} from "@chakra-ui/react"
import { Header } from "../../components/Header"

export const Blog = () => {
    return (
        <>
            <Header />
            <Center
                w={"100%"}
                h={"100vh"}
                border={"1px solid black"}
            >
                <Center
                    w={"50%"}
                    h={"100vh"}
                    border={"1px solid red"}
                >
                    <FormControl
                        display={"flex"}
                        flexDir={"column"}
                        alignItems={"flex-end"}
                        border={"1px solid #999999"}
                        borderRadius={"4px"}
                        p={"2rem"}
                    >
                        <Flex
                            flexDir={"column"}
                            w={"100%"}
                        >
                            <Text
                                fontSize={"28px"}
                                fontWeight={"bold"}
                                mb={"3rem"}
                            >
                                What's on your mind?
                            </Text>
                            <FormLabel>Title</FormLabel>
                            <Input
                                type="text"
                                placeholder="Hello world"
                            />

                            <FormLabel>Content</FormLabel>
                            <Textarea
                                placeholder="Content here"
                            />
                        </Flex>
                        <Button
                            mt={4}
                            bg={"#7695EC"}
                            color={"#ffffff"}
                            type="submit"
                            w={"11rem"}
                        >
                            Create
                        </Button>
                    </FormControl>

                </Center>
            </Center>
        </>
    )
}