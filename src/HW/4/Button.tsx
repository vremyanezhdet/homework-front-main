// type ButtonPropsType = {
//   callBack: any // НУЖНО ПРОТИПИЗИРОВАТЬ
//   name: any // НУЖНО ПРОТИПИЗИРОВАТЬ
// };
//
//
//     // НУЖНО ДОПИСАТЬ
//   };
//
//   return (
//     <button id={'hw04-button'} onClick={callBackHandler}>
//       {props.name}
//     </button>
//   );
// };



type ButtonPropsType = {
  onClick: () => void;
  name: string;
};
export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
    props.onClick();
  };
    // return <button onClick={onClick}> {children}</>button>
    return (
        <button id={'hw04-button'} onClick={callBackHandler}>
          {props.name}
        </button>
    );
  };
