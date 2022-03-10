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
        handle: 'Ryuk',
        firstName: 'Lawliet',
        lastName: 'Ryuzaki',
        password: 'Deathnote',
        email: 'l@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/4.jpg',
        userTasks: [
            {task : 'Need to update vue', isCompleted: true},
            {task : 'Need to update pinia', isCompleted: false},
            {task : 'Need to update express', isCompleted: true}
        ]
    },
    {
        id: 2,
        handle: 'Kira',
        firstName: 'Light',
        lastName: 'Yagami',
        password: 'Deathnote',
        email: 'lyagami@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/5.jpg',
        userTasks: [
            {task : 'Need to update angular', taskStatus:'Current'},
            {task : 'Need to update react', taskStatus:'Completed'}
        ]
    },
    {
        id: 3,
        handle: 'OnePiece',
        firstName: 'Monkey',
        lastName: 'Luffy',
        password: 'OP',
        email: 'l@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/2.jpg',
        userTasks: [
            {task : 'Need to update jQuery', taskStatus:'Current'},
            {task : 'Need to update ajax', taskStatus:'Completed'}
        ]
    }
]