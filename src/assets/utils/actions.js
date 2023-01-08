export const encriptar = (mensaje) => {
	let resultado = [];
	for (let i = 0; i < mensaje.length; ++i) {
		let codigo = mensaje.charCodeAt(i) - "a".charCodeAt(0);
		let nuevoCodigo = 25 - codigo + "a".charCodeAt(0);
		resultado.push(String.fromCharCode(nuevoCodigo));
	}
	return resultado.join("");
};
