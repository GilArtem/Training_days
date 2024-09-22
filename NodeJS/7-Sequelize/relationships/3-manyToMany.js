// Связь многие-ко-многим  belongsToMany()
// Например, один студент может посещать несколько университетских курсов. 
// Соответственно один университетский курс может посещаться множеством студентов.

// Для создания подобной связи создается промежуточная таблица, через которую связываются две основные таблицы
const Sequelize = require("sequelize"); 
// определяем объект Sequelize
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "metanit.db",
  define: {
    timestamps: false
  }
});

const Student = sequelize.define("student", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
});

const Course = sequelize.define("course", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
});

// промежуточная сущность, которая связывает курс и студента
const Enrolment = sequelize.define("enrolment", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    grade: {                    // оценка студента по данному курсу
      type: Sequelize.INTEGER,
      allowNull: false
    }
});

//Второй параметр - объект конфигурации связи, который с помощью параметра through 
// обязательно должен задавать промежуточную сущность, через которую будут связаны обе основные сущности.
Student.belongsToMany(Course, {through: Enrolment});
Course.belongsToMany(Student, {through: Enrolment});

sequelize.sync({force:true}).then(()=>{
    console.log("Tables have been created");
}).catch(err=>console.log(err));


// В итоге при выполнении данного кода в базе данных SQLite 
// будут созданы три таблицы с помощью следующих SQL-команд:
// CREATE TABLE IF NOT EXISTS `students` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255) NOT NULL);
// CREATE TABLE IF NOT EXISTS `courses` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255) NOT NULL);
// CREATE TABLE IF NOT EXISTS `enrolments` (
//     `id` INTEGER PRIMARY KEY AUTOINCREMENT, `grade` INTEGER NOT NULL, 
//     `studentId` INTEGER REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, 
//     `courseId` INTEGER REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, 
//     UNIQUE (`studentId`, `courseId`)
// );


//// Добавление связанных данных  addИМЯ_МОДЕЛИ()
// пусть у нас будет создано несколько объектов - студентов и курсов:
Course.create({ name: "JavaScript"});
Course.create({ name: "TypeScript"});
Course.create({ name: "Node.js"});
 
Student.create({ name: "Tom"});
Student.create({ name: "Bob"});
Student.create({ name: "Alice"});


// Добавим студентa с именем Tom курс по JavaScript:
// получаем пользователя с именем Tom
Student.findOne({where: {name: "Tom"}})
.then(student=>{
    if(!student) return;
     
    // добавим Тому курс по JavaScript
    Course.findOne({where: {name: "JavaScript"}})
        .then(course=>{
            if(!course) return;
            student.addCourse(course, {through:{grade:1}});
    });
});

// данный метод будет выполнять sql-команду:
// INSERT INTO `enrolments` (`id`,`grade`,`studentId`,`courseId`) VALUES (NULL,1,1,3);



// Получение связанных данных  getИМЯ_МОДЕЛИs()
// получим все курсы студента по имени Tom:
Student.findOne({where: {name: "Tom"}})
.then(student=>{
    if(!student) return;
    student.getCourses().then(courses=>{
        for(course of courses){
            console.log(course.name);
        }
    });
});

// в данном случае мы получаем не просто курс из таблицы courses, а сводные данные на основании таблицы enrolments 
// выполняемая sql-команда в данном случае будет выглядеть следующим образом:
// SELECT `course`.`id`, `course`.`name`, `enrolment`.`id` AS `enrolment.id`, `enrolment`.`grade` AS `enrolment.grade`, `enrolment`.`studentId` AS `enrolment.studentId`, `enrolment`.`courseId` AS `enrolment.courseId` FROM `courses` AS `course` INNER JOIN `enrolments` AS `enrolment` ON
// `course`.`id` = `enrolment`.`courseId` AND `enrolment`.`studentId` = 1;

// Также мы сможем получить название и id курса, а также id и значение grade объекта Enrolment:
Student.findOne({where: {name: "Tom"}})
.then(student=>{
    if(!student) return;
    student.getCourses().then(courses=>{
        for(course of courses){
            console.log("course:", course.name, "grade:", course.enrolment.grade);
        }
    });
});



// Удаление связанных данных
//  удалим у студента по имени Tom курс JavaScript:
Student.findOne({where: {name: "Tom"}})
.then(student=>{
    if(!student) return;
    student.getCourses().then(courses=>{
        for(course of courses){
            if(course.name==="JavaScript") course.enrolment.destroy();
        }
    });
});