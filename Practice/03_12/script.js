/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Mouse from "./Mouse.js"

const mouse = { //Object mouse of Dinara
    //Parameters
    color: "pink",
    dpi: 800,
    isForGaming: false,
    isForWorking: true,
    isCozy: true,
    hasRGB: false,
    RGB:"red",
    clicks:{
        rightClick: "right",
        leftClick: "left",
    },
    //Methods
    changeDPI(dpi){
        if(this.dpi==dpi){
            console.log("These dpis are equal");
        }
        else{
            this.dpi = dpi;
            console.log("New dpi is",dpi)
        }
    },

    changeRGB(RGB){
        if(this.hasRGB){
            this.RGB=RGB;
        }
        else{
            connsole.log("This mouse does not have RGB");
        }
    }
};

const DinaraMouse = new Mouse(
    "pink",
    800,
    false,
    true,
    true,
    false,
    "red",
    "left",
    "right"
);


console.log("Dinara's mouse",DinaraMouse);
console.log("Object Dinara mouse", mouse);

DinaraMouse.changeDPI(1400);
console.log("Dinara's mouse after change", DinaraMouse);