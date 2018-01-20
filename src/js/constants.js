export const CELL_SIZE = "20px";

const DISTRICT_COLORS = [
  "#D8334A",
  "#48CFAD",
  "#4FC1E9",
  "#FFCE54",
  "#AC92EC",
  "#FC6E51",
  "#BAA286",
];

export const GET_DISTRICT_COLOR = districtCode => DISTRICT_COLORS[parseInt(districtCode.split("-")[1])];