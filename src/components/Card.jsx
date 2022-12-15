import { Image } from "@chakra-ui/react";
import "./style/Card.css"
function Card({tag,title,description,banner,link}) {
    console.log(tag)
    return (
        <a href={link}>
            <div className="w-64 p-0 my-2 rounded-2xl card-main hover:scale-105">
                <Image
                    src={banner}
                    objectFit='cover'
                    className="rounded-t-2xl h-28 w-full"
                />
                <div className="card-Body">

                    <div className="card-tag flex mx-2">
                        {tag.map((item) => (
                            <div
                                key={item}
                                className="mt-2 mx-1 px-2 rounded-md text-sm bg-rose-200"
                            >
                                {item}
                            </div>

                        ))}
                    </div>
                    

                    <h1 className="card-title text-white font-bold">
                        {title}
                    </h1>
                    <div className="container-description text-white" >
                        <p>
                          {description}
                        </p>
                    </div>
                </div>
            </div>
        </a>

    );
}
export default Card;
