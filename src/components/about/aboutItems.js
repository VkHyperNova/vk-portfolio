import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const AboutItems = [
    {
      name: 'Experience',
      desc: '3+ Years Coding',
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

const aboutTextp1 = 'My name is Veikko and I love coding (problem-solving). I learn new things every day. Every project teaches me something new. I learn by doing. Most of my project are my own ideas. I like backend stuff more than frontend. But I can do both.'
const aboutTextp2 = 'My Goal is to be a Fullstack developer one day. But I need more experience for that. If your stack has some framework or language that is not listed on my portfolio. No Problem! Give me time and I will learn it from scratch.'
const aboutTextp3 = 'Currently I am looking for a job. I also can do freelancing.'

export default AboutItems
export { aboutTextp1, aboutTextp2, aboutTextp3 }