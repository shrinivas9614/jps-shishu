import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RxIcons from "react-icons/rx";


export const sidebarIcons = [
  { title: "Grade", icon: <FaIcons.FaBookOpen />, path: "/grade"  },
  { title: "Students", icon: <RxIcons.RxAvatar />, path: "/students" },
  { title: "Teacher", icon: <FaIcons.FaChalkboardTeacher />, path: "/teacher" },
  {
    title: "Questions",
    icon: <AiIcons.AiFillQuestionCircle />,
    path: "/questions",
  },
];
