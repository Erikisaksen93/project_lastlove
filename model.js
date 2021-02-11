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

    mainPage: {

    },

    userProfile: {
        firstname: 'Kåre',
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
            profile_image: '',
            firstname: '',
            lastSentMessage: '',
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