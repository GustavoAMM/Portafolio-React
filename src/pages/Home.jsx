import Body from '../components/Body'
import Slidebar from '../components/Sidebar'
function Home() {
    return <div className='flex'>
        <div className='w-4/5'>
            <Body></Body>
        </div>
        <div className='w-1/5 mx-6'>
            <Slidebar></Slidebar>
        </div>
    </div>
}
export default Home