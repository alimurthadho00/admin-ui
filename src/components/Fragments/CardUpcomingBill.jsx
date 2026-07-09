import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

function CardUpcomingBill(props) {
  const { data } = props;

  const logoMap = {
    "Figma.png": <Icon.Figma size={50} />,
    "Adobe.png": <Icon.Adobe size={50} />,
  };

  const billContent = (
    <div className="flex flex-col justify-around h-full">
      {data.map((item) => (
        <div key={item.id} className="flex justify-between items-center p-3">
          {/* LEFT */}
          <div className="flex">
            <div className="bg-special-bg m-2 p-4 rounded-lg flex flex-col items-center">
              <span className="text-sm">{item.month}</span>

              <span className="text-2xl font-bold">{item.date}</span>
            </div>

            <div className="ms-3">
              <div>{logoMap[item.logo]}</div>

              <div className="font-bold -mt-4">{item.name}</div>

              <div className="text-xs">Last Charge - {item.lastCharge}</div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="border border-gray-05 rounded-lg px-4 py-2 font-bold">
              ${item.amount}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Card
      title="Upcoming Bill"
      desc={
        data.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-full text-primary">
            <CircularProgress color="inherit" size={50} enableTrackSlot />
            <span className="mt-3">Loading Data</span>
          </div>
        ) : (
          billContent
        )
      }
    />
  );
}

export default CardUpcomingBill;