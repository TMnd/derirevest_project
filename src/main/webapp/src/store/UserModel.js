class User {
    username;
    email;
    role;
    resources;

    constructor(username, email, role, resources) {
        this.username = username;
        this.email = email;
        this.role = role;
        this.resources = resources;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username) {
        this.username=username;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email=email;
    }

    getRole() {
        return this.role;
    }

    setRole(role) {
        this.role=role;
    }

    getResources() {
        return this.resources;
    }

    setResources(resources) {
        this.resources=resources;
    }
}

export default User;