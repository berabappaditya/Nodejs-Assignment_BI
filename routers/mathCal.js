/**
 *
 * @param {*} object
 * @param {*} metric
 * @param {*} radius
 * @param {*} res
 */
const calculateMetrics = (object, metric, radius, res) => {
  let metricValue = 0;
  if (object == "circle") {
    if (metric == "area") {
      metricValue = Math.PI * (radius * radius);
    } else {
      metricValue = "Incorrect param value 1";
    }
  } else if (object == "sphere") {
    if (metric == "area") {
      metricValue = 4 * Math.PI * (radius * radius);
    } else if (metric == "volume") {
      metricValue = (4 * Math.PI * (radius * radius * radius)) / 3;
    } else {
      metricValue = "Incorrect param value 2";
    }
  } else {
    metricValue = "Incorrect param value 3";
  }
  metricValue = Number.parseFloat(metricValue).toFixed(2);
  res.write(`The ${metric} of ${object} is ${metricValue}`);
  res.end();
};
module.exports.calculateMetrics = calculateMetrics;
