import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '해외 시장 진출 기업을 위한 챗봇 서비스(Logo) 백엔드 개발 및 운영',
      startedAt: '2024-06',
      endedAt: '2024-07',
      where: 'KT AIVLE SCHOOL',
      descriptions: [
        {
          content: 'FAST API를 사용하여 전반적인 백엔드 구현 및 모델 서빙 구축',
        },
        {
          content: 'REDIS를 사용하여 챗봇 서비스의 문맥 유지를 위한 데이터 관리',
          // weight: 'MEDIUM',
          // descriptions: [
          //   { content: '30% improvement in system resource efficiency' },
          //   { content: 'Job Scheduler Refactor and Optimization' },
          // ],
        },
        {
          content: '비동기 작업을 이용하여 요청 처리의 시간 단축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '생성이 오래걸리는 챗봇 답변 요청을 비동기 방식으로 진행하여 다중 api요청이 왔을 때도 일관된 시간을 보장',
            },
            {
              content:
                'smtp를 통한 이메일 인증과정에서 사용자의 이메일을 받아 생성된 인증번호를 DB에 쓰는 작업과 이메일을 전송 작업이 별도의 쓰레드로 구성되게 하기 위해 비동기를 사용하였고, 이 결과 사용자가 응답 받는 시점이 약 2초에서 0.2초로 10배 정도의 시간을 단축 할 수 있었다.',
            },
          ],
        },
        {
          content: 'AWS를 통해 인프라 구축 및 Ubuntu 기반 OS 관리',
        },
        {
          content: 'docker를 이용하여 서비스 배포 및 컨테이너 관리',
        },
        {
          content: 'nginx 및 SSL을 이용한 보안서버(https) 구축',
        },
      ],
    },
    {
      title: '반려동물 용품 중고거래를 위한 플랫폼(bandari)',
      startedAt: '2023-02',
      endedAt: '2023-02',
      where: '풀스택 웹 융합 개발자 양성 과정',
      descriptions: [
        {
          content: '반려 동물 용품 거래를 위한 플랫폼 전반적인 백엔드 개발',
        },
        {
          content: '데이터 베이스 설계',
        },
        {
          content: 'Node.js,express.js로 API 서버 구축하고 기능 개발',
        },
        {
          content: 'client-server 통신과정을 경험과, 다른 직군과의 협업 등을 경험',
        },
      ],
    },
  ],
};

export default project;
