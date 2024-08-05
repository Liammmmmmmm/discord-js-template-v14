const { success, info, warn, error, debug} = require("./console");
const mysql = require('mysql')
const settings  = require('../settings');

/**
 * Easy way to make a sql request to your db. Default db is the one in the .env file but you can use an other one with .seDB().
 * @example
 * new DatabaseConnection().request("YOUR SQL REQUEST", [params])
 * .then(res => {
 *      console.log(yourResult);
 * })
 * .catch(err => {
 *      console.error(error);
 * });
 */
class DatabaseConnection {
    constructor () {
        this.db = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
    }

    /**
     * Change the default env db by another db
     * @param {string} database database name
     * @param {string} host database host
     * @param {string} user database user
     * @param {string} password database user password
     */
    setDB(database, host, user, password) {
        this.db = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        })
    }

    /**
     * Request an element from the database, with your sql and the params
     * @param {string} sql The sql request (? replace param)
     * @param {string[]} params the variables that will replace the ? in the sql
     * @returns returns a promise that resolve with the sql request result
     */
    async request(sql, params) {
        if(params == null) params = [];
        return new Promise((resolve, reject) => {
            this.db.connect(err => {
                if (err) {
                    debug.error(err);
                    reject(err);
                }
                this.db.query(sql, params, (error, results) => {
                    if (error) {
                        debug.error(error);
                        reject(error);
                    } else {
                        debug.success(`Request "${sql}" ok`);
                        resolve(results);
                    }

                    this.db.end(err => {
                        if (err) {
                            debug.error(err);
                            reject(err);
                        }
                    });
                });
            });
        });
    }
}

module.exports = DatabaseConnection;