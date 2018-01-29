const { getMaxWater } = require("../logic/waterwall");

const calcWaterWall = (req, res, next) => {
  let { walls } = req.body;
  walls = walls.split(",");
  const results = getMaxWater(walls);
  res.send({ results });
  next();
};
module.exports = {
  calcWaterWall
};
