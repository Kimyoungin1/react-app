// class x -> function 형식의 component 생성
// props : 프롭스
// children : App.js에서 component안의 자식 덩어리 (무조건 children으로 해야됨)
const MyComponent = ({ name, name2, children }) => {
  //   const name = props.name; // -> 같은 name인 경우 const { name } = props;
  //   const name2 = props.name2;
  // -> 2개를 한줄로
  //   const { name, name2 } = props;

  return (
    <div>
      <h1>hello {children}</h1>
    </div>
  );
};

export default MyComponent;
