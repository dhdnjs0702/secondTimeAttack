import React from "react";

const List = ({ list, setList }) => {
  const deleteBtnHandler = (selectedNation) => {
    const filterdList = list.filter((e) => {
      return selectedNation.name !== e.name;
    });
    setList(filterdList);
  };
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>국가명</td>
            <td>금메달</td>
            <td>은메달</td>
            <td>동메달</td>
            <td>총메달</td>
          </tr>
        </thead>
        <tbody>
          {list
            .sort((a, b) => b.geum - a.geum)
            .map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.geum}</td>
                  <td>{e.eun}</td>
                  <td>{e.dong}</td>
                  <td>{e.geum + e.eun + e.dong}</td>
                  <td>
                    <button onClick={() => deleteBtnHandler(e)}>삭제</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
