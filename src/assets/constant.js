import abt1 from './images/certified.svg'
import abt2 from './images/expert.svg'

import package1 from './images/package1.png'
import package2 from './images/package2.png'

import photo1 from './images/testimonial1.png'
import photo2 from './images/testimonial2.png'
import star from './images/stars.svg'

import member1 from './images/team1.png'
import member2 from './images/team2.png'
import member3 from './images/team3.png'
import member4 from './images/team4.png'

export const aboutUs = [
    {
        id: 1,
        icon: abt1,
        title: 'certified teacher',
        desc: 'The gradual accumulation of information about'
    },
    {
        id: 2,
        icon: abt2,
        title: 'expert instruction',
        desc: 'The gradual accumulation of information about'
    }
]

export const packages = [
    {
        id: 1,
        img: package1,
        subHeading: '2,769 online courses',
        heading: 'watch our courses',
        desc: "We focus on ergonomics and  meeting you where you work. It's only a keystroke away.",
        sales: '15 Sales',
        mrp: '$16.48',
        price: '$6.48',
        duration: '22h...',
        lessons: '64 Lessons',
        progress: 'progress'

    },
    {
        id: 2,
        img: package2,
        subHeading: 'Lifetime access',
        heading: 'our experts teacher',
        desc: "We focus on ergonomics and  meeting you where you work. It's only a keystroke away.",
        sales: '15 Sales',
        mrp: '$16.48',
        price: '$6.48',
        duration: '22h...',
        lessons: '64 Lessons',
        progress: 'progress'

    }
]

export const testimonials = [
    {
        id:1,
        img: photo1,
        comment: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
        stars: star,
        name: 'Regina Miles',
        role: 'Designer'
    },
    {
        id:2,
        img: photo2,
        comment: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
        stars: star,
        name: 'Jone Samuel',
        role: 'Designer'
    },
]

export const teams = [
    {
        id: 1,
        img: member1,
        name: 'julian jameson',
        role: 'profession'
    },
    {
        id: 2,
        img: member2,
        name: 'andrew jameson',
        role: 'profession'
    },
    {
        id: 3,
        img: member3,
        name: 'julia margret',
        role: 'profession'
    },
    {
        id: 4,
        img: member4,
        name: 'nancy thomson',
        role: 'profession'
    },
    
]

export const footerLinks = [
    {
        id: 1,
        title: 'Company Info',
        links: {
            link1: 'About us',
            link2: 'Carrier',
            link3: 'We are hiring',
            link4: 'Blog',
        },
    },
    {
        id: 2,
        title: 'Features',
        links: {
            link1: 'Business Marketing',
            link2: 'User Analytic',
            link3: 'Live Chat',
            link4: 'Unlimited Support',
        }
    },
    {
        id: 3,
        title: 'Resources',
        links: {
            link1: 'IOS & Android',
            link2: 'Watch a Demo',
            link3: 'Customers',
            link4: 'API',
        }
    }
]