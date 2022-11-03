  export const filterData = [
    {id: 0, name: 'Physics for ICSE IX - Anodiam Offical', Image: require('../../assets/pics/zero.png'), 
    subjectId: 1, boardId: 0, yearId: 9, teacherId: 0, rating: 4.2123, price: 50000,
    description: 'Lorem Ipsum test on Physics for ICSE IX - Anodiam Offical'},
    {id: 1, name: 'Physics for ICSE X - Anodiam Offical', Image: require('../../assets/pics/one.png'), 
    subjectId: 1, boardId: 0, yearId: 10, teacherId: 2, rating: 4.7123, price: 55000,
    description: 'Lorem Ipsum test on Physics for ICSE X - Anodiam Offical'},
    {id: 2, name: 'Maths for ICSE IX - Anodiam Offical', Image: require('../../assets/pics/two.png'), 
    subjectId: 0, boardId: 0, yearId: 9, teacherId: 2, rating: 5.00, price: 53000,
    description: 'Lorem Ipsum test on Maths for ICSE IX - Anodiam Offical'},
    {id: 3, name: 'Maths for ICSE X - Anodiam Offical', Image: require('../../assets/pics/three.png'), 
    subjectId: 0, boardId: 0, yearId: 10, teacherId: 2, rating: 3.901, price: 51000,
    description: 'Lorem Ipsum test on Maths for ICSE IX - Anodiam Offical'},
    {id: 4, name: 'Computers for ICSE IX - Anodiam Offical', Image: require('../../assets/pics/four.png'), 
    subjectId: 3, boardId: 0, yearId: 9, teacherId: 1, rating: 3.301, price: 42000,
    description: 'Lorem Ipsum test on Computers for ICSE IX - Anodiam Offical'},
    {id: 5, name: 'Computers for ICSE X - Anodiam Offical', Image: require('../../assets/pics/five.png'), 
    subjectId: 3, boardId: 0, yearId: 10, teacherId: 1, rating: 3.801, price: 42000,
    description: 'Lorem Ipsum test on Computers for ICSE IX - Anodiam Offical'},
    {id: 6, name: 'Physics for CBSE IX - Anodiam Offical', Image: require('../../assets/pics/six.png'), 
    subjectId: 1, boardId: 1, yearId: 9, teacherId: 0, rating: 3.801, price: 49000,
    description: 'Lorem Ipsum test on Physics for ICSE IX - Anodiam Offical'},
    {id: 7, name: 'Maths for CBSE IX - Anodiam Offical', Image: require('../../assets/pics/seven.png'), 
    subjectId: 1, boardId: 1, yearId: 10, teacherId: 0, rating: 2.801, price: 49000,
    description: 'Lorem Ipsum test on Maths for ICSE X - Anodiam Offical'}
  ];
  
  export const authProvider = [
  {id: 0, provider: 'anodiam'},
  {id: 1, provider: 'google'},
  {id: 2, provider: 'facebook'}
];

export const userData = [
  {id: 0, providerId: 0, username: 'pinaki@gmail.com', password: '1A$aaaa'},
  {id: 1, providerId: 0, username: 'rita@anodiam.com', password: '2A$aaaa'},
  {id: 2, providerId: 1, username: 'google1@gmail.com', password: ''},
  {id: 3, providerId: 1, username: 'google2@google.com', password: ''},
  {id: 4, providerId: 2, username: 'fb1@fb.com', password: ''},
  {id: 5, providerId: 2, username: 'fb2@fb.com', password: ''}  
];

export const userPrincipalData = [
  {id: 0, jwt: {header: 'bearer', token: 'qwerty1234', expiry: '12345678'}, status: {active: 'true', cuteTheme: false}},
  {id: 1, jwt: {header: 'bearer', token: 'qwerty5678', expiry: '12345678'}, status: {active: 'true', cuteTheme: true}},
  {id: 2, jwt: {header: 'googleOauth', token: 'google1234', expiry: '12345678'}, status: {active: 'true', cuteTheme: false}},
  {id: 3, jwt: {header: 'googleOauth', token: 'google5678', expiry: '12345678'}, status: {active: 'true', cuteTheme: true}},
  {id: 4, jwt: {header: 'fbOauth', token: 'fb1234', expiry: '12345678'}, status: {active: 'true', cuteTheme: false}},
  {id: 5, jwt: {header: 'fbOauth', token: 'fb5678', expiry: '12345678'}, status: {active: 'true', cuteTheme: true}}
];

export const subjectData = [
  {id: 0, name: 'Maths'},
  {id: 1, name: 'Physics'},
  {id: 2, name: 'Chemestry'},
  {id: 3, name: 'Computers'},
  {id: 4, name: 'Biology'},
  {id: 5, name: 'Geography'},
  {id: 6, name: 'English'},
  {id: 7, name: 'History'}
];

export const yearData = [
  {id: 7, name: 'Class - VII'},
  {id: 8, name: 'Class - VIII'},
  {id: 9, name: 'Class - IX'},
  {id: 10, name: 'Class - X'},
  {id: 11, name: 'Class - XI'},
  {id: 12, name: 'Class - XII'}
];

export const boardData = [
  {name: 'ICSE', fullName: 'Lorem Ipsum ICSE', Image: require('../../assets/pics/ICSE.png'), id: 0},
  {name: 'CBSE', fullName: 'CBSELorem Ipsum', Image: require('../../assets/pics/CBSE.png'), id: 1},
  {name: 'WBSE', fullName: 'WB Board', Image: require('../../assets/pics/WB.png'), id: 2},
  {name: 'MHSE', fullName: 'Maha Board', Image: require('../../assets/pics/MH.png'), id: 3},
  {name: 'Other', fullName: 'Others Lorem Ipsum', Image: require('../../assets/pics/teacher.png'), id: 4}
];

export const teacherData = [
  {fullName: 'Miss Teacher One', Image: require('../../assets/pics/teacher1.png'), id: 0},
  {fullName: 'Mr Second Teacher', Image: require('../../assets/pics/teacher2.png'), id: 1},
  {fullName: 'Number Three', Image: require('../../assets/pics/teacher3.png'), id: 2}
];

export const courseCardData = [
  {id: 0, name: 'Physics for ICSE IX - Anodiam Offical', Image: require('../../assets/pics/zero.png'), 
  subjectId: 1, boardId: 0, yearId: 9, teacherId: 0, rating: 4.2123, price: 50000,
  description: 'Lorem Ipsum test on Physics for ICSE IX - Anodiam Offical'},
  {id: 1, name: 'Physics for ICSE X - Anodiam Offical', Image: require('../../assets/pics/one.png'), 
  subjectId: 1, boardId: 0, yearId: 10, teacherId: 2, rating: 4.7123, price: 55000,
  description: 'Lorem Ipsum test on Physics for ICSE X - Anodiam Offical'},
  {id: 2, name: 'Maths for ICSE IX - Anodiam Offical', Image: require('../../assets/pics/two.png'), 
  subjectId: 0, boardId: 0, yearId: 9, teacherId: 2, rating: 5.00, price: 53000,
  description: 'Lorem Ipsum test on Maths for ICSE IX - Anodiam Offical'},
  {id: 3, name: 'Maths for ICSE X - Anodiam Offical', Image: require('../../assets/pics/three.png'), 
  subjectId: 0, boardId: 0, yearId: 10, teacherId: 2, rating: 3.901, price: 51000,
  description: 'Lorem Ipsum test on Maths for ICSE IX - Anodiam Offical'},
  {id: 4, name: 'Computers for ICSE IX - Anodiam Offical', Image: require('../../assets/pics/four.png'), 
  subjectId: 3, boardId: 0, yearId: 9, teacherId: 1, rating: 3.301, price: 42000,
  description: 'Lorem Ipsum test on Computers for ICSE IX - Anodiam Offical'},
  {id: 5, name: 'Computers for ICSE X - Anodiam Offical', Image: require('../../assets/pics/five.png'), 
  subjectId: 3, boardId: 0, yearId: 10, teacherId: 1, rating: 3.801, price: 42000,
  description: 'Lorem Ipsum test on Computers for ICSE IX - Anodiam Offical'},
  {id: 6, name: 'Physics for CBSE IX - Anodiam Offical', Image: require('../../assets/pics/six.png'), 
  subjectId: 1, boardId: 1, yearId: 9, teacherId: 0, rating: 3.801, price: 49000,
  description: 'Lorem Ipsum test on Physics for ICSE IX - Anodiam Offical'},
  {id: 7, name: 'Maths for CBSE IX - Anodiam Offical', Image: require('../../assets/pics/seven.png'), 
  subjectId: 1, boardId: 1, yearId: 10, teacherId: 0, rating: 2.801, price: 49000,
  description: 'Lorem Ipsum test on Maths for ICSE X - Anodiam Offical'}
];