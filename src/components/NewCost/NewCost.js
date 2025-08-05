import CostForm from "./CostFrom";
import "./NewCost.css"

function NewCost(props) {

    const onSaveForm = (inputCostData) => {
        const costData = {
            ...inputCostData
        }

        props.onAddCost(costData);
    };

    return (
        <div className="new-cost">
            <CostForm onSaveForm={onSaveForm}/>
        </div>
    );
}

export default NewCost;