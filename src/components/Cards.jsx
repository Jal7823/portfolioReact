function Cards({title,description,img}) {
  return (
    <>
      <a href="#" className="mt-4 cursor-pointer">
        <div className=" flex flex-wrap flex-col justify-center align-middle m-4">
          <img
            className="rounded mb-4"
            style={{ width: "400px",height:'auto' }}
            src={img}
            alt=""
          />
          <h5 className="text-xl3 text-bgOrange text-center font-semibold ">
            {title.toUpperCase()}
          </h5>
          <p className="text-center text-bgWhite ">{description}</p>
        </div>
      </a>
    </>
  );
}

export default Cards;
