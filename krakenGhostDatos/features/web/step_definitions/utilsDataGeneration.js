const { faker } = require("@faker-js/faker");
const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname, "AprioriData.json");
const rawdata = fs.readFileSync(directoryPath);
const posts = JSON.parse(rawdata);

module.exports = class RandomElement {
  constructor(string) {
    this.valorRevisar = string;
  }
  get validateTypeParam() {
    if (this.valorRevisar.startsWith("$")) {
      return this.useFaker(this.valorRevisar);
    }
    if (this.valorRevisar.startsWith("#")) {
      return this.usePoolApriori(this.valorRevisar);
    }
    return this.valorRevisar;
  }
  useFaker(string) {
    const type = string.split("-")[0];
    const cantidad = string.split("-")[1] || faker.random.numeric(1);
    switch (type) {
      case "#words":
        return faker.random.words(cantidad);
      case "#paragraph":
        return faker.lorem.paragraphs(cantidad);
      case "#numbers":
        return faker.random.numeric(cantidad);
      case "#chars":
        return faker.datatype.string(cantidad);
      case "#vacio":
        return "";
      default:
        return string;
    }
  }
  usePoolApriori(string) {
    const type = string.split("-")[0];
    const random = Math.floor(Math.random() * 100);
    switch (type) {
      case "#color":
        return posts[random].color;
      case "#slug":
        return posts[random].slug;
      case "#description":
        return posts[random].description;
      case "#name":
        return posts[random].name;
      case "#image":
        return posts[random].image;
      case "#vacio":
        return "";
      default:
        return string;
    }
  }
};