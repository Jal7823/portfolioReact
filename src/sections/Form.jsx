import Titles from '../components/Titles'





function Form() {
  return (
    <div>
        <Titles title='Contact'/>
        <form className="container w-5/6 grid grid-cols-1 mx-auto mb-4 mt-4 gap-8">
            <input className="bg-bgBlack text-bgWhite outline-0 border-b-2 border-b-bgOrange rounded p-4 hover:border-b-bgBlue pointer-events-auto" type="text" placeholder="Name of company" />
            <input className="bg-bgBlack text-bgWhite outline-0 border-b-2 border-b-bgOrange rounded p-4 hover:border-b-bgBlue pointer-events-auto" type="text" placeholder=" Email" />
            <input className="bg-bgBlack text-bgWhite outline-0 border-b-2 border-b-bgOrange rounded p-4 hover:border-b-bgBlue pointer-events-auto" type="text" name="" id="" placeholder="Your messages..." />
            <input className='bg-bgOrange text-bgWhite p-2 rounded w-32 mx-auto md:w-full md:mx-auto cursor-pointer mt-8' type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form