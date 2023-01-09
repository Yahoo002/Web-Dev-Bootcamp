const f1 = require("f1-api");

f1.getDriverInformation("russell").then(console.log);
f1.getConstructors("2022").then(console.log);
f1.getCurrentDriverStandings().then(console.log);
f1.getCurrentSeasonRacesSchedule().then(console.log);
f1.getDriverInformation("leclerc").then(console.log);
