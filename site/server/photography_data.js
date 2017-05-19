
/*
 * Each photography entry has it's own data, which includes a link, caption, and album Id
 * Albums are numbers, photographys have titles
 */

module.exports.photography_data = [

    {
        albumName: 'MDIA - Assignment 9 (Self Portrait)',
        photos: [
            {
                link: 'https://s3.amazonaws.com/mdia-photos/self.jpg',
                caption: 'An image of how you would like to be seen. I chose this image because it is somewhat lively and professional. Taken near Engineering Hall, Urbana, IL, USA on May 6th, 2017. Keywords: Self, engineering, professional, content'
            }
        ]
    },

    {
        albumName: 'MDIA - Assignment 8 (Free Choice)',
        photos: [
            {
                link: 'https://s3.amazonaws.com/mdia-photos/train_underground.jpg',
                caption: 'The grey of each surface in this setting adds to a cold and emotionless atmosphere depicting parts of life as an ant in a city. Taken on February 11th, 2017 in Union Station, Chicago, IL, USA. Keywords: Train, underground, Metra, cold, grey'
            }
        ]
    },

    {
        albumName: 'MDIA - Assignment 7 (Event)',
        photos: [
            {
                link: 'https://s3.amazonaws.com/mdia-photos/event0.jpg',
                caption: 'The CS@Illinois - WCS Spring banquet being set up, no guests yet! Taken in Siebel Center, Urbana, IL, USA on 4/27/2017. Keywords: Siebel, WCS, banquet'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/event1.jpg',
                caption: 'A closer shot of the event being set up, tables have been set. Taken in Siebel Center, Urbana, IL, USA on 4/27/2017. Keywords: catering, tables, empty'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/event2.jpg',
                caption: 'The electronic screen prepared for the event, also thanking corporate sponsors. Siebel, Urbana, IL, USA on 4/27/2017. Keywords: screen, monitors, corporate'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/event4.jpg',
                caption: 'The food area being prepped for guests. Siebel, Urbana, IL, USA on 4/27/2017. Keywords: food, catering, plates'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/event6.jpg',
                caption: 'An overall picture of all of the guests seated and taking part in the event. Location: Siebel, Urbana, IL, USA on 4/27/2017. Keywords: guests, full, Siebel lounge'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/event9.jpg',
                caption: 'Mid-range photo from the other side of Siebel while the event is taking place. Urbana, IL, USA on 4/27/2017. Keywords: waitress, endless, tunnel, professional'
            },
        ]
    },

    {
        albumName: 'MDIA - Assignment 6 (Illustrate Trust)',
        photos: [
            {
                link: 'https://s3.amazonaws.com/mdia-photos/siebel_geese.png',
                caption: 'A couple of geese who trust that the person walking by will not attack them (which is rare for geese!). Taken on 3/16/17 as I was walking by the southwest corner of the Siebel building in Urbana, IL, USA. Keywords: Geese, Siebel, trust, street'
            },
            {
                link: '	https://s3.amazonaws.com/mdia-photos/skipy_normal.jpg',
                caption: "My dog (Skipy) lounging about in my backyard. He has an expression illustrating happiness, trust, contentness. Taken in my backyard in Hickory Hills, IL, USA on 3/24/17. Keywords: Dog, happy, trust"
            }
        ]
    },

    {
        albumName: 'MDIA - Assignment 5 (Architecture)',
        photos: [
            {
                link: 'https://s3.amazonaws.com/mdia-photos/architecture_3.jpg',
                caption: "I went to photograph a building at Moraine Valley Community College (MVCC) and the T building caught my eye as I found it an interesting blend of brutalist and modern architecture. That's shown in this case by the bleak concrete wall and brick on the left side, and the wall of glass on the right side. T Building at MVCC, 9000 College Pkwy, Palos Hills, IL, USA - 5/18/2017. Keywords: MVCC, brutalist, modern, grass"
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/architecture_2.jpg',
                caption: 'The southwest facing side shows a brick wall hidden by trees and other greenery. The T building is used for utility works (water, electric) or a mix of technology classes. The concrete enclosement contains pumps to go along for the T building. Southwest side of T Building at MVCC, 9000 College Pkwy, Palos Hills, IL, USA - 5/18/2017: Keywords: Concrete, green, brick, bleak'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/architecture_1.jpg',
                caption: 'The east side of the building which is used as the main entrance. The entrance features a modern orange statue (background) and some information for visitors. The mix of glass and brick continues the theme of an architectural style that is both brutalist and modern. East side of T Building at MVCC, 9000 College Pkwy, Palos Hills, IL, USA - 5/18/2017: Keyword: Statue, entrance, T building'
            }
        ]
    },

    {
        albumName: 'MDIA - Assignment 4 (Documenting a Process) - Sending an item sold on Amazon/Ebay',
        photos: [
            {
                link: 'https://s3.amazonaws.com/mdia-photos/IMG_20170306_000122.jpg',
                caption: 'All items needed to fulfill an order sold on Amazon. Some kind of package needed to contain the item, with return address and sending address on it. Packing slip to be placed inside. The item itself (green dog leash in this case). And shipping supplies to tape addresses. Taken in my apartment, 903 S 1st St, Champaign, IL, USA - 3/5/2017'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/order_email_blurred.jpg',
                caption: 'First step, getting an email notification than an item has sold and needs to be shipped. Taken on a work computer in Grainger Library, Champaign, IL, USA on 3/5/2017'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/IMG_20170305_233405.jpg',
                caption: 'Take the item that was purchased, ensuring color and size constraints. In this case we are shipping a green dog leash. This step and packing steps were done in my apartment on 3/5/2017'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/IMG_20170305_233429.jpg',
                caption: 'Putting the leash in a well-sized envelope. Light enough to keep costs down, but sturdy enough not to damage during shipping. The packaging should look as professional as possible'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/IMG_20170305_235936.jpg',
                caption: 'Printing the packing slip for the associated item - print two, one to be put inside and one to paste the address on the envelope. Taken at a work computer in Grainger Library (address above)'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/IMG_20170304_122009.jpg',
                caption: 'Retrieving the printed packing slips from a printer at Grainger Library. At this step it may also be useful to print a return address to put on the envelope'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/IMG_20170305_234325.jpg',
                caption: 'It is important to emphasize that one packing slip must go inside of the package itself, for the customer to read the order'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/IMG_20170306_000138.jpg',
                caption: 'Cutting out and taping the return address and receiving address on the envelope. Some may prefer at this stage to have a printer which prints labels that will stick on the envelope'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/IMG_20170304_125319.jpg',
                caption: 'Taking the package and sending it out through the correct delivery service. Pictured the USPS Office in Campustown - 302 E Green St, Champaign, IL, USA'
            }
        ]
    },

    {
        albumName: 'MDIA - Assignment 3 (Nature)',
        photos: [
            {
                link: 'https://s3.amazonaws.com/mdia-photos/IMG_20170217_172943.jpg',
                caption: 'Sunset during a spring evening with clear skies. Taken south of the Japan House (Urbana, IL, USA) looking west-southwest on 2/17/2017. Keywords: Sky, sunset, tree-tops, spring, orange'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/backyard_flower.png',
                caption: 'A close-up of a white and red tulip in my backyard, with part of the garden and fence in the background as a contrast. Taken on 5/17/2017 in Hickory Hills, IL, USA. Keywords: Tulip, garden, fence, still, calm'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/IMG_20170208_161201.jpg',
                caption: 'Picture of an urban landscape. Taken during one of the few snowstorms during early February. Picture shot from the 3rd floor window on the west staircase inside the Main Library, Urbana, IL, USA. Taken on February 8th, 2017. Keywords: Snow, urban, Wright St., midwest'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/geese_cropped.jpg',
                caption: 'Geese swimming in the pond while the sun sets at the Japan Gardens (Urbana, IL, USA) southeast of campus. Taken on February 17th, 2017. Keywords: Geese, animal, pond, Japan Gardens'
            }
        ]
    },

    {
        albumName: 'MDIA 293 - Assignment 2 (People)',
        photos: [
            {
                link: 'https://s3.amazonaws.com/mdia-photos/person_you_dont_know.jpg',
                caption: "Taking a picture of someone you don't know: Vivek Kaushik, who was playing the piano in the Union basement, 02/08/2017. Illini Union, Champaign, IL, USA"
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/known_person.jpg',
                caption: 'Taking a picture of someone you know: Humza Boxwalla, my roommate, before the business career fair. Taken on 02/01/2017 in my apartment, 903 S 1st St, Champaign, IL, USA'
            },
            {
                link: 'https://s3.amazonaws.com/mdia-photos/IMG_20170208_182726.jpg',
                caption: 'A fun group photo of friends at Green Observer: (left to right) Remy Crowleyfarenga, Jeeth Suresh, and Tristan Schramer. Taken during a Green Observer on 02/08/2017. Located at the University YMCA building, Urbana, IL, USA'
            }
        ]
    }

];
