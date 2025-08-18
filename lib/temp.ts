import { StartupCardType } from '@/components/StartupCard';

// temporary data
export const startupCardData: StartupCardType[] = [
  {
    _id: '1',
    _createdAt: '2025-08-18T10:00:00Z',
    title: 'AI Health Assistant',
    description:
      'A digital assistant powered by AI to help users track and improve their health habits.',
    image: 'https://placehold.co/600x400?text=AI+Health+Assistant',
    author: {
      name: 'Alice Johnson',
      _id: 'author_1',
      img: 'https://placehold.co/100x100?text=Alice',
    },
  },
  {
    _id: '2',
    _createdAt: '2025-08-15T14:30:00Z',
    title: 'GreenEnergy Hub',
    description:
      'A platform connecting households with affordable renewable energy providers.',
    image: 'https://placehold.co/600x400?text=GreenEnergy+Hub',
    author: {
      name: 'Brian Lee',
      _id: 'author_2',
      img: 'https://placehold.co/100x100?text=Brian',
    },
  },
  {
    _id: '3',
    _createdAt: '2025-08-10T09:15:00Z',
    title: 'EduNext',
    description:
      'An e-learning platform designed to make online education more engaging with AI tutors.',
    image: 'https://placehold.co/600x400?text=EduNext',
    author: {
      name: 'Catherine Smith',
      _id: 'author_3',
      img: 'https://placehold.co/100x100?text=Catherine',
    },
  },
];
