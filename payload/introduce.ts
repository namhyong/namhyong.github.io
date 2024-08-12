import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '저는 백엔드 개발자 김남형으로, Node.js와 FastAPI를 포함한 다양한 기술을 활용해 백엔드 서비스 설계와 개발을 진행해 왔습니다. MySQL과 Redis를 사용한 데이터 관리, AWS 기반의 클라우드 인프라 구축, Docker를 이용한 컨테이너 관리 등을 통해 안정적이고 확장성 있는 백엔드 시스템을 운영한 경험이 있습니다.',
    'Java를 통해 객체지향의 원리를 이해하고, Spring Boot 스터디를 통해 자바 기반 백엔드 기술과 다양한 패턴, 아키텍처에 대해 학습했습니다. 새로운 기술을 배우는 것에 큰 흥미를 가지고 있으며, 이를 통해 다양한 기술 스택을 꾸준히 공부하고 실무에 적용할 준비가 되어 있습니다.',
    '개발 과정에서 비즈니스와의 소통을 중시하며, 팀원들과의 협업을 통해 문제를 신속하고 효과적으로 해결하는 데 주력하고 있습니다. 항상 더 나은 결과를 위해 다양한 관점에서 접근하고, 함께 최적의 솔루션을 찾기 위해 노력합니다. 또한, 새로운 도전과 학습을 통해 지속적으로 성장하는 것을 목표로 하며, 다양한 프로젝트를 통해 얻은 경험을 바탕으로 전문성을 높여가고 있습니다.',
  ],
  sign: 'Tux',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
