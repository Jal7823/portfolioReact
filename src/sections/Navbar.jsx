function Navbar() {
  return (
    <div className="hidden md:block">
      <div className="flex justify-between mr-4 mt-4 align-middle ">
        <img className="ml-3" style={{width:'50px',heigth:'auto'}} src="https://jalberth.pythonanywhere.com/static/img/logo.png" alt="" />

        <div className="">
          <ul className="flex text-bgWhite">
            <li className="ml-3 text-bgOrange hover:text-bgWhite "><a href="#description">About me</a></li>
            <li className="ml-3 text-bgOrange hover:text-bgWhite "><a href="#certifications">Certifications</a></li>
            <li className="ml-3 text-bgOrange hover:text-bgWhite "><a href="#projects">Projects</a></li>
            <li className="ml-3 text-bgOrange hover:text-bgWhite "><a href="#form">Contact me</a></li>
            <li className="ml-3 text-bgOrange hover:text-bgWhite "><a href="#curriculum">Curriculum</a></li>
          </ul>
        </div>
      </div>
    </div>

  



  )
}

export default Navbar