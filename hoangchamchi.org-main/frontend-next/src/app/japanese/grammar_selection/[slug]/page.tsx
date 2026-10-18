import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import DashboardCardsWithHeader from "@/components/DashboardCardsWithHeader";

import jlpt_universal_01 from "@public/img/jlpt_universal_01.jpg";
import jlpt_universal_02 from "@public/img/jlpt_universal_02.jpg";
import jlpt_universal_03 from "@public/img/jlpt_universal_03.jpg";
import jlpt_universal_04 from "@public/img/jlpt_universal_04.jpg";
import jlpt_universal_05 from "@public/img/jlpt_universal_05.jpg";
import jlpt_universal_06 from "@public/img/jlpt_universal_06.jpg";
import jlpt_universal_07 from "@public/img/jlpt_universal_07.jpg";
import jlpt_universal_08 from "@public/img/jlpt_universal_08.jpg";
import jlpt_universal_09 from "@public/img/jlpt_universal_09.jpg";
import jlpt_universal_10 from "@public/img/jlpt_universal_10.jpg";
import jlpt_universal_11 from "@public/img/jlpt_universal_11.jpg";
import jlpt_universal_12 from "@public/img/jlpt_universal_12.jpg";
import jlpt_universal_13 from "@public/img/jlpt_universal_13.jpg";
import jlpt_universal_14 from "@public/img/jlpt_universal_14.jpg";

export default function Dashboard({ params }: { params: { slug: string } }) {
  const p_dashboardId = params.slug;
  const dashboardCardsProps = getDashboardCardsProps(p_dashboardId || "");
  const headlineProps = getHeadlineProps(p_dashboardId || "")



  console.log("slug: " + p_dashboardId);
  console.log("dashboardCardsProps: " + dashboardCardsProps);

  return (
    <div className=" flex flex-col">
      <div className="flex flex-col flex-shrink-0">
        <DashboardCardsWithHeader
          cards={dashboardCardsProps}
          headline={headlineProps}
        />
      </div>
    </div>
  );
}




interface DashboardCardsProps {
    id: string;
    name: string;
    link: string;
    file: StaticImageData;
    description: string;
  }

const getDashboardCardsProps = (level: string): DashboardCardsProps[] => {

    switch (level) {

      case "JLPT_N5":
        return [
          {
            id: "1",
            name: "Ngữ pháp JLPT N5 25",
            link: "/japanese/grammar_dashboard/JLPT_N5/25",
            file: jlpt_universal_01,
            description: "",
          },
          {
            id: "2",
            name: "Ngữ pháp JLPT N5 50",
            link: "/japanese/grammar_dashboard/JLPT_N5/50",
            file: jlpt_universal_02,
            description: "",
          },
          {
            id: "3",
            name: "Ngữ pháp JLPT N5 75",
            link: "/japanese/grammar_dashboard/JLPT_N5/75",
            file: jlpt_universal_03,
            description: "",
          },
          {
            id: "4",
            name: "Ngữ pháp JLPT N5 100",
            link: "/japanese/grammar_dashboard/JLPT_N5/100",
            file: jlpt_universal_04,
            description: "",
          },
          {
            id: "5",
            name: "Ngữ pháp JLPT N5 125",
            link: "/japanese/grammar_dashboard/JLPT_N5/125",
            file: jlpt_universal_05,
            description: "",
          },
          {
            id: "6",
            name: "Ngữ pháp JLPT N5 150",
            link: "/japanese/grammar_dashboard/JLPT_N5/150",
            file: jlpt_universal_06,
            description: "",
          },
        ];
  
        case "JLPT_N4":
          return [
            {
              id: "1",
              name: "Ngữ pháp JLPT N4 25",
              link: "/japanese/grammar_dashboard/JLPT_N4/25",
              file: jlpt_universal_01,
              description: "",
            },
            {
              id: "2",
              name: "Ngữ pháp JLPT N4 50",
              link: "/japanese/grammar_dashboard/JLPT_N4/50",
              file: jlpt_universal_02,
              description: "",
            },
            {
              id: "3",
              name: "Ngữ pháp JLPT N4 75",
              link: "/japanese/grammar_dashboard/JLPT_N4/75",
              file: jlpt_universal_03,
              description: "",
            },
            {
              id: "4",
              name: "Ngữ pháp JLPT N4 100",
              link: "/japanese/grammar_dashboard/JLPT_N4/100",
              file: jlpt_universal_04,
              description: "",
            },
            {
              id: "5",
              name: "Ngữ pháp JLPT N4 125",
              link: "/japanese/grammar_dashboard/JLPT_N4/125",
              file: jlpt_universal_05,
              description: "",
            },
          ];
  
      case "JLPT_N3":
        return [
          {
            id: "1",
            name: "Ngữ pháp JLPT N3 25",
            link: "/japanese/grammar_dashboard/JLPT_N3/25",
            file: jlpt_universal_01,
            description: ""
          },
          {
            id: "2",
            name: "Ngữ pháp JLPT N3 50",
            link: "/japanese/grammar_dashboard/JLPT_N3/50",
            file: jlpt_universal_02,
            description: ""
          },
          {
            id: "3",
            name: "Ngữ pháp JLPT N3 75",
            link: "/japanese/grammar_dashboard/JLPT_N3/75",
            file: jlpt_universal_03,
            description: ""
          },
          {
            id: "4",
            name: "Ngữ pháp JLPT N3 100",
            link: "/japanese/grammar_dashboard/JLPT_N3/100",
            file: jlpt_universal_04,
            description: ""
          },
          {
            id: "5",
            name: "Ngữ pháp JLPT N3 125",
            link: "/japanese/grammar_dashboard/JLPT_N3/125",
            file: jlpt_universal_05,
            description: ""
          },
          {
            id: "6",
            name: "Ngữ pháp JLPT N3 150",
            link: "/japanese/grammar_dashboard/JLPT_N3/150",
            file: jlpt_universal_06,
            description: ""
          },
        ];
  
      case "JLPT_N2":
        return [
          {
            id: "1",
            name: "Ngữ pháp JLPT N2 25",
            link: "/japanese/grammar_dashboard/JLPT_N2/25",
            file: jlpt_universal_01,
            description: "",
          },
          {
            id: "2",
            name: "Ngữ pháp JLPT N2 50",
            link: "/japanese/grammar_dashboard/JLPT_N2/50",
            file: jlpt_universal_02,
            description: "",
          },
          {
            id: "3",
            name: "Ngữ pháp JLPT N2 75",
            link: "/japanese/grammar_dashboard/JLPT_N2/75",
            file: jlpt_universal_03,
            description: "",
          },
          {
            id: "4",
            name: "Ngữ pháp JLPT N2 100",
            link: "/japanese/grammar_dashboard/JLPT_N2/100",
            file: jlpt_universal_04,
            description: "",
          },
          {
            id: "5",
            name: "Ngữ pháp JLPT N2 125",
            link: "/japanese/grammar_dashboard/JLPT_N2/125",
            file: jlpt_universal_05,
            description: "",
          },
          {
            id: "6",
            name: "Ngữ pháp JLPT N2 150",
            link: "/japanese/grammar_dashboard/JLPT_N2/150",
            file: jlpt_universal_06,
            description: "",
          },
          {
            id: "7",
            name: "Ngữ pháp JLPT N2 175",
            link: "/japanese/grammar_dashboard/JLPT_N2/175",
            file: jlpt_universal_07,
            description: "",
          },
          {
            id: "8",
            name: "Ngữ pháp JLPT N2 200",
            link: "/japanese/grammar_dashboard/JLPT_N2/200",
            file: jlpt_universal_08,
            description: "",
          },
        ];
  
  
        case "JLPT_N1":
          return [
            {
              id: "1",
              name: "Ngữ pháp JLPT N1 25",
              link: "/japanese/grammar_dashboard/JLPT_N1/25",
              file: jlpt_universal_01,
              description: "",
            },
            {
              id: "2",
              name: "Ngữ pháp JLPT N1 50",
              link: "/japanese/grammar_dashboard/JLPT_N1/50",
              file: jlpt_universal_02,
              description: "",
            },
            {
              id: "3",
              name: "Ngữ pháp JLPT N1 75",
              link: "/japanese/grammar_dashboard/JLPT_N1/75",
              file: jlpt_universal_03,
              description: "",
            },
            {
              id: "4",
              name: "Ngữ pháp JLPT N1 100",
              link: "/japanese/grammar_dashboard/JLPT_N1/100",
              file: jlpt_universal_04,
              description: "",
            },
            {
              id: "5",
              name: "Ngữ pháp JLPT N1 125",
              link: "/japanese/grammar_dashboard/JLPT_N1/125",
              file: jlpt_universal_05,
              description: "",
            },
            {
              id: "6",
              name: "Ngữ pháp JLPT N1 150",
              link: "/japanese/grammar_dashboard/JLPT_N1/150",
              file: jlpt_universal_06,
              description: "",
            },
            {
              id: "7",
              name: "Ngữ pháp JLPT N1 175",
              link: "/japanese/grammar_dashboard/JLPT_N1/175",
              file: jlpt_universal_07,
              description: "",
            },
            {
              id: "8",
              name: "Ngữ pháp JLPT N1 200",
              link: "/japanese/grammar_dashboard/JLPT_N1/200",
              file: jlpt_universal_08,
              description: "",
            },
            {
              id: "9",
              name: "Ngữ pháp JLPT N1 225",
              link: "/japanese/grammar_dashboard/JLPT_N1/225",
              file: jlpt_universal_09,
              description: "",
            },
            {
              id: "10",
              name: "Ngữ pháp JLPT N1 250",
              link: "/japanese/grammar_dashboard/JLPT_N1/250",
              file: jlpt_universal_10,
              description: "",
            },
          ];



    // Add more cases for other levels
    default:
      return [];
  }
};



interface HeadlineProps {
  title: string;
  subtitle: string;
}
  

const getHeadlineProps = (level: string): HeadlineProps => {
    switch (level) {
      case "JLPT_N5":
        return {
          title: "Ngữ pháp tiếng Nhật JLPT N5",
          subtitle: "Ngữ pháp N5 kèm giải thích và câu ví dụ.",
        };
      case "JLPT_N4":
        return {
          title: "Ngữ pháp tiếng Nhật JLPT N4",
          subtitle: "Ngữ pháp N4 kèm giải thích và câu ví dụ.",
        };
      case "JLPT_N3":
        return {
          title: "Ngữ pháp tiếng Nhật JLPT N3",
          subtitle: "Ngữ pháp N3 kèm giải thích và câu ví dụ.",
        };
      case "JLPT_N2":
        return {
          title: "Ngữ pháp tiếng Nhật JLPT N2",
          subtitle: "Ngữ pháp N2 kèm giải thích và câu ví dụ.",
        };
      case "JLPT_N1":
        return {
          title: "Ngữ pháp tiếng Nhật JLPT N1",
          subtitle: "Ngữ pháp N1 kèm giải thích và câu ví dụ.",
        };
      default:
        return {
          title: "",
          subtitle: "",
        };
    }
  };
  

























