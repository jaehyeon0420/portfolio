import React from 'react';
import { Experience, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  id : "jaehyeon0420",
  name: "배재현",
  encName : "BaeJaeHyeon",
  dob: "1995.04.20",
  email: "qowogus0420@gmail.com",
  phone: "010-9431-9315",
  tagline1: "백엔드라는 탄탄한 기본기 위에 최신 AI 기술을 유연하게 접목하여 실무적인 솔루션을 만듭니다.",
  tagline2: "사내 정보 탐색 시간을 80% 이상 단축하는 정형/비정형 데이터 통합 RAG를 구축한 경험이 있으며",
  tagline3: "자동화된 CI/CD 환경을 구축하여 서비스의 안정성을 확보합니다.",
  location: "경기도 부천",
  avatarUrl: "files/images/id-photo.jpg" 
};

export const SOCIAL_LINKS = {
  github: "https://github.com/jaehyeon0420",
  linkedin: "https://www.linkedin.com/in/jaehyeon-bae-445a09384/",
  youtube: "#",
  velog: "https://velog.io/@qowo0420/series",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    company: "Microsoft AI School",
    role: "AI 엔지니어 양성과정 수강",
    period: "2025.09 -",
    description: ["Azure OpenAI 기반 RAG 및 LLM 서비스 개발", "ML, DL 모델 설계 및 클라우드 배포", "Python 데이터 분석 및 풀스택 웹 앱 통합 구현"],
    type: "Education"
  },
  {
    id: "2",
    company: "(주) KH정보교육원",
    role: "웹 개발자 양성과정 전문 강사",
    period: "2024.06 - 2025.07",
    description: ["React <> Spring Boot 실무 프로젝트 지도", "Database 설계 및 Mybatis 연동 기술 전수"],
    type: "Experience"
  },
  {
    id: "3",
    company: "(주) 한국신용카드결제",
    role: "풀스택 웹 솔루션 개발",
    period: "2020.09 - 2024.04",
    description: ["Spring 기반 서버 기능 구축", "JSP 활용 UI/UX 최적화 구현", "Oracle DB 모델링 및 Query 고도화"],
    type: "Experience"
  },
  {
    id: "4",
    company: "(주) KH정보교육원",
    role: "웹 개발자 양성과정 수강",
    period: "2020.01 - 2020.07",
    description: ["JSP <> SpringFramework 프로젝트", "JSP 활용 UI/UX 최적화 구현", "Oracle DB 모델링 및 Query 고도화"],
    type: "Education"
  }
];


export const SKILLS: SkillCategory[] = [
  {
    category: 'Strong',
    skills: [
      'Java', 'Spring Boot', 'Javascript', 'React.js', 'Axios', 'Zustand', 'JSP', 'jQuery', 'Oracle', 'Mybatis', 'HTML5', 'CSS3'
    ]
  },
  {
    category: 'Knowledgeable',
    skills: [
      'Python', 'FastAPI', 'LangChain', 'LangGraph', 'Redis', 'PostgreSQL', 'Apache Tomcat',
      'Electron', 'Recoil', 'Apache Tomcat'
    ]
  },
  {
    category: 'ETC',
    skills: [
      'Azure', 'Docker', 'Jenkins', 'GitHub Actions', 'Figma'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    kind : "Project",
    main_title : "Deep Nexus",
    title: "사내 정보를 한 번에 찾는 Agentic RAG",
    period1: "2025.12.22 - 2026.01.02",
    period2: "8일",
    teamSize: 6,
    role: "시스템 아키텍트 및 RAG 시스템 구축",
    description: "LangChain 기반의 정형/비정형 통합 검색을 통해, 정보 탐색 시간을 혁신적으로 단축한 RAG 솔루션입니다.",
    techStack: ["LangChain", "LangGraph", "LangSmith", "Python",
                "FastAPI", "React", "Javascript", "Zustand", "Electron", 
                "OpenAI API", "Redis", "PostgreSQL(pgvector)", "ONNX-int8", "KURE-v1"],
    readme: `
## 개요
- 기존 : 근로자는 필요한 정보를 탐색하고 수집하는데 업무 시간의 약 20% 이상을 낭비하고, --1회당 평균 200초-- 이상이 소요됨
- 목표 : 사내 정형(RDB)/비정형(Google Drive) 통합 데이터 기반 RAG를 구축하여 업무 생산성 향상

## 기술 선정 이유
- **LangGraph**: 정형 데이터 조회 명령어(SQL) 오류 발생 시, 자가 교정 루프를 통해 응답 성공률을 높이기 위함
- **ONNX-int8**: 프로젝트 목표인 탐색 시간 단축을 위해, 1~2% 내외의 미세한 정확도 손실을 감수하는 대신 CPU 환경에서도 안정적 추론 속도 보장을 위함
- **KURE-v1**: 한국어 처리·전문 용어 파악·방대한 양의 문서 처리에 특화되어, 기업 내 비즈니스 지식이 포함된 문서 분석 및 검색에 최적화
- **Redis**: 시스템 부하 감소와 빠른 응답 처리를 위해 시맨틱 캐싱을 통해 의적 유사도 90% 이상 일치 질문에 대한 즉각 응답 체계 구축
- **pgvector**: 단일 PostgreSQL 엔진을 통한 정형/비정형 데이터 통합 설계로 제한된 일정 내에서 관리 복잡도 최소화
- **Electron**: 기존 업무 흐름을 저해하지 않는다는 사용자 경험을 확보하고자 브라우저 환경에서 벗어나 챗봇 형태의 서비스를 제공

## 문제 해결 과정
##1. Reranker 모델 도입에 따른 Latency 병목 현상##
- 문제 : 구축 이후 성능 분석 결과, 검색 정확도 향상을 위해 도입한 Reranker 모델이 전체 워크플로우 시간의 약 95%(Chunk 당 7초 * 15개 = --총 105초--)를 차지
- 1차 시도 : Reranking 이후 최종 결과 Chunk를 3개로 조정 -> 미세한 LLM 추론 속도 향상은 있었으나 Reranking 대상 Chunk는 여전히 15개로 사실상 무의미
- 2차 시도 : 검색 Chunk 개수 5개로 조정 -> 전체 속도는 1/3 빨라지지만 정확도가 매우 떨어져 대규모 환경일수록 답변의 품질이 떨어짐
- 해결 : 양자화를 적용한 경량 모델(ONNX-int8)로 교체하여 Chunk 당 추론 속도를 기존 대비 ^^약 23배^^ 향상시킴(Chunk 당 0.3초 * 15개 = ^^총 4.5초^^)

##2. 보안 강화 목적인 RLS 정책이 적용된 데이터 접근 시, 권한 부족과 사용자 인지 불일치##
- 문제 : LLM 생성 SQL 실행 -> 권한 부족으로 조회 결과 0개 -> 사용자에게 "데이터 미 존재" 응답 -> 권한 부족과 데이터 실제 부재를 구분하지 못함
- 1차 시도 : 모든 SQL 실행 이전에 사용자 권한을 체크하기 위한 검증 질의 실행 -> 요청마다 검증 로직 추가되어 성능 저하 발생
- 해결 : 조회 결과 건수가 0건 일 때에만 관리자 권한으로 데이터의 존재 여부 후검증 및 분기 처리하여 사용자 경험 최적화

## 성과
- 정보 탐색 시간을 --200초--에서 평균 ^^7초^^로 ^^96.5%^^ 단축하여, 업무의 생산성 향상
- KURE-v1 모델 도입으로 약 ^^30%^^ 이상의 한국어 문서 검색 정확도 증가
`,
    thumnailimage : "files/images/deepnexus-logo.jpg",
    videoUrl: "files/videos/deepnexus.mp4",
    github_url : "https://github.com/jaehyeon0420/ms-second-fast-repo",
  },
  {
    id: "p2",
    kind : "Challenge",
    main_title : "The Missing Page",
    title: "강의 PDF와 대화 로그 기반 복습 노트 생성 앱",
    period1: "2025.12.05 - 2025.12.12",
    period2: "6일",
    teamSize: 2,
    role: "프롬프트 엔지니어링",
    description: "학습자와 LLM간의 대화 로그를 분석하여 관련 강의 슬라이드에 자동으로 매핑 및 복습 노트를 생성해주는 에듀테크 서비스입니다.",
    techStack: ["Google AI Studio", "React", "Typescript", "Gemini 3.0 Preview"],
    readme: `# TF Addons 기여

## 해커톤 개요
- 주최 : Google DeepMind / Kaggle
- 행사명 : Vibe Coding with Gemini 3 Pro
- 목적 및 특징 : Gemini 3 Pro를 활용하여 ##자연어 프롬프팅##만으로 개발자의 의도를 지시문으로 변환하여 아키텍처를 설계하고 기능을 구현하는 능력 평가

## 프로젝트
- 문제 : 강의 PDF와 대화 로그를 번갈아 확인하며 발생하는 --학습 흐름 단절--과 방대한 대화 로그를 --과도하게 압축 요약--하는 LLM의 한계
- 목적 : 강의 PDF, 학습자와 LLM 간의 대화 로그를 분석해 학습자의 부족한 부분을 파악하고 관련 슬라이드 뒤에 요약/보충 페이지를 삽입한 새로운 PDF 제공
- 워크플로우 : 강의 PDF와 대화 로그 입력 -> 대화 로그를 의미 단위로 분할 -> 분할된 각 청크와 PDF 슬라이드 매핑 -> 매핑된 슬라이드와 대화 로그에서 발견된 학습 정도를 결합한 요약/보충 페이지 생성 -> 원본 슬라이드 사이에 생성된 페이지 삽입하여 최종 결과물 제공

## 프롬프팅 전략
##1. 단계적 추론 기법(Chain of Thought) 적용##
- 문제 : 분할된 청크와 PDF 슬라이드 매핑 시 연관되지 않은 슬라이드와 매핑되거나 하나의 슬라이드에 여러 청크가 매핑되는 현상 발생
- 해결 : "1. 핵심 키워드 추출" -> "2. 슬라이드 텍스트 대조" -> "3. 연관성 점수 산출" -> "4. 슬라이드 매핑"의 단계적 추론 제시
##2. 상태 유지를 위한 Context.md 생성##
- 문제 : 대화가 길어짐에 따라 LLM이 이전의 대화 내용을 망각하여 코드 일관성이 흐트러짐.
- 해결 : 프로젝트 루트에 Context.md를 생성하고 매번 ##현재 구현 상태##, ##함수 목록##, ##버그 내용##을 기록하게 함. 이후 모든 작업 시작 전 이 파일을 참조하게 페르소나 부여

## 성과
- ^^7,000토큰 이상^^의 대화 로그와 약 ^^20페이지^^ 분량의 강의 PDF를 단일 컨텍스트 창에서 데이터 유실 없이 처리
- CoT 기법 적용하여 단 ^^5번^^의 프롬프팅으로 최소 MVP 모델 구현 완료
- Context.md 생성 전후 비교 시, 긴 대화 세션(30회 이상의 턴)에서 발생하던 "대화 내용 망각" 오류를 기존 대비 ^^60%^^ 이상 억제
`,
    thumnailimage : "files/images/hackathon-logo.png",
    videoUrl: "files/videos/hackathon.mp4",
    github_url : "https://www.kaggle.com/competitions/gemini-3/writeups/new-writeup-1765379357595"
  },
  {
    id: "p3",
    kind : "Project",
    main_title : "Snap Q",
    title: "차량 파손 부위 판별 및 수리비 예측 시스템",
    period1: "2025.11.11 - 2025.11.20",
    period2: "8일",
    teamSize: 6,
    role: "풀스택 개발 및 DevOps 리드",
    description: "딥러닝 기반 차량 파손 이미지 분석을 통한 파손 종류와 부위를 감지하여 실시간 수리비를 예측하는 솔루션입니다.",
    techStack: ["Java", "Spring Boot", "Python", "FastAPI", 
                "React", "Javascript", "Zustand", "Custom Vision", 
                "Mask R-CNN", "PostgreSQL", "Jenkins", "GitHub Actions", "Docker",
                "Azure VM", "Azure Container Registry", "Azure Container Apps","Azure Static Web App"
              ],
    readme: `
## 개요
- 문제: 차량 파손 발생 시 정비소별 주관적 견적 산출로 인해 --정보 비대칭 및 과잉 청구-- 문제와 견적 확정까지 반복적인 커뮤니케이션으로 인해 --평균 1~2일 이상--의 시간 소요
- 목표: 컴퓨터 비전 모델 기반 파손 부위 감지 및 면적 기반의 수리비 예측 시스템 PoC를 구축하여, ^^3분 내^^ 가이드 견적 제공

## 기술 선정 이유
**Azure Container Apps** : 단기 스프린트 내 복잡한 인프라 관리 없이도 자동 스케일링 및 컨테이너 관리가 가능함
**Spring Boot & FastAPI 분리**: PoC 단계에서 모델의 잦은 교체와 성능 테스트 필요로 AI 모델 서빙 담당인 FastAPI와 비즈니스 담당인 Spring을 분리
**GitHub Actions** : 코드 변경 감지 및 소스 코드 레벨의 CI(Lint, Test)를 수행하는 클라우드 네이티브 도구로 활용
**Jenkins(on VM)**: 내부 네트워크 보안이 중요한 인프라 환경을 가정하여, Docker 이미지 빌드 및 ACR(Azure Container Registry) 푸시 등 고부하 작업과 인프라 제어를 분담하는 하이브리드 파이프라인 구성

## 문제 해결 과정
##1. 딥러닝 모델 Docker 이미지 크기로 인한 배포 지연##
문제: Mask R-CNN 및 추론 라이브러리가 포함된 FastAPI 이미지 크기가 --4GB 이상--으로 커져, CI/CD 빌드 및 배포 시간이 --15분 이상-- 소요됨
시도: 단일 Dockerfile로 빌드 시 모든 라이브러리 레이어가 캐싱되지 않아 매번 전체를 재압축함
해결: Multi-stage Build를 적용하고, 변경이 적은 딥러닝 의존성 레이어를 하단으로 배치하여 캐시 효율을 최적화함. 결과적으로 이미지 크기를 최적화하고 재배포 시간을 ^^약 5분 내외^^로 ^^66% 감소^^시킴

##2. 파이프라인 간 인증 정보 노출 및 보안 취약성##
문제: Jenkins와 Azure 환경을 연결하는 과정에서 Service Principal 키가 설정 파일에 노출될 위험 및 도구 간 인증 연동의 복잡성 발생
시도: Jenkins Credentials Plugin에 평문 저장 시 관리 포인트 증가 및 유출 위험 존재
해결: Azure CLI와 연동된 Managed Identity 및 Jenkins의 환경변수 마스킹을 적용하고, GitHub Actions에서 Jenkins로의 호출 시 웹훅 토큰 인증을 강화하여 보안 가시성 확보

##3. 서로 다른 모델 결과값(Classification & Segmentation)의 데이터 파이프라인 불일치##
문제: Custom Vision(분류)의 출력 포맷과 Mask R-CNN(세그멘테이션) 입력 요구 형식이 달라, API 연동 시 데이터 유실 및 런타임 에러 발생
시도: 각 모델 서버를 직접 호출하게 하였으나 네트워크 오버헤드와 데이터 정합성 문제 발생
해결: FastAPI를 Middleware 패턴으로 활용하여 Custom Vision의 추론 결과를 실시간 파싱하고, Mask R-CNN의 Tensor 형태에 맞게 전처리하는 통합 추론 로직을 백엔드에 구축하여 데이터 흐름을 정형화함

## 성과
- 수동 견적 확인 프로세스를 자동화하여 견적 산출 시간을 --최소 수 시간--에서 ^^평균 10초 이내^^로 단축하여 PoC 완성도 증명
- 사용자 인증(OAuth2) 기반의 데이터 관리 체계를 구축하여, 개인별 수리 이력 추적 및 견적 데이터의 신뢰도 확보
- 코드 Push부터 Azure 배포까지 전 과정을 자동화하여, 8일의 짧은 개발 기간 동안 수동 배포 리소스를 ^^0건^^으로 유지하며 로직 개선에 집중
- 서로 다른 프레임워크 기반의 AI 모델을 하나의 백엔드 워크플로우로 통합하여, 단순 분류를 넘어선 면적 기반의 정밀한 비용 산출 엔진 구현
`,
    thumnailimage : "files/images/snapq-logo.png",
    videoUrl: "files/videos/snapq.mp4",
    github_url : ""
  }  
];