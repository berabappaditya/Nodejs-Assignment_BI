//importing htttp and url modules
const http = require("http");
const url = require("url");

const fs = require("fs");
//importing routers
const totalAge = require("./routers/totalAge");
const showVegList = require("./routers/showVegList");
const mathCal = require("./routers/mathCal");

//creating server with http module
http
  .createServer((req, res) => {
    const path = req.url;
    console.log(path);
    //parsing url path to objecdct
    const queryparamObject = url.parse(path, true).query;
    console.log(queryparamObject);
    if (path.includes("calculateAge")) {
      const year = queryparamObject.year;
      const month = queryparamObject.month;
      const date = queryparamObject.date;
      const name = queryparamObject.name;
      totalAge.totalAgeRoute(year, month, date, name, res);
    } else if (path.includes("vegetables")) {
      const vegsDataPath = `${__dirname}/data/vegtableData.json`;
      console.log(vegsDataPath);
      showVegList.vegList(vegsDataPath, res);
    } else if (path.includes("metrics")) {
      const object = queryparamObject.object;
      const metric = queryparamObject.metric;
      const radius = queryparamObject.radius;
      mathCal.calculateMetrics(object, metric, radius, res);
    } else {
      res.write(
        "Error occurred please input This URL: http://localhost:8080/calculateAge?year=1998&month=11&date=23&name=john"
      );
      res.end();
    }
  })
  .listen(8080);
