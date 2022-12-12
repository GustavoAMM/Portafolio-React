import Body from '../components/Body'
import Slidebar from '../components/Sidebar'
function Home(){
    return <div className='flex gap-5 px-4 items-center my-20'>
        <Body></Body>
        <Slidebar></Slidebar>
    </div>
}
export default Home