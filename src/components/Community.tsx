import React from "react";
import {
  MessageSquare,
  ThumbsUp,
  Users,
  Star,
  Calendar,
  Award,
} from "lucide-react";
import "./Community.css"; // Import the CSS file for styling

const stats = [
  {
    icon: <Users className="icon" />,
    value: "10,000+",
    label: "Active Players",
  },
  {
    icon: <MessageSquare className="icon" />,
    value: "500,000+",
    label: "Forum Posts",
  },
  {
    icon: <ThumbsUp className="icon" />,
    value: "4.9/5",
    label: "Player Rating",
  },
  { icon: <Star className="icon" />, value: "50+", label: "Custom Scripts" },
  {
    icon: <Calendar className="icon" />,
    value: "365",
    label: "Days of Uptime",
  },
  { icon: <Award className="icon" />, value: "#1", label: "Ranked Server" },
];

const Community: React.FC = () => {
  return (
    <section id="community" className="community-section">
      <div className="background-overlay"></div>
      <div className="container">
        <h2 className="community-title">Our Thriving Community</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
