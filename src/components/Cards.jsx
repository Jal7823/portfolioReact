function Cards({title,description,img}) {
  return (
    <>
      <div className="mt-4">
        <div className=" flex flex-wrap flex-col justify-center align-middle m-4">
          <img
            className="rounded mb-4"
            style={{ width: "400px",height:'auto' }}
            src={img}
            alt=""
          />
          <h5 className="text-xl3 text-bgOrange text-center font-semibold">
            {title.toUpperCase()}
          </h5>
          <p className="text-center text-bgWhite ">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Cards;
