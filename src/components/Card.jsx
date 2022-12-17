import { Image } from "@chakra-ui/react";
import "./style/Card.css"
function Card({ info }) {
    let tagles = info.tag
    if(info){
        return (
            <a href={info.link} target="_blank">
                <div className="w-60 my-2 rounded-2xl card-main hover:scale-105">
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
    }else{
        return(
            <div className="w-60 justify-items-center my-2 rounded-2xl card-main hover:scale-105">
            <Image
                src="src/img/bannerError.jpg"
                objectFit='cover'
                className="rounded-t-2xl h-28 w-full"
            />
            <div className="card-Body">

                <div className="card-tag flex justify-center mx-2">
                        <div className="mt-2 mx-1 px-2 rounded-md text-sm bg-rose-200">
                            Error
                        </div>
                </div>
                <h1 className="card-title m-0 text-white text-center font-bold">
                Project not found
                </h1>
                <div className="container-description text-center m-0 py-4 text-white" >
                    <p>
                    Incorrect or incomplete name
                    </p>
                </div>
            </div>
        </div>
        )     
    }
    
}
export default Card;
