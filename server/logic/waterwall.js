const getMaxWater = walls => {
  let maxTrappedWater = 0;
  const maxTrappedWaterBoundary = { left: 0, right: 0 };

  let currTrappedWater = 0;
  let currTrappedWaterBoundary;

  let currWallWater = 0;

  const left = getLeftMaxWallHeights(walls); // left max wall heights
  const right = getRightMaxWallHeights(walls); // right max wall heights

  for (let i = 1; i < walls.length - 1; i += 1) {
    if (currTrappedWaterBoundary === undefined) {
      currTrappedWaterBoundary = {
        right: right[i].idx,
        left: left[i].idx
      };
    }
    if (
      right[i].idx === currTrappedWaterBoundary.right &&
      left[i].idx === currTrappedWaterBoundary.left
    ) {
      currWallWater = Math.min(left[i].height, right[i].height) - walls[i];
      if (currWallWater < 0) {
        currWallWater = 0;
      }
      currTrappedWater += currWallWater;
    } else {
      if (maxTrappedWater < currTrappedWater) {
        maxTrappedWater = currTrappedWater;
        maxTrappedWaterBoundary.right = currTrappedWaterBoundary.right;
        maxTrappedWaterBoundary.left = currTrappedWaterBoundary.left;
      }
      currWallWater = Math.min(left[i].height, right[i].height) - walls[i];
      if (currWallWater < 0) {
        currWallWater = 0;
      }
      currTrappedWater = currWallWater;
    }
    currTrappedWaterBoundary.right = right[i].idx;
    currTrappedWaterBoundary.left = left[i].idx;
  }

  if (maxTrappedWater < currTrappedWater) {
    maxTrappedWater = currTrappedWater;
    maxTrappedWaterBoundary.right = currTrappedWaterBoundary.right;
    maxTrappedWaterBoundary.left = currTrappedWaterBoundary.left;
  }

  return [
    maxTrappedWaterBoundary.left + 1,
    maxTrappedWaterBoundary.right + 1,
    maxTrappedWater
  ];
};
module.exports = {
  getMaxWater
};

function getRightMaxWallHeights(walls) {
  const right = [];
  for (let i = walls.length - 2; i > 0; i -= 1) {
    if (i === walls.length - 2 || right[i + 1].height <= walls[i + 1]) {
      right[i] = { height: walls[i + 1], idx: i + 1 };
    } else {
      right[i] = right[i + 1];
    }
  }
  return right;
}

function getLeftMaxWallHeights(walls) {
  const left = [];
  for (let i = 1; i < walls.length - 1; i += 1) {
    if (i === 1 || left[i - 1].height <= walls[i - 1]) {
      left[i] = { height: walls[i - 1], idx: i - 1 };
    } else {
      left[i] = left[i - 1];
    }
  }
  return left;
}
