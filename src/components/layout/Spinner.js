import spinner from "../../assets/spinner.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      {/* <img src={spinner} alt="Loading..." className="text-center mx-auto" /> */}
      <div className="loader text-center mx-auto"></div>
    </div>
  );
}

export default Spinner;
