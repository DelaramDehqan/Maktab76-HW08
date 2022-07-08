// Write a program that uses getter and setter to do the following:

// 1. Add fullName function with getter to print siteName and bookName
// 2. Add fullName function with setter to change the siteName and bookName value to
// W3 and CSS
// 3. Add fullName function with defineProperty , getter, setter print key siteName and
// bookName
// For Example:
// 1. console.log(site.fullName);// “ Welcome to W3Docs, Javascript book”
// 2. site.fullName = "W3 CSS"; // set fullName is executed with the given value
// console.log(site.siteName); // W3
// console.log(site.bookName); // CSS

let site = {
  siteName: "W3Docs",
  bookName: "Javascript",
  get fullName() {
    return `${this.siteName}, ${this.bookName}`;
  },
  set fullName(value) {
    [this.siteName, this.bookName] = value.split(" ");
  },
};
console.log("Welcome to" + " " + site.fullName);

site.fullName = "W3 CSS";
console.log(site.siteName);
console.log(site.bookName);
