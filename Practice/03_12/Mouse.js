//Class for mouse

class Mouse{
    constructor( //Defining parameters
        color,
        dpi,
        isForGaming,
        isForWorking,
        isCozy,
        hasRGB,
        RGB,
        left,
        right,
    ){
        this.color = color;
        this.dpi = dpi;
        this.isForGaming = isForGaming;
        this.isForWorking = isForWorking;
        this. isCozy = isCozy;
        this.hasRGB = hasRGB;
        this.RGB = RGB;
        this.click = {
            left:left,
            right:right,
        }
    }
    changeDPI(dpi){
        if(this.dpi == dpi){
            console.log("These dpis are the same");
        }
        else{
            this.dpi = dpi;
            console.log("New dpi is", dpi);
        }
    }
    changeRGB(RGB){
        if(this.hasRGB){
            this.RGB = RGB;
        }
        else{
            console.log("This mouse doesnt support RGB");
        }
    }

}

export default Mouse;