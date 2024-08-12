import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Python',
    },
    {
      title: 'JavaScript',
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'Fast API',
    },
    {
      title: 'NodeJS',
    },
    {
      title: 'Express.js',
    },
    {
      title: 'Django',
    },
    {
      title: 'React.js',
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'nginx',
    },
    {
      title: 'Redis',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'Docker',
    },
  ],
};

// const automation: ISkill.Skill = {
//   category: 'Automation',
//   items: [
//     {
//       title: 'Ansible',
//     },
//     {
//       title: 'Puppet',
//     },
//     {
//       title: 'Chef',
//     },
//     {
//       title: 'Jenkins',
//     },
//     {
//       title: 'CI/CD Pipelines',
//     },
//     {
//       title: 'Infrastructure as Code',
//     },
//   ],
// };

const networkSecurity: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Vim',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Git',
    },
    {
      title: 'Github',
    },
    {
      title: 'IDEA',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Linux',
    },
    {
      title: 'Agile',
    },
    {
      title: 'Climbing',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    kernelDevelopment,
    virtualization,
    // automation,
    networkSecurity,
    misc,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
