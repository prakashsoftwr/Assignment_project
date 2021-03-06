import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AllModulesData implements InMemoryDbService {
  createDb() {
    let chatList = [
      {
        chatName: 'Regina Dickerson',
        chatMessage: 'It seems logical that the strategy of providing!',
        chatTime: '14:45 pm',
        userStatus: 'online',
        img: 'assets/img/avatar-8.jpg',
        id: 1,
      },
      {
        chatName: 'Kevin Howard',
        chatMessage: 'It seems logical that the strategy of providing!',
        chatTime: '08:45 pm',
        userStatus: 'offline',
        img: 'assets/img/avatar-7.png',
        id: 2,
      },
      {
        chatName: 'Eric Knight',
        chatMessage: 'Welcome to the community mate! 👍',
        chatTime: 'Yesterday',
        chatStatus: 'unRead',
        userStatus: 'online',
        img: 'assets/img/avatar-1.jpg',
        id: 3,
      },
      {
        chatName: 'Scott Albright',
        chatMessage: 'I remember everything mate. See you later 🤘',
        chatTime: '06:18 am',
        userStatus: 'offline',
        img: 'assets/img/avatar-2.jpg',
        id: 4,
      },
      {
        chatName: 'Irene Perkins',
        chatMessage: 'I will miss you, too, my dear!',
        chatTime: 'Yesterday',
        userStatus: 'away',
        img: 'assets/img/avatar-3.jpg',
        id: 5,
      },
      {
        chatName: 'Carol Andre',
        chatMessage: 'Photo',
        chatTime: 'Yesterday',
        userStatus: 'offline',
        img: 'assets/img/avatar-4.jpg',
        id: 6,
      },
    ];
    let leftChat = [
      {
        message: 'Hi James! What’s Up?',
        time: 'Yesterday 14:26 PM',
        messageRight:
          'Oh, hello! All perfectly. I work, study and know this wonderful world!',
        timeRight: 'Yesterday 14:38 PM ',
        messageRead: '',
        messageDate: 'Yesterday',
        id: 1,
      },
      {
        message: 'Ok Cool, Where you from',
        time: 'Yesterday 14:40 PM',
        messageRight: 'I am from California, and you?',
        timeRight: 'Yesterday 14:42 PM ',
        messageRead: '2 message unread',
        messageDate: 'Yesterday',
        id: 2,
      },
      {
        message: 'I am from Australia, and where you working?',
        time: '14:26 PM',
        messageRight: 'Oh Cool, Yeah i am working here famous software company',
        timeRight: '14:32 PM',
        messageRead: '',
        messageDate: 'Yesterday',
        id: 3,
      },
      {
        message: "That's Good Lol, What is your designation?",
        time: '14:30 PM',
        messageRight: 'I am senior software engineer.',
        timeRight: '14:30 PM',
        messageRead: '',
        messageDate: 'Yesterday',
        id: 4,
      },
      {
        message: 'Good.!!!',
        time: '14:33 PM',
        messageRight: 'Yeah, Thank you..',
        timeRight: '14:34 PM',
        messageRead: '2 message unread',
        messageDate: 'Yesterday',
        id: 5,
      },
    ];
    let groupList = [
      {
        chatName: 'Baddies and Buddies',
        chatMessage: 'Lorem Ipsum is simply dummy text of the printing',
        chatTime: '08:45 am',
        groupMembers: '14+',
        status: 'read',
        dropdown: 'no',
        image: 'media2',
        id: 1,
      },
      {
        chatName: 'Dreams Team',
        chatMessage: "Lorem Ipsum has been the industry's standard",
        chatTime: '09.50 am',
        groupMembers: '10+',
        status: 'read',
        dropdown: 'no',
        image: 'carousel1',
        id: 2,
      },
      {
        chatName: 'Chamber of Secrets',
        chatMessage: 'Welcome to the community mate! 👍',
        chatTime: 'Yesterday',
        groupMembers: '8+',
        status: 'unread',
        dropdown: 'no',
        image: 'media3',
        id: 3,
      },
      {
        chatName: 'Family Matters',
        chatMessage: 'I remember everything mate. See you later 🤘',
        chatTime: '06:18 am',
        groupMembers: '8+',
        status: 'read',
        dropdown: 'no',
        image: 'media1',
        id: 4,
      },
      {
        chatName: 'All in the Mind',
        chatMessage: 'I will miss you, too, my dear!',
        chatTime: 'Yesterday',
        groupMembers: '8+',
        status: 'read',
        dropdown: 'yes',
        image: 'avatar-3',
        id: 5,
      },
      {
        chatName: 'Smells Like Team Spirit',
        chatMessage: 'Photo',
        chatTime: 'Yesterday',
        groupMembers: '8+',
        status: 'read',
        dropdown: 'yes',
        image: 'avatar-4',
        id: 6,
      },
    ];
    let leftGroupChat = [
      {
        message: 'Hi James! What’s Up?',
        time: 'Yesterday 14:26 PM',
        messageRight:
          'Oh, hello! All perfectly. I work, study and know this wonderful world!',
        timeRight: 'Yesterday 14:38 PM ',
        messageRead: '',
        messageDate: 'Yesterday',
        id: 1,
      },
      {
        message: 'Ok Cool, Where you from',
        time: 'Yesterday 14:40 PM',
        messageRight: 'I am from California, and you?',
        timeRight: 'Yesterday 14:42 PM ',
        messageRead: '2 message unread',
        messageDate: 'Yesterday',
        id: 2,
      },
      {
        message: 'I am from Australia, and where you working?',
        time: '14:26 PM',
        messageRight: 'Oh Cool, Yeah i am working here famous software company',
        timeRight: '14:32 PM',
        messageRead: '',
        messageDate: 'Yesterday',
        id: 3,
      },
      {
        message: "That's Good Lol, What is your designation?",
        time: '14:30 PM',
        messageRight: 'I am senior software engineer.',
        timeRight: '14:30 PM',
        messageRead: '',
        messageDate: 'Yesterday',
        id: 4,
      },
      {
        message: 'Good.!!!',
        time: '14:33 PM',
        messageRight: 'Yeah, Thank you..',
        timeRight: '14:34 PM',
        messageRead: '2 message unread',
        messageDate: 'Yesterday',
        id: 5,
      },
    ];
    let statusList = [
      {
        chatName: 'Anna Dorum',
        chatTime: 'Just Now',
        userStatus: 'online',
        img: 'assets/img/avatar-8.jpg',
        id: 1,
      },
      {
        chatName: 'Kevin Howard',
        chatTime: 'Today , 10:30am',
        userStatus: 'offline',
        img: 'assets/img/avatar-7.png',
        id: 2,
      },
      {
        chatName: 'Eric Knight',
        chatTime: 'Today , 8.00am',
        chatStatus: 'unRead',
        userStatus: 'online',
        img: 'assets/img/avatar-1.jpg',
        id: 3,
      },
      {
        chatName: 'Scott Albright',
        chatTime: 'Today , 5.00am',
        userStatus: 'offline',
        img: 'assets/img/avatar-2.jpg',
        id: 4,
      },
    ];
    let callList = [
      {
        chatName: 'Regina Dickerson',
        chatTime: '14:45 pm',
        userStatus: 'online',
        id: 1,
      },
      {
        chatName: 'Kevin Howard',
        chatTime: '08:45 pm',
        userStatus: 'offline',
        id: 2,
      },
      {
        chatName: 'Eric Knight',
        chatTime: 'Yesterday',
        chatStatus: 'unRead',
        userStatus: 'online',
        id: 3,
      },
      {
        chatName: 'Scott Albright',
        chatTime: '06:18 am',
        userStatus: 'offline',
        id: 4,
      },
      {
        chatName: 'Irene Perkins',
        chatTime: 'Yesterday',
        userStatus: 'away',
        id: 5,
      },
      {
        chatName: 'Carol Andre',
        chatMessage: 'Photo',
        chatTime: 'Yesterday',
        userStatus: 'offline',
        id: 6,
      },
    ];
    return {
      chatList: chatList,
      leftChat: leftChat,
      groupList: groupList,
      leftGroupChat: leftGroupChat,
      statusList: statusList,
      callList: callList,
    };
  }
}
