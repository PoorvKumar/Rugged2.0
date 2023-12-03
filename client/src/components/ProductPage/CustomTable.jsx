import React from "react";

const CustomTable = ({ data, classNm,classNm2 }) => {
  return (
    <div className={`container mx-auto mt-8 mb-8 ${classNm}`}>
      <table className={`min-w-full ${classNm2}`}>
        {/* <thead>
          <tr>
            <th className="py-2 px-4 border-b">Column 1</th>
            <th className="py-2 px-4 border-b">Column 2</th>
          </tr>
        </thead> */}
        <tbody>
          {data.rows.map((row,index) => (
            <tr key={index} >
              <td className="py-2 px-4 border-b bg-slate-600 min-w-fit text-gray-300 font-bold">{row.title}</td>
              <td className="py-2 px-4 border-b bg-gray-100 w-fit text-black">{row.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
