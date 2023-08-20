import React from 'react';

// export type InputPropsType = {
// 	v

	// currentText: any // НУЖНО ПРОТИПИЗИРОВАТЬ
	// setCurrentText: any // НУЖНО ПРОТИПИЗИРОВАТЬ
// };
//
// export const Input = (props: InputPropsType) => {
// 	const onChangeHandler = (event: 'НУЖНО ПРОТИПИЗИРОВАТЬ') => {
// // 		// НУЖНО ДОПИСАТЬ
// 	};
//

// 	);
// };



export type InputPropsType = {
	value: string;
	onChange: (value: string) => void;
};

export const Input: React.FC<InputPropsType> = ({value,onChange }) => {
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		onChange(newValue);
	};

	return (
		<input id={'hw04-input'} type="text" value={value} onChange={onChangeHandler}/>
	)

	;
};