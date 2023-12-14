class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        if (value <= 0) {
            this._state = 0;
        } else if (value >= 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
        this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(book => book[type] === value)
        return book || null;
    }

    giveBookByName(bookName) {
        let book = this.findBookBy("name", bookName);
        if (!book) return null;
        this.books = this.books.filter((item) => item.name !== bookName);
        return book;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }    
    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        };
        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        };
        this.marks[subject].push(mark)
    }

    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        }
        return Number((this.marks[subject].reduce((sum, current) => sum + current, 0) / this.marks[subject].length).toFixed(2));
    }

    getAverage() {
        let subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        }
        return Number((subjects.reduce((sum, current) => sum + this.getAverageBySubject(current), 0) / subjects.length).toFixed(2));
    }
}