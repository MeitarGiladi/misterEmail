import { dbUtilService } from './db-util.service.js'


export const dbInitStorageService = {
    createDatabase
}

const STORAGE_KEY_LOGGED_USER = dbUtilService.STORAGE_KEY_LOGGED_USER
const STORAGE_KEY_FOLDERS = dbUtilService.STORAGE_KEY_FOLDERS
const STORAGE_KEY_USERS = dbUtilService.STORAGE_KEY_USERS

function createDatabase(overwrite) {
    createUserFolders(overwrite)
    createLoggedInUser(overwrite)
    createUsersData(overwrite)
}


function createUserFolders(overwrite) {
    if (overwrite || !dbUtilService.loadFromStorage(STORAGE_KEY_FOLDERS)) {
        const folders = [
            { name: "inbox", text: "Inbox", iconClass: "icon-folder-inbox" },
            { name: "starred", text: "Starred", iconClass: "icon-folder-starred" },
            { name: "important", text: "Important", iconClass: "icon-folder-important" },
            { name: "sent", text: "Sent", iconClass: "icon-folder-sent" },
            { name: "drafts", text: "Drafts", iconClass: "icon-folder-drafts" },
            { name: "all-mail", text: "All Mail", iconClass: "icon-folder-allmail" },
            { name: "bin", text: "Bin", iconClass: "icon-folder-bin" }
        ];
        dbUtilService.saveToStorage(STORAGE_KEY_FOLDERS, folders)
    }
}

function createLoggedInUser(overwrite) {
    if (overwrite || !dbUtilService.loadFromStorage(STORAGE_KEY_LOGGED_USER)) {
        const loggedInUser = 'user1@appsus.com';
        dbUtilService.saveToStorage(STORAGE_KEY_LOGGED_USER, loggedInUser)
    }
}

function createUsersData(overwrite) {
    if (overwrite || !dbUtilService.loadFromStorage(STORAGE_KEY_USERS)) {
        const users_data = {
            'user1@appsus.com': {
                fullname: 'Mahatma Appsus',
                labels: ["amsterdam",
                    "checkins",
                    "games",
                    "bills"],
                emails: [
                    {
                        id: 'e1',
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes \nLove\nMomo',
                        isRead: 1,
                        isStarred: true,
                        isImportant: true,
                        isDraft: false,
                        sentAt: 1551133930594,
                        removedAt: null,
                        labels: ["amsterdam"],
                        from: 'momo@momo.com',
                        to: 'user1@appsus.com'
                    },
                    {
                        id: 'e2',
                        subject: 'Miss you too!',
                        body: 'yayy',
                        isRead: 0,
                        isStarred: true,
                        isImportant: false,
                        isDraft: false,
                        sentAt: 1551133931700,
                        removedAt: null,
                        labels: ["amsterdam"],
                        from: 'user1@appsus.com',
                        to: 'momo@momo.com'
                    },
                    {
                        id: 'e3',
                        subject: 'heyhey!',
                        body: 'stop8756666668764824555555555555555552346347456700000098790000000000',
                        isRead: 1,
                        isStarred: false,
                        isImportant: true,
                        isDraft: false,
                        sentAt: 1551133940594,
                        removedAt: null,
                        labels: ["checkins", "games"],
                        from: 'bla@momo.com',
                        to: 'user1@appsus.com'
                    },
                    {
                        id: 'e4',
                        subject: 'kkk!',
                        body: 'wassaps',
                        isRead: 0,
                        isStarred: true,
                        isImportant: false,
                        isDraft: false,
                        sentAt: 1551133939594,
                        removedAt: null,
                        labels: ["games"],
                        from: 'bla@momo.com',
                        to: 'user1@appsus.com'
                    },
                    {
                        id: 'e5',
                        subject: '',
                        body: 'stop',
                        isRead: 0,
                        isStarred: true,
                        isImportant: false,
                        isDraft: false,
                        sentAt: 1551133940594,
                        removedAt: null,
                        labels: [],
                        from: 'user1@appsus.com',
                        to: 'hey@appsus.com'
                    },
                    {
                        id: 'e6',
                        subject: 'zzzzz!',
                        body: 'wassaps67555555555555555555555555555555555555558',
                        isRead: 1,
                        isStarred: false,
                        isImportant: true,
                        isDraft: false,
                        sentAt: 1551133939594,
                        removedAt: null,
                        labels: [],
                        from: 'user1@appsus.com',
                        to: 'way@appsus.com'
                    },
                    {
                        id: 'e7',
                        subject: 'jjjjj!',
                        body: 'wassapsfgdssssssssssssssssssssssssssssss\nsssssssssssssssssfgfgfsgfsg',
                        isRead: 0,
                        isStarred: true,
                        isImportant: true,
                        isDraft: false,
                        sentAt: 1551133939594,
                        removedAt: null,
                        labels: [],
                        from: 'bla@momo.com',
                        to: 'user1@appsus.com'
                    }
                ]
            },
            'user2@gmail.com': {
                fullname: 'Trolly trollll',
                labels: ["get out",
                    "of",
                    "my email"],
                emails: [
                    {
                        id: 'a1',
                        subject: 'told you',
                        body: 'not\nto\nread\nmy\nemails!',
                        isRead: 0,
                        isStarred: true,
                        isImportant: true,
                        isDraft: false,
                        sentAt: 1551133930594,
                        removedAt: null,
                        labels: ["get out", "of"],
                        from: 'momo@momo.com',
                        to: 'user2@gmail.com'
                    },
                    {
                        id: 'a2',
                        subject: 'Stop Tommy',
                        body: 'yayy',
                        isRead: 0,
                        isStarred: false,
                        isImportant: false,
                        isDraft: false,
                        sentAt: 1551133931700,
                        removedAt: null,
                        labels: ["my email"],
                        from: 'user2@gmail.com',
                        to: 'momo@momo.com'
                    }
                ]
            }
        };
        dbUtilService.saveToStorage(STORAGE_KEY_USERS, users_data)
    }
}



