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
## 비즈니스 목표
- 기존 : 근로자는 필요한 정보를 탐색하고 수집하는데 업무 시간의 약 20% 이상을 낭비하고, 1회당 평균 200초 이상이 걸림
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
- 해결 : 조회 결과 건수가 0건 일 때에만 관리자 권한으로 데이터의 존재 여부만 후검증 및 분기 처리하여 사용자 경험 최적화

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

## 설명
더 빠른 실행을 위해 CUDA로 'Mish' 활성화 함수를 구현했습니다.

## PR 세부 사항
- CUDA 커널 구현 추가.
- 역전파를 위한 그래디언트 계산 추가.
- 99% 이상의 커버리지를 가진 단위 테스트 작성.`,
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
    description: "딥러닝 기반 차량 파손 이미지 분석을 통한 파손 종류 식별, 부위 감지, 실시간 수리비 예측 솔루션입니다.",
    techStack: ["Java", "Spring Boot", "Python", "FastAPI", 
                "React", "Javascript", "Zustand", "Custom Vision", 
                "Mask R-CNN", "PostgreSQL", "Jenkins", "GitHub Actions",
                "Azure Container Apps", "Azure Container Registry","Azure Static Web App","Azure VM"
              ],
    readme: `# 비전 가드 AI (Vision Guard AI)

## 미션
실시간 비디오 피드에서 이상 징후를 감지하여 산업 재해를 예방합니다.

## 기술 사양
- **모델**: 커스텀 파인튜닝된 Vision Transformer (ViT-B/16).
- **추론**: 엣지 디바이스(Jetson Orin)를 위한 TensorRT 최적화.
- **지연 시간**: 프레임당 50ms 미만의 처리 시간.

## 나의 기여
4명의 팀을 이끌었으며, 특히 모델 아키텍처 설계와 데이터 증강 파이프라인에 집중했습니다.`,
    thumnailimage : "files/images/snapq-logo.png",
    videoUrl: "files/videos/snapq.mp4",
    github_url : ""
  }  
];