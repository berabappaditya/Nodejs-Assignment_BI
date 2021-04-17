const fs = require("fs");

/**
 *
 * @param {*} vegsDataPath
 * @param {*} res
 */
const vegList = (vegsDataPath, res) => {
  fs.readFile(vegsDataPath, (err, data) => {
    const perseData = JSON.parse(data);
    console.log("!!!!!this is parse data", perseData);
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(perseData));
    res.end();
  });
};
module.exports.vegList = vegList;
