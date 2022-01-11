// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static create(Student) {
    // code here
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO students SET ?`;
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, Student, (err, results) => {
        resolve(this.show(results.insertId));
      });
    });
  }

  static find(id) {
    // code here
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM students WHERE id = ?`;
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, id, (err, results) => {
        resolve(results[0]);
      });
    });
  }

  static async update(id, data) {
    // code here
    await new Promise((resolve, reject) => {
      const sql = `UPDATE students SET ? WHERE id = ?`;
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });
  }

  static async delete(id) {
    // code here
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM students WHERE id = ?`;
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export class Student
module.exports = Student;
