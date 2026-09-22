/* You are creating a website for your college.
  Create a class User with 2 properties name and email. 
  It also has a method viewData() that allows user to 
  view website data */

  class  User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log(`Name - ${this.name}, Email - ${this.email}`);
    }
  }

  let user1 = new User("ajeet", "aj123@gmail.com");
  user1.viewData();

  /*
  Class a new class Admin which inherits from User class.
   Add a new method called 'editData()' to admin that allows it
   to edit website data.
  */

   class Admin extends User {
       editData(){
        this.name = "amit";
        this.email = "sharma@gmail.com";
       }
   }

   let userAdmin1 = new Admin("ajeet", "aj1212@gmail.com")
   userAdmin1.viewData(); // Name - ajeet, Email - aj1212@gmail.com
   userAdmin1.editData();
   userAdmin1.viewData(); // Name - amit, Email - sharma@gmail.com
  