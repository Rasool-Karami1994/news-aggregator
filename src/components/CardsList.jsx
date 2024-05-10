import Card from "./Card";

const CardsList = (props) => {
  const { data } = props;
  return (
    <div className="cardsList-container">
      {data?.length ? (
        data?.map((item) => <Card key={item?.urlName} props={item} />)
      ) : (
        <h4>Empty list</h4>
      )}
    </div>
  );
};

export default CardsList;
