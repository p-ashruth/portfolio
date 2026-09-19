import React, { useState } from "react";
import { X } from "lucide-react";
import styles from "./WorkExperience.module.scss";

interface WorkExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  longDescription?: string;
  responsibilities?: string[];
  isCurrent?: boolean;
  href?: string;
  icon?: string;
  companyDescription?: string;
  companyImage?: string;
}

const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    role: "SDE - 1",
    company: "Qapita Fintech India Pvt Ltd.",
    period: "Oct 2026 - Present",
    description:
    "Worked on equity management platform features as a backend-focused intern.",
    responsibilities: [],
    isCurrent: true,
    icon: `${import.meta.env.BASE_URL}pictures/experience/qapita.jpeg`
  },
  {
    id: 2,
    role: "SDE Intern",
    company: "Qapita Fintech India Pvt Ltd.",
    period: "Jan 2026 - Sept 2026",
    description:
      "Worked on equity management platform features as a backend-focused intern.",
    responsibilities: [],
    isCurrent: true,
    icon: `${import.meta.env.BASE_URL}pictures/experience/qapita.jpeg`
  },
];

interface WorkExperienceProps {
  className?: string;
}

const parseDate = (dateStr: string): Date => {
  const months: { [key: string]: number } = {
    "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5,
    "Jul": 6, "Aug": 7, "Sep": 8, "Sept": 8, "Oct": 9, "Nov": 10, "Dec": 11
  };
  const [monthStr, year] = dateStr.split(" ");
  return new Date(parseInt(year), months[monthStr], 1);
};

const calculateTotalDuration = (roles: WorkExperienceItem[]): string => {
  if (roles.length === 0) return "0 mos";

  const startDates = roles.map(r => parseDate(r.period.split(" - ")[0]));
  const endDates = roles.map(r => {
    const endStr = r.period.split(" - ")[1];
    return endStr === "Present" ? new Date() : parseDate(endStr);
  });

  const earliestStart = new Date(Math.min(...startDates.map(d => d.getTime())));
  const latestEnd = new Date(Math.max(...endDates.map(d => d.getTime())));

  const totalMonths = (latestEnd.getFullYear() - earliestStart.getFullYear()) * 12 +
                      (latestEnd.getMonth() - earliestStart.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) return `${months} mos`;
  if (months === 0) return `${years} yr${years > 1 ? 's' : ''}`;
  return `${years} yr${years > 1 ? 's' : ''} ${months} mos`;
};

interface GroupedCompany {
  company: string;
  roles: WorkExperienceItem[];
}

const WorkExperience: React.FC<WorkExperienceProps> = () => {
  const [selectedCompany, setSelectedCompany] = useState<GroupedCompany | null>(null);

  // Sort experiences by start date (most recent first)
  const sortedExperience = [...workExperience].sort((a, b) => {
    const dateA = parseDate(a.period.split(" - ")[0]);
    const dateB = parseDate(b.period.split(" - ")[0]);
    return dateB.getTime() - dateA.getTime();
  });

  // Group experiences by company
  const groupedByCompany = sortedExperience.reduce(
    (acc, item) => {
      const existing = acc.find((g) => g.company === item.company);
      if (existing) {
        existing.roles.push(item);
      } else {
        acc.push({
          company: item.company,
          roles: [item],
        });
      }
      return acc;
    },
    [] as Array<{ company: string; roles: typeof sortedExperience }>,
  );

  return (
    <section id="experience" className="py-20 bg-black mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 900,
            }}
          >
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>
      <div className={styles.companies}>
          {groupedByCompany.map((group, companyIndex) => (
            <div
              key={companyIndex}
              className={styles.companyCard}
              onClick={() => setSelectedCompany(group)}
            >
              {/* Entire Card - Clickable */}
              <div className={`${styles.companySection} relative z-0`}>
                {/* Company Header */}
                <div className={styles.companyHeader}>
                  <div className={styles.companyLogo}>
                    {group.roles[0].icon ? (
                      <img src={group.roles[0].icon} alt={group.company} />
                    ) : (
                      <span className={styles.logoPlaceholder}>
                        {group.company.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className={styles.companyInfo}>
                    <h3 className={styles.companyName}>{group.company}</h3>
                    <p className={styles.totalDuration}>
                      {calculateTotalDuration(group.roles)}
                    </p>
                  </div>
                </div>

                {/* Timeline - Below Company */}
                <div className={styles.timeline}>
                  {group.roles.map((role, roleIndex) => (
                    <div key={role.id} className={styles.timelineItem}>
                      {/* Timeline Dot */}
                      <div className={styles.timelineDot}></div>

                      {/* Timeline Connector */}
                      {roleIndex < group.roles.length - 1 && (
                        <div className={styles.timelineConnector}></div>
                      )}

                      {/* Role Content */}
                      <div className={styles.roleContent}>
                        <h4 className={styles.roleTitle}>{role.role}</h4>
                        <p className={styles.roleDate}>{role.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      </div>

      {/* Company Modal - Projects Style */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-50 flex items-center justify-center p-4 pointer-events-none">
          <div
            className="bg-black/90 backdrop-blur-2xl rounded-3xl max-w-4xl w-full h-[80vh] overflow-hidden shadow-2xl border border-white/20 relative pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCompany(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/5 hover:bg-white/15 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20 border border-white/10 group"
            >
              <X
                size={20}
                className="text-white group-hover:scale-110 group-hover:rotate-90 transition-all duration-300"
              />
            </button>

            {/* Split Layout */}
            <div className="flex h-full">
              {/* Left - Image (45%) */}
              <div className="w-[45%] relative">
                {selectedCompany.roles[0].companyImage ? (
                  <>
                    <img
                      src={selectedCompany.roles[0].companyImage}
                      alt={selectedCompany.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center">
                    <span className="text-8xl text-white/20 font-bold">
                      {selectedCompany.company.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Right - Content (55%) */}
              <div className="w-[55%] p-8 flex flex-col justify-center">
                {/* Title with accent */}
                <div className="mb-6">
                  <h2
                    className="text-4xl font-bold text-white mb-3 leading-tight"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    {selectedCompany.company}
                  </h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
                </div>

                {/* Description */}
                <p
                  className="text-gray-300 text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  {selectedCompany.roles[0].companyDescription || "`Details` to be filled..."}
                </p>

                {/* Duration */}
                <div className="mb-8">
                  <h3
                    className="text-sm font-semibold text-white mb-3 uppercase tracking-widest opacity-80"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    Experience Duration
                  </h3>
                  <p className="text-orange-400 text-lg font-semibold" style={{ fontFamily: "Lato, sans-serif" }}>
                    {calculateTotalDuration(selectedCompany.roles)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkExperience;
export type { WorkExperienceItem };
