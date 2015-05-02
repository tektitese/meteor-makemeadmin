Meteor.methods({
	makeMeAdmin: function () {
		if(this.userId && Roles.getAllRoles().fetch().length === 0) {
			Roles.addUsersToRoles(this.userId, ['admin'])
		}
	},
	makeMeAdminAnyAdmin: function() {
		return Roles.getAllRoles().fetch().length;
	}
});