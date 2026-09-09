import React from 'react';
import {
  FaAws,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiDocker,
  SiElectron,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiOpencv,
  SiPostgresql,
  SiRedux,
  SiSass,
  SiSocketdotio,
  SiTypescript,
} from 'react-icons/si';
import {
  TbApi,
  TbBrain,
  TbMessageChatbot,
  TbScanEye,
  TbTextRecognition,
  TbTopologyStar3,
} from 'react-icons/tb';

/**
 * Skill groups. `key` maps to skills.categories.<key> in the locale files.
 * Deliberately no proficiency percentages — self-assigned numbers are noise.
 */
export const SKILL_GROUPS = [
  {
    key: 'frontend',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Sass', icon: <SiSass /> },
    ],
  },
  {
    key: 'backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'NestJS', icon: <SiNestjs /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Java', icon: <FaJava /> },
    ],
  },
  {
    key: 'database',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Firebase', icon: <SiFirebase /> },
    ],
  },
  {
    key: 'ai',
    skills: [
      { name: 'OpenCV', icon: <SiOpencv /> },
      { name: 'YOLO', icon: <TbScanEye /> },
      { name: 'OCR', icon: <TbTextRecognition /> },
      { name: 'Deep Learning', icon: <TbBrain /> },
      { name: 'NLP', icon: <TbMessageChatbot /> },
    ],
  },
  {
    key: 'devops',
    skills: [
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'CI/CD', icon: <FaGitAlt /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'AWS', icon: <FaAws /> },
    ],
  },
  {
    key: 'others',
    skills: [
      { name: 'RESTful APIs', icon: <TbApi /> },
      { name: 'WebSocket', icon: <SiSocketdotio /> },
      { name: 'Microservices', icon: <TbTopologyStar3 /> },
      { name: 'Electron', icon: <SiElectron /> },
    ],
  },
];

export default SKILL_GROUPS;
