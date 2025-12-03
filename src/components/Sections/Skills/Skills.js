import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaAws } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiExpress, SiNextdotjs, SiRedux, SiSass, SiNestjs, SiDocker, SiFirebase, SiElectron, SiMysql } from 'react-icons/si';
import { useLanguage } from '../../../hooks/useLanguage';
import './Skills.css';

const Skills = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: '#000000' },
        { name: 'JavaScript (ES6+)', icon: <FaJs />, level: 90, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#3178C6' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
        { name: 'SASS', icon: <SiSass />, level: 85, color: '#CC6699' },
        { name: 'Redux', icon: <SiRedux />, level: 80, color: '#764ABC' },
      ]
    },
    {
      title: t('skills.categories.backend'),
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 90, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, level: 85, color: '#000000' },
        { name: 'NestJS', icon: <SiNestjs />, level: 80, color: '#E0234E' },
        { name: 'Python', icon: <FaPython />, level: 85, color: '#3776AB' },
        { name: 'Flask', icon: <FaPython />, level: 80, color: '#FF0000' },
      ]
    },
    {
      title: t('skills.categories.database'),
      skills: [
        { name: 'MySQL', icon: <SiMysql />, level: 85, color: '#4479A1' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85, color: '#336791' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85, color: '#47A248' },
      ]
    },
    {
      title: t('skills.categories.devops'),
      skills: [
        { name: 'Docker', icon: <SiDocker />, level: 85, color: '#2496ED' },
        { name: 'CI/CD', icon: <FaGitAlt />, level: 80, color: '#F05032' },
        { name: 'AWS', icon: <FaAws />, level: 75, color: '#FF9900' },
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#F05032' },
      ]
    },
    {
      title: t('skills.categories.others'),
      skills: [
        { name: 'RESTful APIs', icon: <FaNodeJs />, level: 90, color: '#339933' },
        { name: 'WebSocket', icon: <FaNodeJs />, level: 85, color: '#339933' },
        { name: 'Firebase', icon: <SiFirebase />, level: 80, color: '#FFCA28' },
        { name: 'Microservices', icon: <SiDocker />, level: 80, color: '#2496ED' },
        { name: 'Electron', icon: <SiElectron />, level: 75, color: '#47848F' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

