const { person1, person2 } = require("./3-names.js");
const func = require("./4-utils");
const data = require("./5-alternativeFlavor");
require("./6-expotedByNode");

func(person1);
func(person2);

console.log(data);
