function diferencaEmDias(data1, data2) {
    let diff = data1 - data2;
    let miliDia = 24 * 60 * 60 * 1000;
    let resultado = Math.floor(diff/ miliDia);

    return Math.abs(resultado);
}