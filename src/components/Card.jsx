import { Image } from "@chakra-ui/react";
import "./style/Card.css"
function Card({ info }) {
    let tagles = info.tag
    return (
        <a href={info.link} target="_blank">
            <div className="w-64 my-3 rounded-2xl card-main hover:scale-105">
                <Image
                    src={info.banner}
                    objectFit='cover'
                    className="rounded-t-2xl h-28 w-full"
                />
                <div className="card-Body">

                    <div className="card-tag flex mx-2">
                        {
                        tagles.map((tagles) => (
                            <div key={info.id} className="mt-2 mx-1 px-2 rounded-md text-sm bg-rose-200">
                                {tagles}
                            </div>
                        ))
                        }
                    </div>

                    <h1 className="card-title text-white font-bold">
                        {info.title}
                    </h1>
                    <div className="container-description text-white" >
                        <p>
                            {info.description}
                        </p>
                    </div>
                </div>
            </div>
        </a>

    );
}
export default Card;
