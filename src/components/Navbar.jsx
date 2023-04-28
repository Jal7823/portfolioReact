function Navbar() {
  return (
    <div className="">
        <div className="flex justify-between mr-4 mt-4 align-middle ">
            <img className="ml-3" style={{width:'50px',heigth:'auto'}} src="https://jalberth.pythonanywhere.com/static/img/logo.png" alt="" />

            <div className="">
                <ul className="flex text-bgWhite">
                    <li className="ml-3 text-bgOrange hover:text-bgWhite "><a href="">About me</a></li>
                    <li className="ml-3 text-bgOrange hover:text-bgWhite "><a href="">Certifications</a></li>
                    <li className="ml-3 text-bgOrange hover:text-bgWhite "><a href="">Projects</a></li>
                    <li className="ml-3 text-bgOrange hover:text-bgWhite "><a href="">Contact me</a></li>
                    <li className="ml-3 text-bgOrange hover:text-bgWhite "><a href="">Curriculum</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar