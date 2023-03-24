import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const AboutItems = [
    {
      name: 'Experience',
      desc: '5+ Years of hobby Coding',
      icon: FaAward
    },
    {
      name: 'Clients',
      desc: '~3 Clients',
      icon: FiUsers
    },
    {
      name: 'Projects',
      desc: '5+ Completed',
      icon: VscFolderLibrary
    },
  ];

const aboutTextp1 = 'Welcome to my portfolio website! My name is Veikko and I am a passionate web developer and programmer with a strong background in both front-end and back-end development. I have experience in a variety of programming languages, including golang, php, javascript and python, and I am always eager to learn new technologies and stay up-to-date with the latest industry trends.'
const aboutTextp2 = 'On this website, you will find a selection of my past projects, including live demos and code snippets, as well as information about my education, work experience, and technical skills. Whether you are an employer looking to hire a web developer or a fellow programmer looking to network, I hope that you will find something of interest on my website.'
const aboutTextp3 = 'Please feel free to take a look around and let me know if you have any questions or comments. Thanks for visiting!'

export default AboutItems
export { aboutTextp1, aboutTextp2, aboutTextp3 }