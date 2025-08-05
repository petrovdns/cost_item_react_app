import { useState } from "react";
import "./CostForm.css"

function CostForm(props) {

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: ""
  // });

  const nameChangeHandler = (e) => {
    setName(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   name: e.target.value
    // });

    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: e.target.value
    //   };
    // });
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value
    // });
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const costData = {
      name: name,
      amount: amount,
      date: new Date(date)
    }

    props.onSaveForm(costData);

    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
            <label>Nume</label>
            <input type="text" onChange={nameChangeHandler} value={name}/>
        </div>
        <div className="new-cost__control">
            <label>Suma</label>
            <input type="number" onChange={amountChangeHandler} value={amount} min="0.01" step="0.01"/>
        </div>
        <div className="new-cost__control">
            <label>Data</label>
            <input type="date" onChange={dateChangeHandler} value={date} min="2019-01-01" max="2025-12-31"/>
        </div>
        <div className="new-cost__control">
            <button type="submit">Adauga Item</button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;
