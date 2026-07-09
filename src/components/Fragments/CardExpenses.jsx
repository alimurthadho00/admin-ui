import Card from "../Elements/Card";
import ExpenseCard from "../Elements/ExpenseCard";
import CircularProgress from "@mui/material/CircularProgress";

function CardExpenses({ data }) {
  return (
    <Card
      title="Expenses Comparison"
      desc={
        data.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-[500px] text-primary">
            <CircularProgress color="inherit" size={50} enableTrackSlot />
            <span className="mt-2">Loading Data</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data.map((expense, index) => (
              <ExpenseCard key={index} expense={expense} />
            ))}
          </div>
        )
      }
    />
  );
}

export default CardExpenses;