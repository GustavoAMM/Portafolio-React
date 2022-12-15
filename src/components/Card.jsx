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

                    <div className="card-tag flex mx-2">
                        {["js", "python", "docker"].map((item) => (
                            <div
                                key={item}
                                className="mt-2 mx-1 px-2 rounded-md text-sm bg-rose-200"
                            >
                                {item}
                            </div>

                        ))}
                    </div>

                    <h1 className="card-title text-white font-bold">
                        Proyecto escolar UPQ
                    </h1>
                    <div className="container-description px-2 m-3 text-white" >
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
