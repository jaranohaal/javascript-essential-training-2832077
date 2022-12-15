//Book class

class Book{
    constructor(
        pageAt,
        totalPages,
        genre,
        author,
        datePublished
    ){
        this.pageAt = pageAt;
        this.totalPages = totalPages;
        this.genre = genre,
        this.author = author,
        this.datePublished = new Date(datePublished),
        this.ageSincePublished = this.getAge()   
    }
    getAge(){
        let today = new Date();
        let elapsedAge = today - this.datePublished;
        elapsedAge = Math.floor(elapsedAge/(60*60*24*365*1000));
        return elapsedAge;       
    }
    turnPage(){
        this.pageAt ++;
    }
    closeBook(){
        this.pageAt = 0;
    }
    goToPage(page){
        this.pageAt = page;
    }

}

export default Book;