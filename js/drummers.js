/* globals $ */



var drummer1 = {
    "id": 1,
    "name": "John Bonham",
    "picture_url": "images/the-lion-the-witch-and-the-wardrobe.jpg",
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var drummer2 = {
    "id": 2,
    "name": "Glenn Kotche",
    "picture_url": "images/the-lion-the-witch-and-the-wardrobe.jpg",
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var drummer3 = {
    "id": 3,
    "name": "The Lion, The Witch, and the Wardrobe",
    "picture_url": "images/the-lion-the-witch-and-the-wardrobe.jpg",
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var drummer4 = {
    "id": 4,
    "name": "The Lion, The Witch, and the Wardrobe",
    "picture_url": "images/the-lion-the-witch-and-the-wardrobe.jpg",
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ip`sum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var drummers = [drummer1, drummer2, drummer3, drummer4];


var generateItem = function generateItem( product ){
    $( "#book" + product.id + " h1" ).text( product.name );
    $( "#book" + product.id + " h2" ).text( product.author );
    $( "#book" + product.id + " img" ).attr( "src", product.picture_url );
    $( "#book" + product.id + " h3" ).text( product.price );
    $( "#book" + product.id + " ul" ).text( product.selling_points );
    $( "#book" + product.id + " span" ).text( product.id );
};

var i = 0
while(i < books.length)
{

  generateItem(books[i]);


  i++;
}
