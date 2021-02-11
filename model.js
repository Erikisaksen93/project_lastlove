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
        zipcode: 'Må endres',
        profile_image: 'grid.png',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nobis ipsam minima sit soluta magnam, quo temporibus, modi, rerum error quaerat suscipit maiores? Commodi magni, optio ut omnis quos modi!',

    },

    possibleMatches: [
        {
            firstname: '',
            age: '',
            profile_image: '',
            zipcode: '',
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