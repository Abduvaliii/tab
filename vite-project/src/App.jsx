import { useState } from "react"
import Tab from "./Components/Tab.jsx"

export default function App() {
  const [activeTab, setActiveTab] = useState(1);
  const Texnika = [
    {
      id: 1,
      title: "Texnika",
    },
    {
      id: 2, 
      title: "Kiyimlar",
    },
    {
      id: 3,
      title: "Oshxona",
    },
    {
      id: 4,
      title: "She'rlar"
    },
    {
      id: 5,
      title: "Estaliklar"
    },
    {
      id: 6,
      title: "Xikmatli so'zlar"
    }]
  ;
  const onChangeTab = (id) => {
    setActiveTab(id);
  };
  const activePanel = () => {
    switch (activeTab) {
      case 1:
        return(
          <div>
            bu 1
          </div>
        );
        case 2:
        return(
          <div className="div">
            bu 2
          </div>
        );
        case 3:
        return(
          <div>
            bu 3
          </div>
        );
        case 4:
        return(
          <div>
            bu 4
          </div>
        );
        case 5:
        return(
          <div>
            bu 5
          </div>
        );
      default:
        return(
          <div>
            bu 6
          </div>
        );
    }
  }
  return (
    <div>
      <Tab Texnika={Texnika} onChange={onChangeTab} active={activeTab} />
      <li className="li">{activePanel()}</li>
    </div>
  )
}
