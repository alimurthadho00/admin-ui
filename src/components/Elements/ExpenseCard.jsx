import Card from "./Card";
import Icon from "./Icon";

function ExpenseCard({ expense }) {
  const iconMap = {
    housing: <Icon.House size={25} />,
    food: <Icon.Food size={25} />,
    transportation: <Icon.Transport size={25} />,
    entertainment: <Icon.Movie size={25} />,
    shopping: <Icon.Shopping size={25} />,
    others: <Icon.Other size={25} />,
  };

  return (
    <Card
      desc={
        <div className="overflow-hidden rounded-lg">
          {/* ================= HEADER ================= */}
          <div className="bg-[#FAFAFA] px-4 py-3 border-b border-[#ECECEC]">
            <div className="flex justify-between items-start">
              {/* LEFT */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-md bg-[#EFEFEF] flex justify-center items-center text-[#8E8E8E]">
                  {iconMap[expense.category]}
                </div>

                <div className="ml-3">
                  <div className="capitalize text-[14px] text-[#8A8A8A] font-medium leading-none">
                    {expense.category}
                  </div>

                  <div className="text-[18px] font-bold text-[#1E1E1E] leading-6">
                    ${expense.amount}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <div className="flex justify-end items-center gap-1">
                  <span className="text-[14px] font-semibold text-[#666]">
                    {expense.percentage}%
                  </span>

                  {expense.trend === "up" ? (
                    <div className="text-special-red">
                      <Icon.ArrowUp size={15} />
                    </div>
                  ) : (
                    <div className="text-special-green">
                      <Icon.ArrowDown size={15} />
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-[#A7A7A7] mt-1">
                  Compare to the last month
                </div>
              </div>
            </div>
          </div>

          {/* ================= BODY ================= */}

          <div className="bg-white">
            {expense.detail.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-start px-4 py-3 ${
                  index !== expense.detail.length - 1
                    ? "border-b border-[#ECECEC]"
                    : ""
                }`}
              >
                {/* Kiri */}
                <div>
                  <div className="font-semibold text-[14px] text-gray-01">
                    {item.item}
                  </div>
                </div>

                {/* Kanan */}
                <div className="text-right">
                  <div className="font-bold text-[15px] text-gray-01">
                    ${item.amount}
                  </div>

                  <div className="mt-1 text-[12px] text-[#A8A8A8]">
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}

export default ExpenseCard;