// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.status(200).json(data);
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
    const {nama, nim, email,jurusan} = req.body;
    const students = await Student.create(req.body);

    const data = {
      message: "Menambahkan data student",
      data: students,
    };

    res.status(201).json(data);

  }

  async update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    const students = await Student.find(id);

    if(students){
      const studentsUpdate = await Student.update(id, req.body);
      const data = {
        message: `Mengedit student id ${id}, nama ${nama}`,
        data: [],
      };  
      res.status(200).json(data);
    }
    else{
      const data = {
        message: `Data gaada`
      };
      res.status(404).json(data);
    }
  }

  destroy(req, res) {
    const { id } = req.params;

    const students = await Student.find(id);

    if(students){
      await Student.delete(id);
      const data = {
        message: `Menghapus student id ${id}`,
      };  

      res.status(200).json(data);
    }
    else{
      const data = {
        message: `Data gaada`
      };
      res.status(404).json(data);
    }

    
  }

  destroy(req, res) {
    const { id } = req.params;

    const students = await Student.find(id);

    if(students){
      const data = {
        message: `Menampilkan detail data`,
        data: students
      };  

      res.status(200).json(data);
    }
    else{
      const data = {
        message: `Data gaada`
      };
      res.status(404).json(data);
    }

    
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
