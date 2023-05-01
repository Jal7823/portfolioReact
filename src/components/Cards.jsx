function Cards({title,description,img,link}) {
  return (
    <>
      <a href={link} className="mt-4 cursor-pointer " >
        <div className=" flex flex-wrap flex-col justify-center align-middle m-4">
          <img
            className="rounded mb-4"
            style={{ width: "400px",height:'auto',margin:'auto' }}
            src={img}
            alt=""
          />
          <h5 className="text-xl3 text-bgOrange text-center font-semibold mt-4">
            {title.toUpperCase()}
          </h5>
          
          <p className=" text-bgWhite text-center w-[35rem]">{description}</p>
        </div>
      </a>
    </>
  );
}

export default Cards;
