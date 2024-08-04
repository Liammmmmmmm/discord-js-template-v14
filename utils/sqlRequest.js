const { success, info, warn, error, debug} = require("./console");
const mysql = require('mysql')
const settings  = require('../settings');

class DatabaseConnection {
    constructor () {
        this.db = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
    }

    setDB(database, host, user, password) {
        this.db = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        })
    }

    async request(sql, params) {
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