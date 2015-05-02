Template.makeMeAdminButton.events({
	'click .makeMeAdmin': function () {
		Meteor.call('makeMeAdmin');
	}
});

Template.makeMeAdmin.helpers({
	makeMeAdminAnyAdmin: function() {
		Meteor.call('makeMeAdminAnyAdmin', function (error, result) {
			Session.set('makeMeAdminAnyAdmin', result);
		});
		if(Session.get('makeMeAdminAnyAdmin') > 0) {
			return true;
		}
		else {
			return false;
		}
	}
});