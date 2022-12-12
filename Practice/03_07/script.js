/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const trashCan = {
    volume: 20,
    color: "black",
    isFull: false,

    freeTrashCan: function(){
        if (this.isFull == true){
            this.isFull = false;
            console.log("Trash can is empty now");
        }
        else{
            console.log("Trash can is already empty");
        }
    },

    putTrash: function(){
        if(this.isFull == false){
            this.isFull = true;
            console.log("You put trash into can")
        }
        else{
            console.log("Trash is already full")
        }
    },

    trash:{
        volume: 20,
        isOrganic: true,
        isStinky: true
    }
};
