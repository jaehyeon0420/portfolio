import React from 'react';
import { Experience, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "배재현",
  dob: "1995.04.20",
  email: "qowogus0420@gmail.com",
  phone: "010-9431-9315",
  tagline1: "3년의 백엔드 숙련도를 바탕으로 '실행 가능한'",
  tagline2: "AI 서비스를 구축하는 엔지니어 ",
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
    category: 'Language',
    skills: ['Java', 'Python', 'JavaScript', 'SQL']
  },
  {
    category: 'Frontend',
    skills: ['React', 'Electron', 'Zustand', 'Recoil', 'Vite', 'jQuery', 'Axios']
  },
  {
    category: 'Backend',
    skills: ['Spring Boot', 'FastAPI', 'LangChain', 'LangGraph', 'Redis', 'PostgreSQL', 'Oracle', 'Mybatis']
  },
  {
    category: 'Infra',
    skills: ['Azure', 'Docker', 'Jenkins', 'Git Action']
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    kind : "Project",
    title: "사내 정보를 한 번에 찾는 데이터 허브",
    period: "2025.12.22 - 2026.01.02 (8일)",
    teamSize: 6,
    role: "시스템 아키텍트 및 RAG 시스템 구축",
    description: "LangChain 기반의 정형/비정형 통합 검색을 통해, 정보 탐색 시간을 혁신적으로 단축한 RAG 솔루션입니다.",
    techStack: ["LangChain & LangGraph", "LangSmith", "Python",
                "FastAPI", "React", "Javascript", "Zustand", "Electron", 
                "OpenAI API", "Redis", "PostgreSQL", "ONNX-int8", "KURE-v1"],
    readme: `# 자동 프롬프트 최적화기 (Auto-Prompt Optimizer)

## 개요
이 프로젝트는 수동 프롬프트 엔지니어링의 번거로움을 해결하기 위해 개선 과정을 자동화합니다.

## 주요 기능
- **RL 피드백 루프**: PPO를 사용하여 프롬프트 토큰을 최적화합니다.
- **평가 프레임워크**: 표준 벤치마크(MMLU)에 대한 내장 평가 기능을 제공합니다.
- **대시보드**: 수렴 과정을 실시간으로 시각화합니다.

## 결과
제로샷 베이스라인 대비 추론 작업에서 15% 성능 향상을 달성했습니다.

## 상세 구현 내용
이 프로젝트는 크게 세 가지 모듈로 구성됩니다. 첫째, 프롬프트 생성기 모델은 초기 프롬프트 후보군을 생성합니다. 둘째, 평가 모듈은 생성된 프롬프트를 사용하여 LLM의 출력을 얻고, 사전 정의된 메트릭을 기반으로 점수를 매깁니다. 셋째, 강화학습 에이전트는 이 점수를 보상(Reward)으로 사용하여 프롬프트 생성 정책을 업데이트합니다.

이 과정은 사용자가 설정한 목표 성능에 도달하거나 최대 반복 횟수에 도달할 때까지 반복됩니다. 웹 인터페이스는 React로 구현되어 사용자가 실시간으로 최적화 과정을 모니터링하고, 중간 결과를 확인할 수 있도록 돕습니다.

백엔드는 FastAPI로 구축되어 있으며, Celery를 사용하여 무거운 학습 작업을 비동기로 처리합니다. 결과 데이터는 PostgreSQL에 저장되어 추후 분석에 활용됩니다.`,
    thumnailimage : "files/images/deepnexus-logo.jpg",
    images: ["files/images/deepnexus-login.PNG",
             "files/images/deepnexus-main.PNG",
             "files/images/deepnexus-rag-1.PNG",
             "files/images/deepnexus-rag-2.jpg",
             "files/images/deepnexus-rag-3.jpg",
             "files/images/deepnexus-rag-4.PNG",
             "files/images/deepnexus-rag-5.PNG",
             "files/images/deepnexus-langsmith.PNG",
            ],
    videoUrl: "files/videos/deepnexus.mp4"
  },
  {
    id: "p2",
    kind : "Challenge",
    title: "강의 PDF와 대화 로그 기반 복습 노트 생성 앱",
    period: "2025.12.05 - 2025.12.12 (6일)",
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
    images: ["files/images/hackathon-1.png",
             "files/images/hackathon-2.png",
             "files/images/hackathon-3.png",
             "files/images/hackathon-4.png",
             "files/images/hackathon-5.png",
             "files/images/hackathon-6.png",
             "files/images/hackathon-7.png"
    ],
    videoUrl: "files/videos/hackathon.mp4"
  },
  {
    id: "p3",
    kind : "Project",
    title: "차량 파손 부위 판별 및 수리비 예측 시스템",
    period: "2025.11.11 - 2025.11.20 (8일)",
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
    images: ["files/images/snapq-1.PNG",
             "files/images/snapq-2.PNG",
             "files/images/snapq-3.PNG",
             "files/images/snapq-4.PNG",
             "files/images/snapq-5.PNG",
             "files/images/snapq-6.PNG"
    ],
    videoUrl: "files/videos/snapq.mp4"
  }  
];