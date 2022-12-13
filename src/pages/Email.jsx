import Social from '../components/Social'
import Form from '../components/Form'
function Email() {
    return <div className='flex w-full gap-8 px-8'>
        <div className='flex w-2/5  '>
            <Social ></Social>
        </div>
        <div className='w-3/5'>
            <Form ></Form>

        </div>
    </div>
}
export default Email