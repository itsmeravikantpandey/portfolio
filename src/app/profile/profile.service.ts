import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Read data from Google spreadsheet in Angular',
      desc: '',
      livedemo: 'https://ravikantk05.github.io/MyShop/#/',
      githurl: 'https://github.com/ravikantk05/MyShop',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 10 , Google SpreadsheetApi'
    },

    {
      id: 2,
      title: 'Blog App Using MERN Stack',
      desc: '',
      livedemo: 'https://ravikantk05.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://github.com/ravikantk05/Blogapp-using-MERN',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/z26.png',
      tech: 'React, Node, MongoDB, Express'
    },


    {
      id: 3,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      livedemo: 'https://ravikantk05.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/ravikantk05/Blog-using-mean',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/ravikantk05/Chat-app-using-Nodejs',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },


    {
      id: 5,
      title: 'Integrate Medium Blogs on your React App',
      desc: '',
      livedemo: 'https://ravikantk05.github.io/Medium-Blog-On-React-App#/',
      githurl: 'https://github.com/ravikantk05/Medium-Blog-On-React-App',
      mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'assets/images/z4.png',
      tech: 'React JS'
    },



    {
      id: 6,
      title: 'News App using ReactJS (Parsing XML to JSON)',
      desc: '',
      livedemo: 'https://ravikantk05.github.io/NewsApp-using-React',
      githurl: 'https://github.com/ravikantk05/NewsApp-using-React',
      mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
      imgUrl: 'assets/images/z24.png',
      tech: 'React JS, XMl to JSON'
    },



    {
      id: 7,
      title: 'Medium-Like Blog App Using Angular 9 and Firebase',
      desc: '',
      livedemo: 'https://ravikantk05.github.io/Blog-Book/',
      githurl: 'https://github.com/ravikantk05/Blog-Book',
      mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    },



    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: 'https://ravikantk05.github.io/COVOID-19/',
      githurl: 'https://github.com/ravikantk05/COVOID-19',
      mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
      imgUrl: 'assets/images/z2.png',
      tech: 'Angular 10 ,Bootstrap,Javascript'
    },


    {
      id: 9,
      title: 'Weather App with React',
      desc: '',
      livedemo: 'https://ravikantk05.github.io/React-Weather/',
      githurl: 'https://github.com/ravikantk05/React-Weather-App',
      mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api'
    },


    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/ravikantk05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/ravikantk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 'assets/images/z28.png',
      tech: 'Angular8, Java ,Hibernate'
    },


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/ravikantk05/Personal-Portfolio-Angular-Updated',
      mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
      imgUrl: 'assets/images/z11.png',
      tech: 'Angular ,Bootstrap'
    },


    {
      id: 12,
      title: 'Personal Portfolio Using Django',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/ravikantk05/My-Personal-Portfolio',
      mediumlink: 'https://ravikantpandey007.medium.com/personal-portfolio-using-django-dba49c355905',
      imgUrl: 'assets/images/z12.png',
      tech: 'Django'
    },

    {
      id: 13,
      title: 'Movie Success Prediction',
      desc: '',
      livedemo: 'https://ravikantpandey007.medium.com/',
      githurl: 'https://github.com/ravikantk05',
      mediumlink: 'https://ravikantpandey007.medium.com/movie-success-prediction-a67d871a7b1',
      imgUrl: 'assets/images/z13.png',
      tech: 'Python, Machine Learning, Django Framework.'
    },

    {
      id: 14,
      title: 'Matrimonial Website',
      desc: '',
      livedemo: 'https://ravikantpandey007.medium.com/',
      githurl: 'https://github.com/ravikantk05/Matrimonial-Website.git',
      mediumlink: 'https://ravikantpandey007.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },

  ]
  about2 = `Software Developer with 2.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, Javascript, and UI with Responsive Designs`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/15hXEyFoy9Zumyd2QRSzQEtqY49YrV-i9/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'HTML',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'CSS',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'C++',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'JAVA SCRIPT',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'JAVA',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    // {
    //   id: 4,
    //   company: 'Crest Data System',
    //   location: 'Ahmedabad',
    //   timeline: 'Aug 2021 to Present',
    //   role: 'Software Developer',
    //   work: 'Working as a full stack developer .Responsible for handling the UI in React and Managing the api calls in python Flask.'

    // },
    // {
    //   id: 3,
    //   company: 'Indianic Info Tech',
    //   location: 'Ahmedabad',
    //   timeline: 'Feb 2021 to June 2021',
    //   role: 'Software Developer',
    //   work: `Technologies : Angular , Node JS , MongoDB .
    //   Worked on the web application built in Angular for different business and Campaigns .
    //   Contributed on developing the admin dashboard with different charts and insights for the application.`
    // },
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

    {
      id: 1,
      company: 'Jio Platforms Limited.',
      location: 'Navi Mumbai',
      timeline: 'June 2021 - Present',
      role: 'Software Engineer',
      work: `Technologies : Flutter, Angular .

  Project 1 : Worked on Jio Campaign in which we run ads in different formats and across different networks. These campaigns do the customization for you by taking your assets and combining them to create a full ad  .

  Project 2 : Worked on Jio Observability software platform. it is a tool that aggregates data into logs, metrics and traces. Observability platforms then process that data into events and KPIs that can be leveraged by information teams to measure system performances 
  `
    },


  ]

  extraCircularInfo: any = [
    // {
    //   id:1,
    //   title: 'Blogger',
    //   description: '',
    //   img: 'assets/images/Ravikant Pandey – Medium1.png',
    //   url: 'https://ravikantpandey007.medium.com/'
    // },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/ravi_github_frontPage.png',
      url: 'https://github.com/itsmeravikantpandey/'
    }
    // {
    //   id:1,
    //   title: 'Freelancing',
    //   description: '',
    //   img: 'assets/images/ravikant_freelancing.png',
    //   url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    // },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
