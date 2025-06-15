import {
  SiCplusplus,
  SiPython,
  SiGo,
  SiRust,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTensorflow,
  SiMysql,
  SiAwsamplify,
  SiGit,
  SiDocker,
  SiLinux,
  SiJenkins,
} from 'react-icons/si';

import React from 'react';

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-5xl font-bold mb-8 text-sky-300">Skills</h2>

      {/* Languages */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Languages</h3>
        <div className="flex flex-wrap gap-8 text-gray-300 text-lg leading-relaxed">
          <SkillItem icon={<SiCplusplus className="w-6 h-6" />} label="C++" />
          <SkillItem icon={<SiPython className="w-6 h-6" />} label="Python" />
          <SkillItem icon={<SiGo className="w-6 h-6" />} label="Golang" />
          <SkillItem icon={<SiRust className="w-6 h-6" />} label="Rust" />
          <SkillItem icon={<AssemblyIcon />} label="Assembly" />
          <SkillItem icon={<SiTypescript className="w-6 h-6" />} label="TypeScript" />
          <SkillItem icon={<VerilogIcon />} label="Verilog" />
        </div>
      </div>

      {/* Libraries/Frameworks */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Libraries / Frameworks</h3>
        <div className="flex flex-wrap gap-8 text-gray-300 text-lg leading-relaxed">
          <SkillItem icon={<MfcIcon />} label="MFC" />
          <SkillItem icon={<SiReact className="w-6 h-6" />} label="React" />
          <SkillItem icon={<SiNodedotjs className="w-6 h-6" />} label="Node.js" />
          <SkillItem icon={<SiTensorflow className="w-6 h-6" />} label="TensorFlow" />
          <SkillItem icon={<CudaIcon />} label="CUDA" />
          <SkillItem icon={<RestApiIcon />} label="REST API" />
          <SkillItem icon={<SiMysql className="w-6 h-6" />} label="MySQL" />
          <SkillItem icon={<SiAwsamplify className="w-6 h-6" />} label="AWS" />
        </div>
      </div>

      {/* Developer Tools */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Developer Tools</h3>
        <div className="flex flex-wrap gap-8 text-gray-300 text-lg leading-relaxed">
          <SkillItem icon={<SiGit className="w-6 h-6" />} label="Git" />
          <SkillItem icon={<SiDocker className="w-6 h-6" />} label="Docker" />
          <SkillItem icon={<SiLinux className="w-6 h-6" />} label="Linux" />
          <SkillItem icon={<SiJenkins className="w-6 h-6" />} label="Jenkins" />
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
      <span>{label}</span>
    </div>
  );
}

function AssemblyIcon() {
  return (
    <svg
      role="img"
      aria-label="Assembly Language"
      className="w-6 h-6 text-gray-300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function VerilogIcon() {
  return (
    <svg
      className="w-6 h-6 text-gray-300"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#000" fontWeight="bold">
        V
      </text>
    </svg>
  );
}

function MfcIcon() {
  return (
    <div className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded text-xs font-bold text-gray-300">
      MFC
    </div>
  );
}

function CudaIcon() {
  return (
    <div className="w-6 h-6 flex items-center justify-center rounded text-xs font-bold text-white">
      CUDA
    </div>
  );
}

function RestApiIcon() {
  return (
    <div className="w-6 h-6 flex items-center justify-center rounded text-xs font-bold text-white">
      REST
    </div>
  );
}

function FpgaIcon() {
  return (
    <div className="w-6 h-6 flex items-center justify-center rounded text-xs font-bold text-white">
      FPGA
    </div>
  );
}
