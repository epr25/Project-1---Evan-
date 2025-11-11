function validateUsername(Username) {
    if (Username.length < 3) {
        return "Username is too short.";
    }
    if (Username.length > 16) {
        return "Username is too long.";
    }

    // Regex to check valid characters: letters, numbers, dots, underscores
    const pattern = /^[a-zA-Z0-9._]+$/;
    if (!pattern.test(Username)) {
        return "Username contains invalid characters. Only letters, numbers, dots, and underscores are allowed.";
    }

    // Check that it doesn't start or end with a dot or underscore
    if (Username.startsWith('.') || username.startsWith('_')) {
        return "Username cannot start with a dot or underscore.";
    }
    if (Username.endsWith('.') || username.endsWith('_')) {
        return "Username cannot end with a dot or underscore.";
    }

    return "Valid username.";
}