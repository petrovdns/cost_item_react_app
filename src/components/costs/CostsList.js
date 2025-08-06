import CostItem from "./CostItem";
import "./CostsList.css"

function CostList(props) {
  if (props.costs.length === 0) {
   return <h2 className="cost-list__fallback">No purchase in the year</h2>;
  }

  return (
    <ul className="cost-list">
      {props.costs.map((object) => (
        <CostItem
          key={object.id}
          date={object.date}
          description={object.description}
          amount={object.amount}
        />
      ))}
    </ul>
  );
}

export default CostList;
