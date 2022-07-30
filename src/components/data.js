import UICard from "./Ui/card";

function Data({ data }) {
  // console.log (filterByLocation)
  return data.map((value, idx) => <UICard key={idx} values={value} />);
}

export default Data;
