var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mapGuards_1 = require("wa-map-optimizer/dist/guards/mapGuards");
const fs_1 = __importDefault(require("fs"));

function isMapFile(filePath) {
  if (!filePath.endsWith(".json") && !filePath.endsWith(".tmj")) {
    return false;
  }
  const object = JSON.parse(fs_1.default.readFileSync(filePath).toString());

  const parsedMap = mapGuards_1.isMap.safeParse(object)
  console.log(parsedMap)
  return parsedMap.success;
}

console.log(isMapFile('../maps/map.json'))