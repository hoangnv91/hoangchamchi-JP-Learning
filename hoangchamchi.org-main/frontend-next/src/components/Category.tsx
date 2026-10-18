import { PlayIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
// import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";


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

import jlpt_n1_grammar from "@public/img/jlpt_n1_grammar.jpg";
import jlpt_n2_grammar from "@public/img/jlpt_n2_grammar.jpg";
import jlpt_n3_grammar from "@public/img/jlpt_n3_grammar.jpg";
import jlpt_n4_grammar from "@public/img/jlpt_n4_grammar.jpg";
import jlpt_n5_grammar from "@public/img/jlpt_n5_grammar.jpg";

import jlpt_n3_vocabulary from "@public/img/jlpt_n3_vocabulary.jpg";





type seriesProps = {
  seriesImg: any;
  level: any;
  seriesCourses: any;
  seriesHeader: any;
  seriesLink: any;
};
type categoryHeader = {
  icon: any;
  title: any;
  titleDes: any;
  courses: any;
  series: any;
};
type categoryProps = {
  icon: any;
  title: any;
  titleDes: any;
  courses: any;
  series: any;
  img: any;
  des: any;
};

export default function Category({
  icon,
  title,
  titleDes,
  courses,
  series,
  img,
  des,
}: categoryProps) {
  return (
    <div className="w-11/12 py-7 px-10 bg-gray-50 rounded-md mt-6">
      {/* Header */}
      <CategoryHeader
        icon={icon}
        title={title}
        titleDes={titleDes}
        courses={courses}
        series={series}
      />

      {/* Body */}
      <div className="w-full grid gap-10 md:grid-cols-2 py-10 border-b">
        <div className="flex flex-col justify-center">
          <p>{des}</p>
          <p className="mt-10 capitalize">
            Trình độ: <b>Tiếng Nhật JLPT N5-N1</b>
          </p>
          <Link href="/categories">
            {/* <button className="bg-primary py-4 px-8 text-white rounded-md mt-5">
              Learn More
            </button> */}
          </Link>
        </div>
        <div>
          <Image src={img} className="w-full" alt="hình ảnh" />
        </div>
      </div>

      {/* Series */}
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center mt-10">
          <img
            src="/img/calender.png"
            className="h-20 mr-5 mb-5 lg:mb-0"
            alt="biểu tượng lịch"
          />
          <div>
            <h1 className="text-lg font-bold">JLPT Thiết yếu</h1>
            <p className="capitalize">
              Chuỗi bài học tiếng Nhật đặc trưng của chúng tôi.
            </p>
          </div>
        </div>

        <Series
          seriesHeader="Ngữ pháp JLPT N3"
          seriesLink="/japanese/grammar_selection/JLPT_N3"
          level="Trung cấp"
          seriesCourses="10"
          seriesImg={jlpt_n3_grammar}
        />

        <Series
          seriesHeader="Ngữ pháp JLPT N4"
          seriesLink="/japanese/grammar_selection/JLPT_N4"
          level="Sơ cấp"
          seriesCourses="2"
          seriesImg={jlpt_n4_grammar}
        />
        <Series
          seriesHeader="Ngữ pháp JLPT N5"
          seriesLink="/japanese/grammar_selection/JLPT_N5"
          level="Căn bản"
          seriesCourses="3"
          seriesImg={jlpt_n5_grammar}
        />
        <Series
          seriesHeader="Ngữ pháp JLPT N2"
          seriesLink="/japanese/grammar_selection/JLPT_N2"
          level="Cao cấp"
          seriesCourses="2"
          seriesImg={jlpt_n2_grammar}
        />

        <Series
          seriesHeader="Ngữ pháp JLPT N1"
          seriesLink="/japanese/grammar_selection/JLPT_N1"
          level="Chuyên gia"
          seriesCourses="2"
          seriesImg={jlpt_universal_02}
        />

        <Series
          seriesHeader="Từ vựng JLPT N3"
          seriesLink="/japanese/vocabulary_selection/JLPT_N3"
          level="Trung cấp"
          seriesCourses="5"
          seriesImg={jlpt_n3_vocabulary}
        />

        {/* # ------------------------------------------------------ # */}

        {/* <Series
          seriesHeader="JLPT N4 Vocabulary"
          seriesLink="/vocabularyselection/JLPT_N4"
          level="Sơ cấp"
          seriesCourses="5"
          seriesImg="/img/jlpt_universal_03.jpg"
        />         */}

        {/* <Series
          seriesHeader="JLPT N2 Vocabulary"
          seriesLink="/vocabularyselection/JLPT_N2"
          level="Cao cấp"
          seriesCourses="5"
          seriesImg="/img/jlpt_universal_04.jpg"
        /> */}

        {/* # -------------------------------------------- */}

        <Series
          seriesHeader="Kanji JLPT tiếng Nhật thiết yếu"
          seriesLink="/japanese/kanji"
          level="Trung cấp"
          seriesCourses="5"
          seriesImg={jlpt_universal_07}
        />

        <Series
          seriesHeader="Động từ tiếng Nhật thiết yếu"
          seriesLink="/japanese/vocabulary_selection/essential_verbs"
          level="Trung cấp"
          seriesCourses="5"
          seriesImg={jlpt_universal_01}
        />

        {/* # --------------------------------------------- */}

        {/* TODO
        /vocabularyselection
        has to have parameter such as JLPT N3, JLPT N2 so we can search in the DB
        and serve proper cards */}

        {/* <Series
          seriesHeader="JLPT N3 Kanji"
          seriesLink="/404"
          level="Trung cấp"
          seriesCourses="Two"
          seriesImg="/img/Ellipse_46.png"
        />
        <Series
          seriesHeader="JLPT N3 Reading"
          seriesLink="/404"
          level="Trung cấp"
          seriesCourses="Two"
          seriesImg="/img/Ellipse_46.png"
        />
        <Series
          seriesHeader="JLPT N3 Listening"
          seriesLink="/404"
          level="Trung cấp"
          seriesCourses="Two"
          seriesImg="/img/Ellipse_46.png"
        /> */}
      </div>
    </div>
  );
}

function CategoryHeader({
  icon,
  title,
  titleDes,
  courses,
  series,
}: categoryHeader) {
  return (
    <div className="w-full grid lg:grid-cols-2">
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <img
          src={icon}
          className="h-20 mr-5 mb-5 lg:mb-0"
          alt="category-icon"
        />
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm">{titleDes}</p>
        </div>
      </div>
      <div className="flex items-center mt-3 lg:mt-0 justify-between lg:justify-end">
        <div className="flex items-center flex-col text-center">
          <h1 className="text-xl font-bold">{courses}</h1>
          <h1>Khóa học</h1>
        </div>
        <div className="flex items-center flex-col lg:ml-16 text-center">
          <h1 className="text-xl font-bold">{series}</h1>
          <h1>Chuỗi bài học</h1>
        </div>
        {/* <div className="bg-gray-100 cursor-pointer hover:bg-gray-200 lg:ml-16 mt-3 lg:mt-0 h-16 w-16 rounded-full flex items-center justify-center">
          <PlayIcon className="h-7 text-gray-500" />
        </div> */}
        <div>{/* <PlayIcon className="h-7 text-gray-500" /> */}</div>
      </div>
    </div>
  );
}

function Series({
  seriesImg,
  level,
  seriesCourses,
  seriesHeader,
  seriesLink,
}: seriesProps) {
  return (
    <div className="w-full grid lg:grid-cols-2 border-b">
      <div className="flex flex-col lg:flex-row items-start lg:items-center py-7 mt-5">
        {/* <Image src={seriesImg} className="h-20 mr-5 mb-5 lg:mb-0" alt="Series" width={100%} layout="responsive" /> */}
        <Image
          src={seriesImg}
          className="h-20 w-auto object-contain mr-5 mb-5 lg:mb-0"
          alt="zen-lingo.com"
        />
        <div>
          {/*<Link to="/categories">*/}
          <Link href={seriesLink}>
            {/*<h1 className="text-lg font-bold">JLPT N3 100 Master Hiragana & Katakana</h1>*/}
            <h1 className="text-lg font-bold">{seriesHeader}</h1>
          </Link>

          <p className="">
            Ngôn ngữ viết của tiếng Nhật bao gồm ba hệ thống chữ viết:
            kanji, hiragana và katakana.
          </p>
        </div>
      </div>
      <div className="flex items-center mt-3 lg:mt-0 justify-between lg:justify-end">
        <div className="flex items-center flex-col text-center">
          <h1 className="text-xl font-bold">Trình độ</h1>
          <h1>{level}</h1>
        </div>
        <div className="flex items-center flex-col lg:ml-16 text-center">
          <h1 className="text-xl font-bold">Khóa học</h1>
          <h1>{seriesCourses}</h1>
        </div>
        <div className="bg-gray-100 cursor-pointer hover:bg-gray-200 lg:ml-16 mt-3 lg:mt-0 h-16 w-16 rounded-full flex items-center justify-center">
          <Link href={seriesLink}>
            {/* <PlayIcon className="h-6 text-secondary" /> */}
            {/* <PlayIcon className="h-6 text-gray-400" /> */}
            <ChevronRightIcon className="h-6 text-blue-600" />
          </Link>
        </div>
      </div>
    </div>
  );
}
