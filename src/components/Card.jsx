import { Box, Heading, HStack, Image, Tag, Text, Button, Center } from "@chakra-ui/react";
import "./style/Card.css"
function Card() {
    return (
        <div className="w-64 h-80 p-0 my-4 rounded-2xl card-main">
            <Image
                src='https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg'
                alt='astrounant'
                objectFit='cover'
                mx='auto'
                className="rounded-t-2xl"
            />
            <div className="card-Body">

            <HStack mt='1' spacing='1'>
                {['java', 'python'].map((item) => (
                    <Tag key={item} variant="outline">
                        {item}
                    </Tag>
                ))}

            </HStack>
            <Heading mt='1' size='md' className="text-white">
                Primer
            </Heading>
            <div className="container-description mt-1 text-white" >
                <Text>
                    Lorem ipsum dolor sit amet consectetur adip
                </Text>
            </div>
            </div>
        </div>
    );
}
export default Card;
