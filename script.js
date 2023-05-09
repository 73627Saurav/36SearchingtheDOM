// Change the card title to red
/* let ctitle = document.getElementsByClassName("card-title")[0]
ctitle.style.color = "red" */

/* let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "orange" */

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"
console.log(ctitles)

document.querySelector(".this").style.color = "magenta"
document.querySelector(".this").style.background = "pink"
/* 
document.querySelectorAll() is a JavaScript method that returns a list of all the elements within the document that match a specified CSS selector. It returns a static NodeList object

syntax -> document.querySelectorAll(selector);

Here, selector is a string that specifies the CSS selector used to match the elements. This can be any valid CSS selector, such as div, .my-class, #my-id, input[type="text"], etc.

The querySelectorAll() method returns all elements that match the specified selector, regardless of their position in the DOM tree. If no elements match the selector, an empty NodeList is returned. */

console.log(document.getElementsByTagName("a"))
console.log("----------end----------")
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log("----------end----------")
console.log(document.getElementsByName("search"))
console.log("----------end----------")
 
/*
DOM
DOM stands for Document Object Model, which is a programming interface for web documents. It represents the HTML or XML document as a tree structure, where each element, attribute, and piece of text in the document is a node in the tree.

In the DOM, each node can be accessed and manipulated using JavaScript. This allows developers to dynamically update the content and style of web pages based on user interactions or other events.

The DOM provides a set of standard methods and properties that can be used to navigate and manipulate the document tree. For example, you can use the getElementById() method to access an element with a specific ID, the querySelectorAll() method to select a group of elements based on a CSS selector, or the innerHTML property to get or set the HTML content of an element.

The DOM is a critical component of web development, as it enables developers to create interactive, dynamic, and responsive web pages that can respond to user actions and provide a richer user experience. */