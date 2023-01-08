import { useState } from "react";
import "./App.css";
import { TableCard } from "./TableCard";

function App() {
	const [cardList, setCardList] = useState([]);
	const [visibleButton, setVisibleButton] = useState(true);
	const [classCard, setClassCard] = useState("creditCard");
	const months = [
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
	];
	const years = [];
	const year = new Date().getFullYear() - 2000;
	for (let i = year; i <= year + 10; i++) {
		years.push(i);
	}
	const initialForm = {
		cardNumber01: "",
		cardNumber02: "",
		cardNumber03: "",
		cardNumber04: "",
		cardName: "",
		cardExpirationMonth: "",
		cardExpirationYear: "",
		ccvNumber: "",
	};
	const [form, setForm] = useState(initialForm);
	let valoresAceptados = /^[0-9]+$/;
	let aceptedName = /^[a-zA-Z\s]+$/;

	const showBack = () => {
		setClassCard("creditCard active");
	};
	const showFront = () => {
		setClassCard("creditCard");
	};

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeNumber = (e) => {
		if (e.target.value.match(valoresAceptados) || e.target.value === "") {
			handleChange(e);
		}
	};

	const handleChangeName = (e) => {
		if (e.target.value.match(aceptedName) || e.target.value === "") {
			handleChange(e);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			form.cardNumber01.length < 4 ||
			form.cardNumber02.length < 4 ||
			form.cardNumber03.length < 4 ||
			form.cardNumber04.length < 4
		) {
			alert("Debe escribir los 16 dígitos de la Tarjeta de Crédito...");
			return;
		}

		if (form.cardName === "") {
			alert("Debe escribir el nombre que aparece en la Tarjeta de Crédito...");
			return;
		}

		if (form.cardExpirationMonth === "") {
			alert(
				"Debe seleccionar el mes en el que expira la Tarjeta de Crédito..."
			);
			return;
		}
		if (form.cardExpirationYear === "") {
			alert(
				"Debe seleccionar el Año en el que expira la Tarjeta de Crédito..."
			);
			return;
		}

		if (form.ccvNumber.length < 3) {
			alert(
				"Debe escribir el código de Seguridad que se encuentra al respaldo de la Tarjeta de Crédito..."
			);
			return;
		}
		cardList.push(form);
		showFront();
		setVisibleButton(false);
		setTimeout(() => {
			setForm(initialForm);
			setVisibleButton(true);
		}, 2000);
	};

	return (
		<div className="App">
			<header className="App-header"></header>

			<article className="espacio01">
				<div className="contentCard">
					<div className={classCard} id="idCard">
						<div className="frontCard">
							<div className="data">
								<div className="dataNumbers">
									<p className="numberCard">{form.cardNumber01}</p>
									<p className="numberCard">{form.cardNumber02}</p>
									<p className="numberCard">{form.cardNumber03}</p>
									<p className="numberCard">{form.cardNumber04}</p>
								</div>
								<div className="contentData2">
									<p className="nameCard">{form.cardName}</p>
									<p className="expirationDate">
										<span className="monthExpirate">
											{form.cardExpirationMonth}
										</span>
										/
										<span className="yearExpirate">
											{form.cardExpirationYear}
										</span>
									</p>
								</div>
							</div>
						</div>
						<div className="backCard">
							<p className="ccvNumber">{form.ccvNumber}</p>
						</div>
					</div>
				</div>

				<div className="contentCard">
					<form className="cardForm" onSubmit={handleSubmit} id="cardForm">
						<div className="dataGroup">
							<label htmlFor="inputNumber">Número de la Tarjeta</label>
							<div className="numbersGroup">
								<div className="boxNumbers">
									<input
										type="text"
										id="inputNumber"
										maxLength="4"
										name="cardNumber01"
										onChange={handleChangeNumber}
										value={form.cardNumber01}
										onFocus={showFront}
									/>
								</div>
								<div className="boxNumbers">
									<input
										type="text"
										id="inputNumber"
										maxLength="4"
										name="cardNumber02"
										onChange={handleChangeNumber}
										value={form.cardNumber02}
										onFocus={showFront}
									/>
								</div>
								<div className="boxNumbers">
									<input
										type="text"
										id="inputNumber"
										maxLength="4"
										name="cardNumber03"
										onChange={handleChangeNumber}
										value={form.cardNumber03}
										onFocus={showFront}
									/>
								</div>
								<div className="boxNumbers">
									<input
										type="text"
										id="inputNumber"
										maxLength="4"
										name="cardNumber04"
										onChange={handleChangeNumber}
										value={form.cardNumber04}
										onFocus={showFront}
									/>
								</div>
							</div>
						</div>
						<div className="dataGroup">
							<label htmlFor="inputName">Nombre en la Tarjeta</label>
							<input
								type="text"
								id="inputName"
								name="cardName"
								maxLength="30"
								placeholder="Nombre en la Tarjeta"
								onChange={handleChangeName}
								value={form.cardName}
								onFocus={showFront}
							/>
						</div>
						<div className="dataGroup3">
							<div className="dataGroup expiration">
								<label htmlFor="expMonth">Fecha de Expiración</label>
								<div className="dataGroup3">
									<div className="groupSelect">
										<select
											name="cardExpirationMonth"
											onChange={handleChange}
											onFocus={showFront}
											value={form.cardExpirationMonth}
										>
											<option defaultValue>Mes</option>
											{months.map((month) => (
												<option key={month} value={month}>
													{month}
												</option>
											))}
										</select>
									</div>
									<div className="groupSelect">
										<select
											name="cardExpirationYear"
											onChange={handleChange}
											onFocus={showFront}
											value={form.cardExpirationYear}
										>
											<option defaultValue>Año</option>
											{years.map((year) => (
												<option key={year} value={year}>
													{year}
												</option>
											))}
										</select>
									</div>
								</div>
							</div>
							<div className="ccvGroup">
								<label htmlFor="ccvInput">CCV</label>
								<input
									type="text"
									maxLength="3"
									id="ccvInput"
									name="ccvNumber"
									value={form.ccvNumber}
									onFocus={showBack}
									onBlur={showBack}
									onChange={handleChangeNumber}
								/>
							</div>
						</div>
						{visibleButton ? (
							<div className="contentSubmit">
								<input type="submit" value="Enviar" className="submitButton" />
							</div>
						) : (
							<div className="contentSubmit">
								<div className="submitButtonHidden">---</div>
							</div>
						)}
					</form>
				</div>
				{cardList.length > 0 ? (
					<div>
						<TableCard cardList={cardList} />
					</div>
				) : (
					<div className="contentTable">
						<div className="Table">
							<p className="rowTable">
								<span className="titleTable">No hay Datos para mostrar</span>
							</p>
						</div>
					</div>
				)}
			</article>
		</div>
	);
}

export default App;
