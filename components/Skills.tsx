import {
  SiCplusplus,
  SiPython,
  SiGo,
  SiRust,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiTensorflow,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiAwsamplify,
  SiGit,
  SiDocker,
  SiLinux,
  SiJenkins,
  SiVercel,
} from 'react-icons/si';
import { Nvidia } from '@lobehub/icons';
import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { icon: <SiCplusplus className="w-6 h-6" />, label: "C++" },
      { icon: <SiPython className="w-6 h-6" />, label: "Python" },
      { icon: <SiGo className="w-6 h-6" />, label: "Golang" },
      { icon: <SiRust className="w-6 h-6" />, label: "Rust" },
      { icon: <AssemblyIcon />, label: "Assembly" },
      { icon: <SiTypescript className="w-6 h-6" />, label: "TypeScript" },
      { icon: <SiJavascript className="w-6 h-6" />, label: "JavaScript" },
      { icon: <SiHtml5 className="w-6 h-6" />, label: "HTML" },
      { icon: <SiCss3 className="w-6 h-6" />, label: "CSS" },
      { icon: <SiMysql className="w-6 h-6" />, label: "SQL" },
      { icon: <VerilogIcon />, label: "Verilog" },
    ]
  },
  {
    title: "Libraries / Frameworks",
    skills: [
      { icon: <MfcIcon />, label: "MFC" },
      { icon: <SiReact className="w-6 h-6" />, label: "React" },
      { icon: <SiNodedotjs className="w-6 h-6" />, label: "Node.js" },
      { icon: <SiTensorflow className="w-6 h-6" />, label: "TensorFlow" },
      { icon: <CudaIcon />, label: "CUDA" },
      { icon: <FastApiIcon />, label: "FastAPI" },
      { icon: <SiTailwindcss className="w-6 h-6" />, label: "Tailwind CSS" },
      { icon: <SiNextdotjs className="w-6 h-6" />, label: "Next.js" },
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { icon: <SiGit className="w-6 h-6" />, label: "Git" },
      { icon: <SiDocker className="w-6 h-6" />, label: "Docker" },
      { icon: <SiLinux className="w-6 h-6" />, label: "Linux" },
      { icon: <SiJenkins className="w-6 h-6" />, label: "Jenkins" },
      { icon: <VSIcon />, label: "Visual Studio" },
      { icon: <SiVercel className="w-6 h-6" />, label: "Vercel" },
      { icon: <GtestIcon />, label: "Google Test" },
      { icon: <SIMD />, label: "SIMD" },
      { icon: <SiAwsamplify className="w-6 h-6" />, label: "AWS" },
      { icon: <FpgaIcon />, label: "Microcontrollers" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-background/50 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and tools
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <ScrollAnimation animation="fade-in-up" delay={100 + categoryIndex * 100}>
                <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
                  {category.title}
                </h3>
              </ScrollAnimation>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <ScrollAnimation 
                    key={skill.label} 
                    animation="fade-in-up" 
                    delay={200 + categoryIndex * 50 + skillIndex * 30}
                  >
                    <SkillCard icon={skill.icon} label={skill.label} />
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="group bg-card/30 backdrop-blur-sm border border-border rounded-xl p-4 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 hover:border-primary/30 text-center">
      <div className="text-primary group-hover:scale-110 transition-transform duration-300 mb-3 flex justify-center">
        {icon}
      </div>
      <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
        {label}
      </span>
    </div>
  );
}

function AssemblyIcon() {
  return (
    <div className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded text-xs font-bold text-gray-300">
      x86
    </div>
  );
}

function VerilogIcon() {
  return (
    <img src="/verilog.svg" alt="SystemVerilog" className="w-6 h-6" />
  );
}

function MfcIcon() {
  return (
    <img src="/MFC.svg" alt="MFC" className="w-6 h-6" />
  );
}

function CudaIcon() {
  return <Nvidia size={24} className="text-[#76B900]" />;
}

function FastApiIcon() {
  return (
    <img src="/FastAPI.svg" alt="FastAPI" className="w-6 h-6" />
  );
}

function SIMD() {
  return (
    <img src="/SIMD.svg" alt="SIMD" className="w-6 h-6" />
  );
}

function FpgaIcon() {
  return (
    <svg className="w-6 h-6 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="5" y="5" width="14" height="14" rx="3" ry="3" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </svg>
  );
}

function GtestIcon() {
  return (
    <img src="/Google.svg" alt="Google Test" className="w-6 h-6" />
  );
}

function VSIcon() {
  return (
    <img src="/VS.svg" alt="Visual Studio" className="w-6 h-6" />
  );
}