Template.signup.onRendered(function() {
    $('#application-signup').validate({
        rules: {
            emailAddress: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            emailAddress: {
                required: "Please enter your email address to sign up.",
                email: "Please enter a valid email address."
            },
            password: {
                required: "Please enter a password to sign up.",
                minlength: "Please use at least six characters."
            }
        },
        submitHandler: function() {
            var user = {
                email: $('[name="emailAddress"]').val(),
                password: $('[name="password"]').val()
            };

            Accounts.createUser({
                email: user.email,
                password: user.password,
                profile: {
                    visitor: {
                        userId: "",
                        name: "",
                        dateOfBirth: "",
                        mobilePhone: "",
                        stateId: "",
                        streetAddress: "",
                        secondaryAddress: "",
                        city: "",
                        state: "",
                        zipCode: ""
                    }
                }
            }, function(error, userId) {
                if (error) {
                    Bert.alert(error.reason, 'danger');
                } else {
                    Bert.alert('Welcome to OCCC!', 'success');
                }
            });
        }
    });
});

Template.signup.events({
    'submit form': function(e) {
        // Prevent form from submitting.
        e.preventDefault();
    },
    'click input': function(event) {
        if ($('input[type=checkbox]:checked').length > 0) {
            $('#btnSubmit').show();
        } else {
            $('#btnSubmit').hide();
        }
    }
});
