import constants from './constants'

const SERVER_ENV = {

    'production': {
        'BASE_API': constants.PROD_API,
        'SERVER_PORT': process.env.PORT|| 4000
    },
    'development': {
        'BASE_API': constants.DEV_API,
        'SERVER_PORT': process.env.PORT || 4000
    }
};

export default SERVER_ENV;
