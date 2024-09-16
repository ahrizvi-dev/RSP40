import {RootStackParamList} from './src/navigations/types';

interface screensDataProps {
  id: string;
  name: string;
  route: keyof RootStackParamList;
}

export const screensData: screensDataProps[] = [
  {
    id: '1',
    name: 'About RSP',
    route: 'About',
  },
  {
    id: '2',
    name: 'Accomodation',
    route: 'Accomodation',
  },
  {
    id: '3',
    name: 'ExecutiveCouncil',
    route: 'ExecutiveCouncil',
  },
  {
    id: '4',
    name: 'Messages',
    route: 'Messages',
  },
  {
    id: '5',
    name: 'OrganizingCommitte',
    route: 'OrganizingCommitte',
  },
  {
    id: '6',
    name: 'RecreationalTour',
    route: 'RecreationalTour',
  },
  {
    id: '7',
    name: 'ScientificProgramme',
    route: 'ScientificProgramme',
  },
  {
    id: '8',
    name: 'SponsorshipTariff',
    route: 'SponsorshipTariff',
  },
];

interface executiveCouncilDataType {
  id: string;
  name: string;
  image: string;
  position: string;
}

export const executiveCouncilData: executiveCouncilDataType[] = [
  {
    id: '1',
    image: 'https://rsp40.com/uploads/1724398737.png',
    name: 'Prof. Dr. Shazia Faruqui',
    position: 'President',
  },
  {
    id: '2',
    image: 'https://rsp40.com/uploads/1724398768.png',
    name: 'Prof. Dr. Kiran Fatima Farooq',
    position: 'Secretary General',
  },
  {
    id: '3',
    image: 'https://rsp40.com/uploads/1724398796.jpg',
    name: 'Dr. Tanveer Zubairi',
    position: 'Vice President',
  },
  {
    id: '4',
    image: 'https://rsp40.com/uploads/1724398823.jpg',
    name: 'Dr. Rashed Nazir',
    position: 'Secretary Finance',
  },
  {
    id: '5',
    image: 'https://rsp40.com/uploads/1724398854.jpg',
    name: 'Dr. Khawaja Khurshid',
    position: 'President Elect',
  },
  {
    id: '6',
    image: 'https://rsp40.com/uploads/1724398919.png',
    name: 'Dr. Zia Salman Farooqi',
    position: 'Secretary General Elect',
  },
  {
    id: '7',
    image: 'https://rsp40.com/uploads/1724398947.jpg',
    name: 'Dr. Sadaf Nasir',
    position: 'Joint Secretary',
  },
  {
    id: '8',
    image: 'https://rsp40.com/assets/images/team/dr_rafia.png',
    name: 'Dr. Rafia Shahzad',
    position: 'Joint Secretary',
  },
  {
    id: '9',
    image: 'https://rsp40.com/uploads/1724399010.jpg',
    name: 'Dr. Adil Qayyum',
    position: 'Councilor (FED AREA, G&B)',
  },
  {
    id: '10',
    image: 'https://rsp40.com/uploads/1724398981.jpg',
    name: 'Dr. Anisa Sundal',
    position: 'Councilor KPK',
  },
  {
    id: '11',
    image: 'https://rsp40.com/assets/images/team/dr_noushen.png',
    name: 'Dr. Nosheen Ahmad',
    position: 'Councilor (PUNJAB)',
  },
  {
    id: '12',
    image: 'https://rsp40.com/uploads/1724399138.jpg',
    name: 'Dr. Syed Zain ud Din',
    position: 'Councilor Balochistan',
  },
  {
    id: '13',
    image: 'https://rsp40.com/uploads/1724399182.jpg',
    name: 'Prof. Dr. Ashraf Achakzai',
    position: 'Immediate Past President',
  },
  {
    id: '14',
    image: 'https://rsp40.com/uploads/1724399287.png',
    name: 'Dr. Mukhtiar Memon',
    position: 'Chief Editor PJR',
  },
  {
    id: '15',
    image: 'https://rsp40.com/uploads/1724399239.png',
    name: 'Prof. Dr. Saleha Anwar',
    position: 'President BIRSP',
  },
  {
    id: '16',
    image: 'https://rsp40.com/assets/images/team/Dr.Pari_gul.png',
    name: 'Dr. Pari Gul',
    position: 'Immediate Past Sec. General',
  },
];

export const messageData = [
  {
    id: '1',
    image: 'https://rsp40.com/uploads/1724304456.png',
    name: 'Prof. Dr. Shazia Faruqui',
    position: 'PRESIDENT RSP',
    message: `Welcome to the Radiological Society of Pakistan's official website. Our theme this year, "Connecting Across Borders," reflects our commitment to fostering global collaboration in the field of radiology. Our mission is to elevate the standards of radiological training within Pakistan by liaising with the international community. We aim to bridge gaps, share knowledge, and bring cutting-edge practices to our nation.
                By working together with global experts and institutions, we strive to enhance the skills and capabilities of our radiologists, ultimately improving patient care and outcomes. We invite you to join us in this endeavor, as we build a stronger, interconnected network of radiology professionals dedicated to excellence and innovation.
                Thank you for your continued support and engagement.`,
  },
  {
    id: '2',
    image: 'https://rsp40.com/uploads/1724304434.png',
    name: 'Prof. Dr. Kiran Fatima Farooq',
    position: 'SECRETARY GENERAL RSP',
    message: `As the Secretary General of the Radiological Society of Pakistan, I am delighted to welcome you to our upcoming conference. This event promises to be an extraordinary gathering of leading experts and practitioners in the field of Radiology.
                Why "Connecting Across Borders"? Because we recognize that excellence in radiology cannot thrive in isolation. By reaching across oceans, cultures, and time zones, we can learn from each other's experiences, share best practices, and elevate our collective
                Our mission extends beyond academic pursuits. It touches the lives of patients—the heart of our practice. By connecting with experts worldwide, we can bring advanced training, and compassionate care to our local communities. Together, we can improve diagnostic accuracy, enhance patient outcomes, and drive progress.
                I invite each of you to actively participate in the conference. Attend lectures, engage in discussions, and contribute your insights. Let us break down barriers, embrace diversity, and build a stronger radiology community—one that thrives on collaboration.`,
  },
  {
    id: '3',
    image: 'https://rsp40.com/uploads/1724305912.png',
    name: 'Dr. Saerah Iffat Zafar',
    position: 'Chairperson Scientific Committee',
    message:
      "This year, the scientific session aims to bring an amalgamation of national and international experience to the fore, with the aim to promote the conference theme of 'connecting across borders'. Scientific workshops and sessions are planned such that they not only enhance the professional knowledge but explore other arenas such as research skills and preparation of international examination (FRCR). The highlight of the conference however remains active participation by the faculty of The Royal College of Radiologists (RCR) in our scientific sessions.",
  },
];

interface organizingCommitteTypes {
  id: string;
  name: string;
  image: string;
  position: string;
}

export const organizingCommitteData: organizingCommitteTypes[] = [
  {
    id: '1',
    image: 'https://rsp40.com/uploads/1724398737.png',
    name: 'Prof. Dr. Shazia Faruqui',
    position: 'President',
  },
  {
    id: '2',
    image: 'https://rsp40.com/uploads/1724398768.png',
    name: 'Prof. Dr. Kiran Fatima Farooq',
    position: 'Secretary General',
  },
  {
    id: '3',
    image: 'https://rsp40.com/uploads/1724398796.jpg',
    name: 'Dr. Tanveer Zubairi',
    position: 'Vice President',
  },
  {
    id: '4',
    image: 'https://rsp40.com/uploads/1724399010.jpg',
    name: 'Dr. Adil Qayyum',
    position: 'Councilor (FED AREA, G&B)',
  },
  {
    id: '5',
    image: 'https://rsp40.com/assets/images/logo/Final-Logo-For-Website.png',
    name: 'Dr. Saerah Iffat Zafar',
    position: 'Chairperson Scientific Committee',
  },
];


interface tableDateProps {
  id: string;
  title: string,
  item1: string,
  item2: string,
  item3:string,
  item4: string,
  item5: string,
}

export const tableData:tableDateProps[] = [
    {
      id: '1',
      title: 'Conference Registration Fee',
      item1: 'RSP Life Member	',
      item2: 'Non-member Consultant	',
      item3: 'Resident',
      item4: 'Technologist	',
      item5: 'Foreign Delegate	',
    },
    {
      id: '2',
      title: 'Till October 15, 2024',
      item1: 'RS 8000	',
      item2: 'RS 12000	',
      item3: 'RS 5000	',
      item4: 'RS 2000	',
      item5: 'USD 100	',
    },
    {
      id: '3',
      title: 'After October 15, 2024',
      item1: 'RS 11000',
      item2: 'RS 15000',
      item3: 'RS 7000',
      item4: 'RS 3000',
      item5: 'USD 150',
    },
  ];