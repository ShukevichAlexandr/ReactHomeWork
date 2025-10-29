type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
  	setCurrentText: React.Dispatch<React.SetStateAction<string>>; // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = ({ currentText, setCurrentText }: InputPropsType) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentText(event.target.value); // Устанавливаем новое состояние input
    };

	return (
	<input id={'hw04-input'} type="text" value={currentText} onChange={onChangeHandler} />
	);
};
