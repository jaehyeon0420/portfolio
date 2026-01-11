import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { AzureOpenAI } from "openai";
import Button from './Button';
import { EXPERIENCES, PROJECTS, SKILLS, PERSONAL_INFO } from '../constants';

const QuestionSection: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const jobOptions = [
    'Backend Engineer (AI Serving)',
    'MLOps Engineer',
    'AI Research Scientist',
    'Machine Learning Engineer',
    'Computer Vision Engineer',
    'NLP Engineer',
    'Data Scientist'
  ];

  // Auto-fill prompt when job changes
  useEffect(() => {
    if (selectedJob) {
      setPrompt(`당신은 ${selectedJob} 면접관입니다. ${PERSONAL_INFO.name}님의 기술 스택, 경력, 프로젝트 이력을 바탕으로 ${selectedJob}에 적합한지 냉정하게 판단하고, 직무 적합도(%)와 판단 근거에 대해서 설명하세요.`);
    } else {
      setPrompt('');
    }
  }, [selectedJob]);

  const extractPercentage = (text: string): number => {
    const match = text.match(/(\d+)%/);
    return match ? parseInt(match[1], 10) : 0;
  };

  const handleAnalyze = async () => {
    if (!prompt || !selectedJob) return;

    setLoading(true);
    setError(null);
    setResult('');
    setScore(0);

    try {
      const client = new AzureOpenAI({
        endpoint: (import.meta as any).env.VITE_AZURE_OPENAI_ENDPOINT,
        apiKey: (import.meta as any).env.VITE_AZURE_OPENAI_API_KEY,
        apiVersion: "2025-01-01-preview", 
        deployment: (import.meta as any).env.VITE_AZURE_OPENAI_DEPLOYMENT,
        dangerouslyAllowBrowser: true 
      });
      
      // Construct context from portfolio data
      const context = `
        Candidate Name: ${PERSONAL_INFO.name}
        Skills: ${JSON.stringify(SKILLS)}
        Experience: ${JSON.stringify(EXPERIENCES)}
        Projects: ${JSON.stringify(PROJECTS)}
      `;

      const finalPrompt = `
        [Context Data of the Candidate]
        ${context}

        [User Request]
        ${prompt}

        [Instruction]
        Based on the provided context, act as the interviewer and evaluate the candidate. 
        You MUST provide a percentage score in your response (e.g., "직무 적합도: 85%").
        Answer in Korean.
      `;

      const response = await client.chat.completions.create({
        model: (import.meta as any).env.VITE_AZURE_OPENAI_DEPLOYMENT || "", 
        messages: [
          { role: "system", content: "You are a professional and objective AI technical interviewer." },
          { role: "user", content: finalPrompt }
        ],
        temperature: 0,
      });

      const text = response.choices[0].message.content || "결과를 불러오지 못했습니다.";
      setResult(text);
      setScore(extractPercentage(text));

    } catch (err) {
      console.error(err);
      setError("AI 분석 중 오류가 발생했습니다. API Key를 확인해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 50) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  return (
    <section id="question" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
            <Sparkles size={24} />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">AI 직무 적합도 확인</h2>
          <p className="text-slate-500 break-keep">
            가상의 AI 면접관에게, 저의 포트폴리오 내용을 바탕으로 직무 적합도를 물어보세요.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
        >
          <div className="flex flex-col gap-6">
            {/* Job Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">채용 직무 선택</label>
              <select 
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                className="w-full p-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm"
              >
                <option value="" disabled>직무를 선택해주세요</option>
                {jobOptions.map((job) => (
                  <option key={job} value={job}>{job}</option>
                ))}
              </select>
            </div>

            {/* Prompt Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">면접관 프롬프트</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="직무를 선택하면 자동으로 질문이 생성됩니다."
                className="w-full h-32 p-4 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none leading-relaxed shadow-sm"
              />
            </div>

            {/* Action Button */}
            <div className="flex justify-center mt-2">
              <Button 
                onClick={handleAnalyze} 
                disabled={!selectedJob || loading}
                className="w-full md:w-auto min-w-[200px] !py-3 !text-lg"
                icon={loading ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><Sparkles size={20}/></motion.div> : <Send size={20}/>}
              >
                {loading ? 'AI가 분석 중입니다...' : '적합도 검증'}
              </Button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            {/* Result Display */}
            {result && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                {/* Score Legend */}
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-3 justify-end px-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span>80% 이상 (높음)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span>50%~79% (보통)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span>50% 미만 (낮음)</span>
                  </div>
                </div>

                <div className={`p-6 rounded-xl border-l-4 ${getScoreColor(score)} bg-opacity-50 shadow-inner`}>
                  <div className="flex items-center gap-3 mb-4 border-b border-inherit pb-3 bg-transparent">
                    <CheckCircle size={24} />
                    <h3 className="text-xl font-bold">분석 결과</h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                    <div className="prose prose-sm max-w-none text-slate-800 leading-relaxed whitespace-pre-wrap">
                      {result}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuestionSection;