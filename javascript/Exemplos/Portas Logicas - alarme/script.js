var sensor_incendio_1 = false;
var sensor_incendio_2 = false;
var maquina_ligada = true;
var alimentacao_eletrica = true;
var alarme = false;

//o alarme deve ser acionado se nao houver alimentacao ou incendio em algum dos andares

var alarme = sensor_incendio_1 || sensor_incendio_2 || !alimentacao_eletrica ? "ligado" : "desligado";

document.write(alarme);