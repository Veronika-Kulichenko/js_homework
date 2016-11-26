let course = {
	courseDescription : null, 
	teacherName : null, 
	courseDurationInHours : null, 
	passRate : null, 
	marks : []
}


let student = {
	firstName : null, 
	lastName : null, 
	age: null, 
	courses : [],
	getFullName : function getFullName(){
		return `${this.firstName} ${this.lastName}`;
	},

	getAge : function getAge(){
		return `${this.age} years old`;
	},
	getCourses : function getCourses(){
		return this.courses.map((item) => item.courseDescription).join(", ");
	},
	addNewCourse : function addNewCourse(courseDescription, teacherName, courseDurationInHours){
		let newCourse = Object.create(course);
		newCourse.courseDescription = courseDescription;
		newCourse.teacherName = teacherName;
		newCourse.courseDurationInHours = courseDurationInHours;
		newCourse.marks = [];
		this.courses.push(newCourse);
	},
	addMark : function addMark(courseDescription, mark){
		if(mark < 1 || mark > 5) return;
		this.courses.filter(course => course.courseDescription === courseDescription)[0].marks.push(mark);
	},
	getAvarageMarkByCourse: function getAvarageMarkByCourse(courseDescription){
		if(course.marks.length === 0){
			return null;
		} else {let obj = this.courses.filter(function(courses, i){
			if(courses.courseDescription === courseDescription){
				let avarageMarkByCourse = (course.marks.reduce((sum, currentItem) => sum + currentItem) / course.marks.length).toFixed(2);
				return avarageMarkByCourse;
			}
			return "Can't find this course";
		})
	}

},
	getAvarageMark : function getAvarageMark(){
		let marksArr = this.courses.map(course => course.marks.reduce((prev, current) => prev + current) / course.marks.length);
		let avarageMark = marksArr.reduce((prev, current) =>  prev + current) / marksArr.length;
		return avarageMark.toFixed(2);

	},
	addProgress : function addProgress(courseDescription, hours){
		let course = this.courses.filter(course => course.courseDescription === courseDescription)[0];
		if(hours > course.courseDurationInHours) {
			console.log("Hours is more then courseDurationInHours");
			return 0;
		}
		let passRate = (hours/course.courseDurationInHours).toFixed(2);
		course.passRate = passRate;
		return passRate;
	},

	getProgress : function getProgress(courseDescription){
		let course = this.courses.filter(course => course.courseDescription === courseDescription)[0];
		if(course != null) {
			let progress = course.passRate * 100;
			console.log(progress);
			return `${progress} %`;
		} else return "Can't find this course or hours is more then courseDurationInHours";
	}
}




