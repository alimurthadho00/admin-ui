import { useState } from "react";

function PostCard(props) {
  const [Klik, setKlik] = useState(false);

  const { title, body, ...rest } = props;
  console.log(rest);

  return (
    <div
      className="
      flex flex-col justify-between h-full
      p-3 rounded-md bg-white shadow-sm
      transition-all duration-300
      hover:scale-[1.03] hover:border hover:bg-pink-100
    "
    >
      {/* CONTENT */}
      <div className="text-center">
        <h2 className="font-bold  mb-1 text-gray-800">{title}</h2>

        <p className="text-[11px] text-gray-500 leading-tight">{body}</p>

        {/* {Object.entries(rest).map(([key, value]) => (
          <p key={key} className="text-[10px] text-gray-400">
            <span className="capitalize">{key}:</span> {value}
          </p>
        ))} */}
      </div>

      {/* BUTTON */}
      <button
        onClick={() => setKlik(!Klik)}
        className={`
          mt-3 py-1.5 text-[11px] rounded text-white
          transition-all duration-300
          ${
            Klik
              ? "bg-special-red2 hover:brightness-120"
              : "bg-gray-500 hover:bg-gray-600"
          }
        `}
      >
        {Klik ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;