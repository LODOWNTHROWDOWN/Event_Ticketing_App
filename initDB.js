const eventDB = require('./routes/dbConnection.js');

const Event = eventDB.getModel();

(async() => {
 
    await Event.deleteMany({});

    let event1 = new Event({
        name: ' Tech Innovators Conference 2024',
        description: 'A premier gathering for technology professionals and enthusiasts to explore the latest in tech innovation, featuring keynote speakers, workshops, and networking opportunities.',
        date: new Date('2024-03-15'),
        time: '09:00 AM',
        location: 'Convention Center, Silicon Valley, CA',
        ticketPrice: 299.99,
        ticketsAvailable: 500,
        status: 'Available'
    });

    let event2 = new Event ({
        name: 'Jazz Under The Stars',
        description: 'An enchanting evening of live jazz music under the night sky, featuring performances by renowned jazz musicians, gourmet food, and fine wine.',
        date: new Date('2024-06-20'),
        time: '07:00 PM',
        location: 'Riverside Park, New Orleans, LA',
        ticketPrice: 59.99,
        ticketsAvailable: 300,
        status: 'Available'
    });

    let event3 = new Event ({
        name: 'Culinary World Tour Festival',
        description: 'A food lover\'s dream event, showcasing exquisite dishes from around the globe, cooking demonstrations by celebrity chefs, and culinary workshops.',
        date: new Date('2024-05-05'),
        time: '11:00 AM',
        location: 'City Expo Grounds, Chicago, IL',
        ticketPrice: 49.99,
        ticketsAvailable: 800,
        status: 'Available'
    });

    let event4 = new Event ({
        name: 'Marathon for Charity 2024',
        description: 'Join us for a marathon run through the heart of the city to raise funds for charity. Includes categories for all ages and fitness levels, with entertainment and refreshments provided.',
        date: new Date('2024-09-10'),
        time: '06:00 AM',
        location: 'Times Square, New York, NY',
        ticketPrice: 25.99,
        ticketsAvailable: 1000,
        status: 'Available'
    });

    let event5 = new Event ({
        name: 'The Great Fantasy Book Convention',
        description: 'A must-attend event for fantasy book lovers! Meet your favorite authors, discover new books, attend signings, and participate in panel discussions on the latest in fantasy literature.',
        date: new Date('2024-11-23'),
        time: '10:00 AM',
        location: 'Literature Hall, Seattle, WA',
        ticketPrice: 39.99,
        ticketsAvailable: 400,
        status: 'Available'
    });

    await Promise.all([
        event1.save(),
        event2.save(),
        event3.save(),
        event4.save(),
        event5.save()
    ]);

    let currentEvents = await Event.find({});

    console.log(currentEvents);

    process.exit();
})();