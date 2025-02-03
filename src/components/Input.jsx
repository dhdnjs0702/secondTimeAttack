import React, { useState } from "react";

const Input = ({ list, setList }) => {
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);
  const [nation, setNation] = useState("");
  const isExist = () => {
    return list.some((e) => {
      return e.name === nation;
    });
  };

  const addUpdate = (e) => {
    e.preventDefault();
    const newNation = {
      id: Date.now(),
      name: nation,
      geum: goldMedal,
      eun: silverMedal,
      dong: bronzeMedal,
    };
    const clickedBtn = e.target.value;
    //국가추가
    if (clickedBtn === "addBtn") {
      if (nation === "") {
        alert("국가명이 공백 입니다");
        return;
      }
      if (!isNaN(nation)) {
        alert("국가명은 문자여야 합니다");
        return;
      }
      if (isExist()) {
        alert("해당 국가명은 이미 등록되어있습니다");
        return;
      }
      setList([...list, newNation]);
    }
    //업데이트
    if (clickedBtn === "updateBtn") {
      if (!isExist()) {
        alert("업데이트할 국가가 없습니다");
        return;
      }
      const updatedList = list.map((e) => {
        if (isExist()) {
          return newNation;
        } else {
          return e;
        }
      });
      setList(updatedList);
    }
  };
  return (
    <div>
      <form>
        <table>
          <thead>
            <tr>
              <td>국가명</td>
              <td>금메달</td>
              <td>은메달</td>
              <td>동메달</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  value={nation}
                  onChange={(e) => setNation(e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  value={goldMedal}
                  onChange={(e) => setGoldMedal(+e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  value={silverMedal}
                  onChange={(e) => setSilverMedal(+e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  value={bronzeMedal}
                  onChange={(e) => setBronzeMedal(+e.target.value)}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <button value="addBtn" onClick={addUpdate}>
          국가 추가
        </button>
        <button value="updateBtn" onClick={addUpdate}>
          업데이트
        </button>
      </form>
    </div>
  );
};

export default Input;
