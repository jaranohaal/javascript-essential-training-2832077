//Script for Book challenge
import Book from "./Book.js"

const jimihendrix = new Book(
    0,
    356,
    "memoir",
    "Jimi Hendrix",
    "2021-02-28",

);
const nothingLastsForever = new Book(
    0,
    350,
    "detective",
    "Sidney Sheldon",
    "1994-01-01"
);

console.log("Jimi Hendrix imaginary memoir:", jimihendrix);
console.log("Nothing Lasts Forever by Sidney Sheldon:", nothingLastsForever);