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
        firstname: '',
        age: '',
        gender: '',
        genderWanted: '',
        zipcode: '',
        profile_image: '',
        description: '',

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