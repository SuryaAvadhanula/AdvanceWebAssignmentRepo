export interface User {
    firstName: string;
    lastName: string;
    handle: string;
    password: string;
    email: string;
    picture: string;
    id: number;
    userTasks : Array<String>;
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
            'Need to update vue',
            'Need to update pinia'
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
            'Need to update react',
            'Need to update angular'
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
            'Need to update jQuery',
            'Need to update ajax'
        ]
    }
]