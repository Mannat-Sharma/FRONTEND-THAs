var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
                { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
                { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

for (i=0; i<library.length;i++){
    if (library[i].readingStatus){
        console.log("Already read the book","'" + library[i].title + "'","by", library[i].author)
    }else{
        console.log("'"+library[i].title+"'","by",library[i].author,"is still left to be read.")
}
}
