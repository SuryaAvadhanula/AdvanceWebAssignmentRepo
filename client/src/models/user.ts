export interface User {
    firstName: string;
    lastName: string;
    handle: string;
    password: string;
    email: string;
    picture: string;
    id: number;
    userTasks : any;
}

export const list: User[] = [
    {
        id: 1,
        handle: 'Lawliet',
        firstName: 'Lawliet',
        lastName: 'Ryuzaki',
        password: 'Deathnote',
        email: 'l@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/4.jpg',
        userTasks: [
            {task : 'Need to update vue',dueDate:'2022-05-16', isCompleted: true, assignedBy: "Kira"},
            {task : 'Need to update pinia',dueDate:'2022-01-11', isCompleted: false, assignedBy: "Luffy"},
            {task : 'Need to update express',dueDate:'2022-02-28', isCompleted: true, assignedBy: "Kira"}
        ]
    },
    {
        id: 2,
        handle: 'Kira',
        firstName: 'Light',
        lastName: 'Yagami',
        password: 'Shinigami',
        email: 'lyagami@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/5.jpg',
        userTasks: [
            {task : 'Need to update angular',dueDate:'2022-03-21', isCompleted: false, assignedBy: "Lawliet"},
            {task : 'Need to update react',dueDate:'2022-03-22', isCompleted: false, assignedBy: "Luffy"}
        ]
    },
    {
        id: 3,
        handle: 'Luffy',
        firstName: 'Monkey',
        lastName: 'Luffy',
        password: 'OnePiece',
        email: 'l@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/2.jpg',
        userTasks: [
            {task : 'Need to update jQuery',dueDate:'2022-05-02', isCompleted: false, assignedBy: "Kira"},
            {task : 'Need to update ajax',dueDate:'2022-07-02', isCompleted: false, assignedBy: "Lawliet"}
        ]
    }
]