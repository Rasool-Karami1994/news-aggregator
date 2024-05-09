import Card from "./Card";

const CardsList = (props) => {
  const { data } = props;
  return (
    <div className="cardsList-container">
      {data?.map((item) => (
        <Card key={item?.urlName} props={item} />
      ))}
    </div>
  );
};

export default CardsList;
