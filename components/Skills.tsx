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

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-5xl font-bold mb-8 text-sky-300 text-center md:text-left">SKILLS</h2>

      {/* Languages */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Languages</h3>
        <div className="flex flex-wrap gap-8 text-gray-300 text-lg leading-relaxed">
          <SkillItem icon={<SiCplusplus className="w-6 h-6" />} label="C++" />
          <SkillItem icon={<SiPython className="w-6 h-6" />} label="Python" />
          <SkillItem icon={<SiGo className="w-6 h-6" />} label="Golang" />
          <SkillItem icon={<SiRust className="w-6 h-6" />} label="Rust" />
          <SkillItem icon={<AssemblyIcon />} label="Assembly" />
          <SkillItem icon={<SiTypescript className="w-6 h-6" />} label="TypeScript" />
          <SkillItem icon={<SiJavascript className="w-6 h-6" />} label="JavaScript" />
          <SkillItem icon={<SiHtml5 className="w-6 h-6" />} label="HTML" />
          <SkillItem icon={<SiCss3 className="w-6 h-6" />} label="CSS" />
          <SkillItem icon={<SiMysql className="w-6 h-6" />} label="SQL" />
          <SkillItem icon={<VerilogIcon />} label="Verilog" />
        </div>
      </div>

      {/* Libraries/Frameworks */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Libraries / Frameworks</h3>
        <div className="flex flex-wrap gap-8 text-gray-300 text-lg leading-relaxed">
          <SkillItem icon={<MfcIcon />} label="MFC" />
          <SkillItem icon={<SiReact className="w-6 h-6" />} label="React" />
          <SkillItem icon={<SiNodedotjs className="w-6 h-6" />} label="Node.js" />
          <SkillItem icon={<SiTensorflow className="w-6 h-6" />} label="TensorFlow" />
          <SkillItem icon={<CudaIcon />} label="CUDA" />
          <SkillItem icon={<FastApiIcon />} label="FastAPI" />
          <SkillItem icon={<SiTailwindcss className="w-6 h-6" />} label="Tailwind CSS" />
          <SkillItem icon={<SiNextdotjs className="w-6 h-6" />} label="Next.js" />
        </div>
      </div>

      {/* Developer Tools */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Developer Tools</h3>
        <div className="flex flex-wrap gap-8 text-gray-300 text-lg leading-relaxed">
          <SkillItem icon={<SiGit className="w-6 h-6" />} label="Git" />
          <SkillItem icon={<SiDocker className="w-6 h-6" />} label="Docker" />
          <SkillItem icon={<SiLinux className="w-6 h-6" />} label="Linux" />
          <SkillItem icon={<SiJenkins className="w-6 h-6" />} label="Jenkins" />
          <SkillItem icon={<VSIcon />} label="Visual Studio" />
          <SkillItem icon={<SiVercel className="w-6 h-6" />} label="Vercel" />
          <SkillItem icon={<GtestIcon />} label="Google Test" />
          <SkillItem icon={<SIMD />} label="SIMD" />
          <SkillItem icon={<SiAwsamplify className="w-6 h-6" />} label="AWS" />
          <SkillItem icon={<FpgaIcon />} label="Microcontrollers" />
        </div>
      </div>
    </section>
  );
}

function SkillItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-gray-300">{label}</span>
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