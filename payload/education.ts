import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'KT AIVLE SCHOOL',
      subTitle: '대한 상공회의소',
      startedAt: '2024-02',
      endedAt: '2024-08',
    },
    {
      title: '풀스택 웹 융합 개발자 양성 과정',
      subTitle: '서울경제 진흥원',
      startedAt: '2022-10',
      endedAt: '2023-04',
    },
    {
      title: '국민대학교',
      subTitle: '',
      startedAt: '2017-03',
      endedAt: '2024-08',
    },
    {
      title: '강원 홍천고등학교',
      subTitle: '',
      startedAt: '2014-03',
      endedAt: '2017-02',
    },
  ],
};

export default education;
