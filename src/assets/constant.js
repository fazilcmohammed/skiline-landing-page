import abt1 from './images/certified.svg'
import abt2 from './images/expert.svg'

import package1 from './images/package1.png'
import package2 from './images/package2.png'

import photo1 from './images/testimonial1.png'
import photo2 from './images/testimonial2.png'
import star from './images/stars.svg'

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