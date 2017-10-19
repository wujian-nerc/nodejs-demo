function User(id, name, age) {
	this.id = id;
	this.name = name;
	this.age = age;

	this.enter = function(reponse) {
		reponse.write(this.name + " enter room!" );
	}
}

module.exports = User;