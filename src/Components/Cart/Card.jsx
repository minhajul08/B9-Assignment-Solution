const Card = ({item}) => {
    const {image,description,title} = item;
    return (
        <div className="card  bg-base-100 shadow-xl space-y-5">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-actions mx-5">
      <button className="btn bg-orange-400 border-0">{title}</button>
    </div>
    <p className="mx-4">{description}</p>
  </div>
    );
};

export default Card;