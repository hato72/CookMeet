type User = {
    userName: string;
    icon: string;
    email: string;
    password: string;
};

const users: User[] = [
    { userName: "user1", icon: "icon1", email: "user1@example.com", password: "password1" },
    { userName: "user2", icon: "icon2", email: "user2@example.com", password: "password2" }
];

export const authenticate = (email: string, password: string): boolean => {
    return users.some(user => user.email === email && user.password === password);
};

export const getName = (email: string, password: string) => {
    const user = users.find(user => user.email === email && user.password === password);
    return user ? user.userName : null;
}


