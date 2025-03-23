const rateLimit = require("express-rate-limit");
const RedisStore = require('rate-limit-redis');


const redis = require('../database/redis');

const registerRateLimiter = rateLimit({
    /*store: new RedisStore({
        sendCommand: (...args) => redis.sendCommand(args),
    }),
    */
    windowMs: 3 * 60 * 1000, // 10 minutes
    max: 5, // limit each IP to 3 requests per window Ms
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many accounts created, please try again in 10 minutes"
});

const loginRateLimiter = rateLimit({
    /*store: new RedisStore({
        sendCommand: (...args) => redis.sendCommand(args),
    }),
    */
    windowMs: 2 * 60 * 1000, // 10 minutes
    max: 5, // limit each IP to 10 requests per window Ms
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many at tempt to login, please try again in 10 minutes",
    keyGenerator: (req) => {
    console.log("Request IP:", req.ip);  // พิมพ์ IP ที่ได้ออกมา
    return req.ip;
    }
});

module.exports = {
    registerRateLimiter, loginRateLimiter
}
