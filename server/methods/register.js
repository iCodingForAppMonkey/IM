/**
 * 注册普通用户
 * @param  {Object} formData) {		var       userData [description]
 * @return {[type]}           [description]
 */
Meteor.methods({
	'register': function(formData) {

		var userData ={
			email: formData.email,
			password: formData.pass
		}
			

		var userId = Accounts.createUser(userData);

		if (userData.email){
			Accounts.sendVerificationEmail(userId, userData.email);
		}

		var updateUser={
			name:formData.email.split('@')[0],
			username:formData.username

		};

		Meteor.users.update(userId, {
			$set: updateUser
		});

		return userId;
	}
});

