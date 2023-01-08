import React from "react";
import "./App.css";

export const TableCard = ({ cardList }) => {
	return (
		<div className="contentTable">
			<table className="Table">
				<thead>
					<tr className="rowTable">
						<th className="titleTable">Número</th>
						<th className="titleTable">Nombre</th>
						<th className="titleTable">Vencimiento</th>
					</tr>
				</thead>
				<tbody>
					{cardList.map((el) => (
						<tr>
							<td className="colTable">
								<p>**** **** **** {el.cardNumber04}</p>
							</td>
							<td className="colTable">
								<p>{el.cardName}</p>
							</td>
							<td className="colTable">
								<p>
									{el.cardExpirationMonth} / {el.cardExpirationYear}
								</p>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
