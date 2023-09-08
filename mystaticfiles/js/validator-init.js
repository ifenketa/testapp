
$(function () {
    $(".currency_validate").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            customerId: {
                required: true,
                minlength: 8
            },
            password: {
                required: true,
                minlength: 6
            },
            currency: {
                required: true
            },
            currency_amount: {
                required: true
            },
            usd_amount: {
                required: true
            },
            method: {
                required: true
            }
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            },
            customerId: {
                required: "Please provide your Customer ID",
                minlength: "Your customer ID is 8 digits long"
            },
            email: "Please enter a valid email address"
        },
    });
});

$(function () {
    $(".currency2_validate").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            currency: {
                required: true
            },
            currency_amount: {
                required: true
            },
            usd_amount: {
                required: true
            },
            method: {
                required: true
            }
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },
    });
});

$(function () {
    $(".contact_validate").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            message: "required",
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },
    });
});

$(function () {
    $(".signin_validate").validate({
        rules: {
            customerId: {
                required: true,
                minlength: 8,
                maxlength: 8
            },
            password: {
                required: true,
                minlength: 6
            },
        },
        messages: {
            password: {
                required: "Please provide a password",
                minlength: "Password is too short"
            },
            customerId: {
                required: "Please provide your Customer ID",
                minlength: "Customer ID is 8 digits long"
            },
        },
          
    });
});

$(function () {
    $(".signup_validate").validate({
        rules: {
            username: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
        },
        messages: {
            username: "Please enter your username",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },
    });
});



$(function () {
    $(".personal_validate").validate({
        rules: {
            fullname: "required",
            dob: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            presentaddress: "required",
            permanentaddress: "required",
            city: "required",
            postal: "required",
            country: {
                required: true
            }
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },
    });
});
