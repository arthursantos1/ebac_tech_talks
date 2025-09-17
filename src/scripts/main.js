AOS.init();

// Armazenado da variavel a data que o evento vai ocorrer
const dataDoEvento = new Date('Sep 20, 2025 19:00:00');
// Armazenado na variavel o tempo até o dia do evento
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    // Armazenado na variavel a data do dia
    const agora = new Date();
    // Armazendo o tempo do dia atual
    const timeStampAtual = agora.getTime();

    // o tempo do dia do evento até o dia atual
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}s ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "O evento já acabou!";
    }
}, 1000);