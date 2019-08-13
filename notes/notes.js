const Attraction = props => {
  return (
    <div auth={props.auth} key={props.attraction.id}>
      <Link
        auth={props.auth.token}
        to={`/attractions/${props.attraction.url_name}`}
        key={props.attraction.id}
      >
        <img 
          alt={props.attraction.name} 
          src={props.attraction.image_url} 
        />
        <h1>{props.attraction.name}</h1>
      </Link>
      <StarRatings rating={props.attraction.average_rating} />
    </div>
  );
};

const Attraction = ({ auth, attraction }) => {
  return (
    <div auth={auth} key={attraction.id}>
      <Link
        token={auth.token}
        to={`/attractions/${attraction.url_name}`}
        key={attraction.id}
      >
        <img alt={attraction.name} src={attraction.image_url} />
        <h1>{attraction.name}</h1>
      </Link>
      <StarRatings rating={attraction.average_rating} />
    </div>
  );
};