const app = new Vue ({
  el: "#test",
  data: {
    product: "ВОСКРЕСНАЯ ШКОЛА",
    students: [
      {
        fullName: "Мительглик Лиза",
        age: 10
      },
      {
        fullName: "Курбат София",
        age: 9
      },
      {
        fullName: "Тавров Андрей",
        age: 11
      },
    ],
    studentCount: 0,
    },
    methods: {
      addNewStudent() {
        this.studentCount += 1
      }
  }
})
