export function getPastWeek(fechaActual) {
  var lastWeek = new Date();
  lastWeek.setDate(fechaActual.getDate() - 7);
  return lastWeek;
}

export function convertDateToMiliseconds(date) {
    var tokens = date.split("-");
    var year = parseInt(tokens[0]);
    var month = parseInt(tokens[1]);
    var day = parseInt(tokens[2]);
    var fecha = Date.UTC(year, month - 1, day);
    return fecha;
  }

