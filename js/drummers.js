/* globals $ */



var drummer1 = {
    "id": 1,
    "name": "Glenn Kotche",
    "picture_url": "img/Drummers/glennkotcheportrait2.jpg",
    "about": "Glenn Kotche born December 31 1970 in Roselle, Illinois, United States is an American drummer and composer, best known for his involvement in the band Wilco. He was named the 40th greatest drummer of all time by Gigwise in 2008. Prior to working with Wilco, Kotche released a four-track album entitled Introducing. In 2003, he released a second solo album titled Next, featuring solo drum improvisations using homemade percussion installations. A third solo album was released in March 2006 on Nonesuch Records, entitled Mobile. This album featured a broad range of compositions for percussion.",
    "selling_points": [
        "Reccomended Listening:",
        "Taste This"

    ]

};

var drummer2 = {
    "id": 2,
    "name": "Bryan Devendorf",
    "picture_url": "img/Drummers/bryandevendorfportrait.jpg",
    "about": "Glenn Kotche born December 31 1970 in Roselle, Illinois, United States is an American drummer and composer, best known for his involvement in the band Wilco. He was named the 40th greatest drummer of all time by Gigwise in 2008. Prior to working with Wilco, Kotche released a four-track album entitled Introducing. In 2003, he released a second solo album titled Next, featuring solo drum improvisations using homemade percussion installations. A third solo album was released in March 2006 on Nonesuch Records, entitled Mobile. This album featured a broad range of compositions for percussion.",
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var drummer3 = {
    "id": 3,
    "name": "Justin Peroff",
    "picture_url": "img/Drummers/justinperoffportrait.jpg",
    "about": "Glenn Kotche born December 31 1970 in Roselle, Illinois, United States is an American drummer and composer, best known for his involvement in the band Wilco. He was named the 40th greatest drummer of all time by Gigwise in 2008. Prior to working with Wilco, Kotche released a four-track album entitled Introducing. In 2003, he released a second solo album titled Next, featuring solo drum improvisations using homemade percussion installations. A third solo album was released in March 2006 on Nonesuch Records, entitled Mobile. This album featured a broad range of compositions for percussion.",
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var drummer4 = {
    "id": 4,
    "name": "Philip Selway",
    "picture_url": "img/Drummers/philipselwayportrait.jpg",
    "about": "Glenn Kotche born December 31 1970 in Roselle, Illinois, United States is an American drummer and composer, best known for his involvement in the band Wilco. He was named the 40th greatest drummer of all time by Gigwise in 2008. Prior to working with Wilco, Kotche released a four-track album entitled Introducing. In 2003, he released a second solo album titled Next, featuring solo drum improvisations using homemade percussion installations. A third solo album was released in March 2006 on Nonesuch Records, entitled Mobile. This album featured a broad range of compositions for percussion.",
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ip`sum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var drummer5 = {
    "id": 5,
    "name": "Dan Snaith",
    "picture_url": "img/Drummers/dansnaithportrait.jpg",
    "about": "Glenn Kotche born December 31 1970 in Roselle, Illinois, United States is an American drummer and composer, best known for his involvement in the band Wilco. He was named the 40th greatest drummer of all time by Gigwise in 2008. Prior to working with Wilco, Kotche released a four-track album entitled Introducing. In 2003, he released a second solo album titled Next, featuring solo drum improvisations using homemade percussion installations. A third solo album was released in March 2006 on Nonesuch Records, entitled Mobile. This album featured a broad range of compositions for percussion.",
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ip`sum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var drummers = [drummer1, drummer2, drummer3, drummer4, drummer5];


var generateItem = function generateItem( musician ){
    $( "#drummer" + musician.id + " h2" ).text( musician.name );
    $( "#drummer" + musician.id + " img" ).attr( "src", musician.picture_url );
    $( "#drummer" + musician.id + " a" ).text( musician.selling_points );
    $( "#drummer" + musician.id + " p" ).text( musician.about );
    $( "#drummer" + musician.id + " span" ).text( musician.id );
};

var i = 0
while(i < drummers.length)
{

  generateItem(drummers[i]);


  i++;
}
