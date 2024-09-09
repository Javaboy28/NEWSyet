const NewsItems = ({title,description,url,src}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth:"345px"}}>
      <img src={src?src:"https://t4.ftcdn.net/jpg/05/83/34/23/360_F_583342300_bqjWyiEGTRuP0arzfqFTXUkQu1V5oz7z.jpg " } style={{height:"200px", width:"325px"}}   className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)+"..."}</h5>
        <p class="card-text">{description?description.slice(0,90):"Click below to read this"}</p>
       
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
