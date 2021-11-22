import { useState } from "react";

const IterationSample = () => {
  const names = ["snowman", "ice", "snow", "blow"];

  const newArray = names.map((v, i) => {
    return `test${v}`;
  });

  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    alert(data);
  };
  return (
    <ul>
      <input onChange={handleChange} />
      <button onClick={handleClick}>click</button>
      {/* <li>snowman</li>
      <li>ice</li>
      <li>snow</li>
      <li>blow</li> */}

      {/* -- for문 */}
      {names.map((name, i) => (
        <li key={i}>{name}입니다</li>
      ))}
    </ul>
  );
};

export default IterationSample;

// 프로그래밍 패러다임

// 명령형(how) : 어떻게(객체지향) -> 함수형(what) : 무엇을(함수)

// for문 -> map, filter
// 메서드 체이닝?
// programers 코딩문제
// 채용공고보면서 이 회사가 어떤 기술을 사용하는지 요즘 많이 쓰는게 뭔지 알수있음.


11/20/2021

1. asp.net
2. c#
3. define library | API | Interface
4. js | JQuery
5. ES6 , 이후 업데이트, 최신 내용 + JQuery 대신 쓸수있는 새로운 기술들

+ editor 

-------

11/21/2021

1. 강의 시작 (블록체인/AI/..)
(2. 최신 트랜드 기술들 -> 강의 다듣고나서 하자)
2. 트랜드코리아
3. Editor
4. save research value


11/22/2021

1. 저녁 React (깃허브도 할듯?)
