const BasicInfoData = [
    {
        title:"DOB:",
        data:"21-08-1996"
    },
    {
        title:"EMAIL:",
        data:"sonawane.tejas.21@gmail.com"
    },
    {
        title:"PHONE:",
        data:"+91 7798261821"
    },
    {
        title:"ADDRESS:",
        data:"115, Gawale Nagar, Near Akashwani Kendra, Deopur, Dhule - 424005"
    },
    {
        title:"LANGUAGE:",
        data:"English, Hindi, Marathi"
    },
]

const SkillsData = [
    {
        title: 'HTML',
        styleData:{
            width: "75%",
            backgroundColor: "#a2d5f2"
        }
    },
    {
        title: 'CSS',
        styleData:{
            width: "70%",
            backgroundColor: "#2965f1"
        }   
    },
    {
        title: 'Javascript',
        styleData:{
            width: "65%",
            backgroundColor: "#f0db4f"
        }   
    }
]

const SkillsData2 = [
    {
        title: 'PHP',
        styleData:{
            width: "80%",
            backgroundColor: "#474A8A"
        }
    },
    {
        title: 'Python',
        styleData:{
            width: "70%",
            backgroundColor: "#646464"
        }
    },
    {
        title: 'Codeigniter',
        styleData:{
            width: "75%",
            backgroundColor: "#DD4814"
        }
    },
    {
        title: 'Laravel',
        styleData:{
            width: "80%",
            backgroundColor: "#fb503b"
        }
    }
]

const ExpData = [
    {
        title: 'Certification',
        year: '2019',
        desc: 'Completed an online course at NPTEL certified by IIT Madras named “Introduction to Machine Learning”.'
    },
    {
        title: 'Internship',
        year: '2020',
        desc: 'Completed 3-month internship on Web Development at Wunderkinds Technologies & Systems, Dhule.'
    },
    {
        title: 'Freelancing',
        year: '2020 - present',
        desc: 'Worked as a Freelancer.'
    },
]

const ProjectData = [
    {
        title:"ISE (Internal Semester Examination) Result System",
        language:"PHP",
        desc:"The Project aims to help teachers and students by using modern technique i.e., online examination rather than traditional technique i.e., paper and pen. This project is efficient and saves a lot of time and hard work of teachers and students.",
        link:"https://github.com/liktejas/Student-Result-System",
        id:"ise_result"
    },
    {
        title:"Text Extraction from Images",
        language:"Python",
        desc:"The project aims to fetch the text from text based images. In this project, the text in the image can be extracted in readable and writable form. This system helps people by saving time and manual work.",
        link:"https://github.com/liktejas/Text-Extractor",
        id:"text_extractor"
    },
    {
        title:"Student Management System for Agriculture Department",
        language:"Codeigniter 3",
        desc:"Keeps track of student’s information. Allows admin to add, edit, view and delete student information such as student scholarship information and leaving certificate information. All information can be printed, copied and downloaded in form of excel spreadsheet.",
        link:"https://github.com/liktejas/Student-Management-System-for-Agriculture-Department",
        id:"student"
    },
    {
        title:"QR Builder",
        language:"Laravel 8",
        desc:"Creates and Manages QR Codes, Contains 2 roles, admin and employee/user. Roles of admin: Create account for employees/users, Changeable Status of employees/users, allocate no. of QR Codes, allocate no. of QR Codes to be hit, Roles of Employee/User: Create QR Codes, Hit QR Codes, Graphical and Tabular Representation of Analysis of QR Codes.",
        link:"https://github.com/liktejas/QR-Builder",
        id:"qr_builder"
    },
    {
        title:"Product Information System",
        language:"Codeigniter 3",
        desc:"Provides information of various products like smartphones, television, etc. Roles: Admin and User, Functionality: Add various categories of products e.g., smartphones, television, etc. Add different types of companies of products. Add products. Search and View detail information about product.",
        link:"https://github.com/liktejas/Product-Info-System",
        id:"product"
    }
]

const ProjectData2 = [
    {
        title:"House Pricing Prediction",
        language:"Python",
        desc:"This is a machine learning project and it predicts the price of houses in Bengaluru City. Price Prediction depends upon 4 factors i.e., Location, Area in sqft, Rooms and Bathrooms. Dataset of Bengaluru City is used in this project for price prediction. Supervised Linear Regression Algorithm is used for price prediction.",
        link:"https://github.com/liktejas/House-Pricing-Prediction",
        id:"hpp"
    },
    {
        title:"Home Budget",
        language:"Laravel 8",
        desc:"Calculates the different kinds of expenses in house. Functionality: Add various kinds of expenditure type, add different types of bills, Add expenditures, Detail Report of Expenditure on daily and monthly basis with graphical and tabular representation.",
        link:"https://github.com/liktejas/Home-Budget",
        id:"home_budget"
    },
    {
        title:"ChatRoom",
        language:"PHP",
        desc:"ChatRoom is Web Application for Chatting. ChatRoom creates a room for chatting where multiple users can interact. Features: Login and Registration with email verification, Room Creation, Continue Existing Room, Change Password, Forgot Password, Deactivate Account.",
        link:"https://github.com/liktejas/ChatRoom",
        id:"chatroom"
    },
    {
        title:"Employee Leave System",
        language:"Laravel 8",
        desc:"Contains 2 roles i.e., admin and employee, Process: Admin creates account for employees, adds types of leaves and department for employees. Employee apply for leave and check status of leave and admin grant or reject the leave.",
        link:"https://github.com/liktejas/Employee-Leave-System",
        id:"employee_leave"
    },
    {
        title:"Movie Streaming and Downloading Website",
        language:"Laravel 8",
        desc:"A Website that allows downloading and online streaming of movies. Functionality: Admin adds the data of movies. Simple Searching and Filter Searching. Shows the information about movie. Allows Downloading and Online Streaming.",
        link:"https://github.com/liktejas/Movie-Streaming-Downloading",
        id:"movie"
    }
]

export default ProjectData;
export {ProjectData2, BasicInfoData, SkillsData, SkillsData2, ExpData};