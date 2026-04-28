import React, { useState, useEffect } from 'react';
import {
  Terminal, Code2, Rocket, MessageSquare, Map, Waves,
  Palette, Box, Layers, Zap, Share2, MousePointer2,
  RotateCcw, ArrowRight, Globe, Database, Sun, Moon, GitBranch, CheckCircle2
} from 'lucide-react';

const App = () => {
  // 다크모드 상태
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // 프로세스 단계 컴포넌트
  const ProcessStep = ({ step, title, desc, icon: Icon, color }) => (
    <div className={`p-6 rounded-2xl border-2 ${color} transition-transform hover:scale-[1.02]`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
          <Icon size={20} className="text-slate-700 dark:text-slate-200" />
        </div>
        <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter font-mono">Step {step}</span>
      </div>
      <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{desc}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <Code2 size={20} />
            </div>
            <span className="font-black text-xl tracking-tight text-blue-900 dark:text-blue-300">장흥 삼다수 코딩동아리</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest">
              AI-NATIVE EDUCATION HUB
            </div>
            {/* 다크모드 토글 버튼 */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-bold"
              aria-label="다크모드 전환"
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span className="text-slate-200">라이트</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-600" />
                  <span className="text-slate-700">다크모드</span>
                </>
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/40 dark:to-slate-950 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
            2026 JANGHEUNG CODING CLASS
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
            장흥 코딩동아리 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic">
              세상을 코딩(Coding)하자
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            "코드 한 줄 몰라도 괜찮을까?" <br />
            영현T와 함께라면 누구나 장흥의 이야기를 담은 웹과 게임을 만들 수 있어.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 py-10">

        {/* 1. Foundation Section */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl">
                <Database size={32} />
              </div>
            </div>
            <h2 className="text-3xl font-black mb-4 text-slate-900 dark:text-white">1. 우리가 배우는 기초 탄탄</h2>
            <p className="text-gray-500 dark:text-gray-400">AI에게 똑똑하게 지시하기 위해 반드시 알아야 할 3요소</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-orange-200 dark:hover:border-orange-700 transition-all">
              <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">HTML (뼈대)</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">웹사이트의 구조를 잡는 설계도입니다. 어디에 무엇을 놓을지 결정합니다.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-200 dark:hover:border-blue-700 transition-all">
              <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">CSS (옷)</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">뼈대에 예쁜 색과 인테리어를 입힙니다. 사용자에게 보여지는 디자인을 담당합니다.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-yellow-200 dark:hover:border-yellow-700 transition-all">
              <div className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">JS (근육)</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">웹사이트에 생명력을 불어넣습니다. 클릭하면 반응하고 데이터가 움직이게 합니다.</p>
            </div>
          </div>
        </section>

        {/* 2. AI-Native Process Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl">
                <Zap size={32} />
              </div>
            </div>
            <h2 className="text-3xl font-black mb-4 text-slate-900 dark:text-white tracking-tighter">2. AI 네이티브 개발 프로세스</h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium italic">아이디어가 실제 웹사이트로 탄생하는 실전 워크플로우</p>
          </div>

          {/* Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <ProcessStep
              step="1"
              title="기획 (Claude AI)"
              desc="대화로 전체 코드를 생성하고 미리보기로 확인합니다."
              icon={MessageSquare}
              color="bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900/50"
            />
            <ProcessStep
              step="2"
              title="조립 (Cursor IDE)"
              desc="코드를 복사해 넣고 AI와 함께 세부 에러를 수정합니다."
              icon={MousePointer2}
              color="bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900/50"
            />
            <ProcessStep
              step="3"
              title="저장 (GitHub)"
              desc="소스 코드를 온라인 저장소에 안전하게 기록합니다."
              icon={Share2}
              color="bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
            />
            <ProcessStep
              step="4"
              title="배포 (Vercel)"
              desc="전 세계 사람들이 볼 수 있게 웹사이트로 공개합니다."
              icon={Globe}
              color="bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50"
            />
          </div>

          {/* Infinity Loop Visual (이미 어두운 톤이라 거의 그대로) */}
          <div className="bg-slate-900 dark:bg-black rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden border dark:border-slate-800">
            <div className="relative z-10 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
                <RotateCcw className="text-blue-400 animate-spin-slow" />
                <h3 className="text-2xl font-bold italic text-blue-400">무한 업데이트 루프</h3>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-around gap-12">
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-black mb-2 tracking-tighter">Modify</div>
                  <div className="text-xs text-slate-400 uppercase tracking-[0.2em]">Cursor IDE</div>
                </div>
                <ArrowRight className="hidden md:block text-slate-700" size={32} />
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-black mb-2 text-blue-400 font-mono italic">Push</div>
                  <div className="text-xs text-slate-500 uppercase tracking-[0.2em]">To GitHub</div>
                </div>
                <ArrowRight className="hidden md:block text-slate-700" size={32} />
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-black mb-2 tracking-tighter">Live</div>
                  <div className="text-xs text-slate-400 uppercase tracking-[0.2em]">Vercel Deploy</div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-600/10 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
                <p className="text-center text-blue-200 text-sm leading-relaxed max-w-2xl mx-auto">
                  "우리가 코드를 수정해서 깃허브에 올리기만 하면 끝! <br />
                  Vercel이 실시간으로 변화를 감지하여 웹사이트를 즉시 업데이트합니다."
                </p>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]"></div>
          </div>

          {/* GitHub 푸시 과정 섹션 */}
          <div className="mt-12">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl">
                  <Terminal size={32} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-3 text-slate-900 dark:text-white tracking-tighter">
                터미널로 <span className="text-blue-600 dark:text-blue-400">GitHub에 올리기</span>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                딱 4줄이면 내 코드가 전 세계에 공개돼요!
              </p>
            </div>

            {/* 터미널 윈도우 디자인 */}
            <div className="bg-slate-900 dark:bg-black rounded-2xl shadow-2xl overflow-hidden border border-slate-700 dark:border-slate-800">
              {/* 터미널 헤더 (맥OS 스타일 점 3개) */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 dark:bg-slate-900 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-3 text-xs text-slate-400 font-mono">bash — vibe-project</span>
              </div>

              {/* 터미널 본문 */}
              <div className="p-6 md:p-8 font-mono text-sm space-y-5">
                {[
                  {
                    cmd: 'git add .',
                    desc: '수정한 모든 파일을 업로드 대기 목록에 추가',
                    color: 'text-green-400'
                  },
                  {
                    cmd: 'git commit -m "first commit"',
                    desc: '변경 내용에 메모를 붙여서 저장',
                    color: 'text-blue-400'
                  },
                  {
                    cmd: 'git branch -M main',
                    desc: '기본 브랜치 이름을 main으로 설정',
                    color: 'text-purple-400'
                  },
                  {
                    cmd: 'git push -u origin main',
                    desc: 'GitHub로 코드를 업로드! 🚀',
                    color: 'text-yellow-400'
                  },
                ].map((line, i) => (
                  <div key={i} className="group">
                    <div className="flex items-start gap-3">
                      <span className="text-slate-500 select-none">{`>`}</span>
                      <div className="flex-1">
                        <code className={`${line.color} font-bold text-base`}>
                          {line.cmd}
                        </code>
                        <p className="text-slate-400 text-xs mt-1 ml-1">
                          # {line.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* 성공 메시지 */}
                <div className="pt-4 mt-4 border-t border-slate-700/50 flex items-center gap-2 text-green-400">
                  <CheckCircle2 size={16} />
                  <span className="text-xs">Successfully pushed to GitHub!</span>
                </div>
              </div>
            </div>

            {/* 안내 박스 */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-bold text-sm text-blue-900 dark:text-blue-300">처음 한 번만!</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  GitHub에서 새 저장소(repository)를 만든 뒤,
                  <code className="bg-white dark:bg-slate-800 px-1.5 py-0.5 mx-1 rounded text-blue-600 dark:text-blue-400">git remote add origin [주소]</code>
                  로 연결해두면 그다음부터는 위 4줄이면 끝!
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/50">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="font-bold text-sm text-amber-900 dark:text-amber-300">두 번째부터는 3줄!</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  코드 수정 → <code className="bg-white dark:bg-slate-800 px-1.5 py-0.5 mx-1 rounded text-green-600 dark:text-green-400">add</code>
                  → <code className="bg-white dark:bg-slate-800 px-1.5 py-0.5 mx-1 rounded text-blue-600 dark:text-blue-400">commit</code>
                  → <code className="bg-white dark:bg-slate-800 px-1.5 py-0.5 mx-1 rounded text-yellow-600 dark:text-yellow-400">push</code>
                  만 반복하면 Vercel이 자동 배포해줘요!
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* 3. Projects Preview */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="mb-6 inline-block p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl">
                <Rocket size={32} />
              </div>
              <h2 className="text-4xl font-black mb-8 leading-tight tracking-tight text-slate-900 dark:text-white">
                3. 우리가 <br />장흥에서 <br />만들 프로젝트
              </h2>
              <div className="space-y-4">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-5 items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-xl text-blue-600 dark:text-blue-400"><Waves /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg">장흥 물축제 홍보 게임</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">탐진강 장어 잡기 리액트 웹게임</p>
                  </div>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-5 items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-xl text-green-600 dark:text-green-400"><Map size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg">장흥 여행코스 메이커</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">AI 맞춤 우드랜드 여행 추천 시스템</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-10 md:p-12 relative shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-10 text-slate-900 dark:text-white flex items-center gap-3">
                  <Layers className="text-blue-600 dark:text-blue-400" /> 학습 로드맵
                </h3>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="flex-none w-12 h-12 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl">1</div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-lg">기획 (Vibe)</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">장흥의 가치를 발견하고 어떤 웹을 만들지 대화로 결정하기</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-none w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-2xl flex items-center justify-center font-black text-xl">2</div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-lg">제작 (AI + Code)</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Claude와 Cursor를 활용해 실제 웹 기능 구현하기</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-none w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-2xl flex items-center justify-center font-black text-xl">3</div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-lg">배포 (Share)</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Vercel로 전 세계 친구들에게 나의 프로젝트 자랑하기</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Greeting (이미 어두운 톤) */}
        <section className="text-center py-24 px-6 bg-slate-900 dark:bg-black rounded-[3.5rem] text-white border dark:border-slate-800">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
            준비됐니? <br />
            <span className="text-blue-400">장흥의 미래를 코딩하자!</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium leading-relaxed mb-12">
            기술을 배우는 것은 단순한 지식이 아닙니다. <br />
            나의 생각을 현실로 만드는 가장 강력한 마법을 배우는 것입니다.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 text-slate-500 text-sm">
            <Code2 size={16} /> 2026 장흥 삼다수 코딩동아리 Orientation
          </div>
        </section>
      </main>

      <footer className="py-16 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="text-slate-400 dark:text-slate-500 text-xs font-bold tracking-widest uppercase">
          © 2026 장흥 삼다수 코딩동아리 | 김영현T 정보교사 제작
        </p>
      </footer>

      {/* Global Animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
