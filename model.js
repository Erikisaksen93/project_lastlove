const model = {
    login: {
        username: '',
        password: '',
    },

    register: {
        firstname: '',
        surname: '',
        age: '',
        gender: '',
        genderWanted: '',
        zipcode: '',
        email: '',
        phone: '',
        userpassword: '',
    },

    users: [
        {
            id: 0,
            username: 'Erik.isaks1@gmail.com',
            password: 123,
            firstname: 'Erik',
            surname: 'Isaksen',
            age: 28,
            gender: 'Mann',
            genderWanted: 'Kvinne',
            phone: 40101286,
            zip: 3213,
        },
        {
            id: 1,
            username: 'laila@mail.no',
            password: 123,
            firstname: 'Laila',
            surname: 'Gunnhildsen',
            age: 77,
            gender: 'Kvinne',
            genderWanted: 'Mann',
            phone: 90023225,
            zip: 5023,
        },
        {
            id: 2,
            username: 'per@mail.no',
            password: 123,
            firstname: 'Per',
            surname: 'Hakekors',
            age: 92,
            gender: 'Mann',
            genderWanted: 'Mann',
            phone: 12345687,
            zip: 9001,
        },
    ],

    mainPage: {

    },

    userProfile: {
        firstname: 'Lupé',
        age: '70',
        gender: 'Mann',
        genderWanted: 'Kvinne',
        zipcode: 'Må endres(by)',
        profile_image: 'grid.png',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nobis ipsam minima sit soluta magnam, quo temporibus, modi, rerum error quaerat suscipit maiores? Commodi magni, optio ut omnis quos modi!',

    },

    possibleMatchesIndex: 0,
    possibleMatches: [
        {
            firstname: 'Sara',
            age: '78',
            gender: 'Kvinne',
            genderWanted: 'Mann',
            profile_image: 'grid.png',
            zipcode: 'Må endres(by)',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nobis ipsam minima sit soluta magnam, quo temporibus, modi, rerum error quaerat suscipit maiores? Commodi magni, optio ut omnis quos modi!',
        },
        {
            firstname: 'Gunn',
            age: '78',
            gender: 'Kvinne',
            genderWanted: 'Mann',
            profile_image: 'grid.png',
            zipcode: 'Må endres(by)',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nobis ipsam minima sit soluta magnam, quo temporibus, modi, rerum error quaerat suscipit maiores? Commodi magni, optio ut omnis quos modi!',
        },
        {
            firstname: 'Maren',
            age: '78',
            gender: 'Kvinne',
            genderWanted: 'Mann',
            profile_image: 'grid.png',
            zipcode: 'Må endres(by)',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nobis ipsam minima sit soluta magnam, quo temporibus, modi, rerum error quaerat suscipit maiores? Commodi magni, optio ut omnis quos modi!',
        },
        {
            firstname: 'Laila',
            age: '78',
            gender: 'Kvinne',
            genderWanted: 'Mann',
            profile_image: 'grid.png',
            zipcode: 'Må endres(by)',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nobis ipsam minima sit soluta magnam, quo temporibus, modi, rerum error quaerat suscipit maiores? Commodi magni, optio ut omnis quos modi!',
        },

    ],

    messages: [
        {
            id: 'aids123',
            profile_image: 'grid.png',
            firstname: 'Karen',
            lastSentMessage: 'Hei hvordan går det?',
            timestamp: '',
            unread: true,
        },
        {
            id: 'sopp321',
            profile_image: 'grid.png',
            firstname: 'Gunn',
            lastSentMessage: 'Hei hvordan går det?',
            timestamp: '',
            unread: true,
        },
        {
            id: 'crab666',
            profile_image: 'grid.png',
            firstname: 'Frida',
            lastSentMessage: 'Hei hvordan går det?',
            timestamp: '',
            unread: true,
        },
    ],


    sendMessage: {
        profile_image: '',
        firstname: '',
        age: '',
        zipcode: '',
        message: [
            {
                text: '',
                timestamp: '',
                firstname: '',
            },
        ],
    },
}