/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

import Table from "./Table.js";

const rentedTable = new Table( // Object rentedTable of class Table
    100,
    false,
    true,
    "Rented Home"
);

console.log(rentedTable);

function createArticle(table){ // Function creates article element
    const main = document.querySelector("main");
    
    const content = `
    <li> The size is: ${table.size}</li>
    <li> Is it comfortable? ${table.isComfortable}</li>
    <li> Is it for eating? ${table.forEating}</li>
    <li> Location: ${table.location}</li>
    `;
    const article = document.createElement("article");
    article.innerHTML = content;

    main.append(article)
}

createArticle(rentedTable);