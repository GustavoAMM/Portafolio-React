import { Box, Heading, HStack, Image, Tag, Text, Button, Center } from "@chakra-ui/react";
import "./style/Card.css"
function Card() {
    return (
        <a href="">
            <div className="w-64 p-0 my-4 rounded-2xl card-main hover:scale-105">
            <Image
                src='https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg'
                alt='astrounant'
                objectFit='cover'
                mx='auto'
                className="rounded-t-2xl"
            />
            <div className="card-Body">

            <HStack m='3' spacing='1'>
                {['java', 'python'].map((item) => (
                    <Tag key={item} variant="outline">
                        {item}
                    </Tag>
                ))}
            </HStack>

            <h1 className="card-title text-white font-bold">
                Proyecto escolar UPQ
            </h1>
            <div className="container-description m-3 mb-2 text-white" >
                <Text>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus, doloribus iusto, dicta doloremque fugit natus, saepe distinctio quae sequi veritatis quis reiciendis porro expedita impedit nemo quaerat pariatur est!
                </Text>
            </div>
            </div>
        </div>
        </a>
        
    );
}
export default Card;
