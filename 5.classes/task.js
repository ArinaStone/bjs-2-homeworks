class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100; // начальное состояние по умолчанию
        this.type = null;
    }

    fix() {
        if (this._state < 100 && this._state > 0) {
            this._state = Math.min(this._state * 1.5, 100);
        }
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
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
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(key, value) {
        return this.books.find(book => book[key] === value) || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0];
        }
        return null;
    }
}

// Пример использования классов
const library = new Library('City Library');

// Создание книг и журналов
const book1 = new PrintEditionItem('War and Peace', '1869', 1225);
const book2 = new PrintEditionItem('1984', '1949', 328);
const magazine1 = new PrintEditionItem('Tech Today', '2023', 50);

// Добавление книг в библиотеку
library.addBook(book1);
library.addBook(book2);
library.addBook(magazine1);

// Поиск книги, изданной в 1949 году
const foundBook = library.findBookBy('releaseDate', '1949');
console.log(foundBook ? foundBook.name : 'Книга не найдена');

// Выдача книги
const borrowedBook = library.giveBookByName('1984');
console.log(borrowedBook ? `Выдана книга: ${borrowedBook.name}` : 'Книга не найдена');

// Повреждение выданной книги
borrowedBook.state = 20; // Уменьшаем состояние

// Восстановление книги
borrowedBook.fix();
console.log(`Состояние после восстановления: ${borrowedBook.state}`);

// Попытка добавить восстановленную книгу обратно в библиотеку
library.addBook(borrowedBook);
console.log(`Книги в библиотеке: ${library.books.map(book => book.name).join(', ')}`);