import { DocumentChartBarIcon } from "@heroicons/react/24/outline";



import Image from "next/image";
import jlpt_universal_01 from "@public/img/jlpt_universal_11.jpg";

export default function GrammarHead() {
  return (
    <div className="w-full flex lg:flex-row flex-col p-5 px-7">
      
      
      {/* <div className="relative h-72 lg:w-11/12">
        <Image
          src={jlpt_universal_01}
          alt="Ngữ pháp tiếng Nhật"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute bottom-0 m-5 grid grid-cols-2 text-white z-10">
          <h1 className="font-semibold text-3xl">Ngữ pháp tiếng Nhật</h1>
          <div className="flex flex-col justify-end text-end">
            <p className="w-10/12 ml-auto">Những điều cơ bản về tiếng Nhật</p>
          </div>
        </div>
      </div> */}


      <div className="relative h-72 lg:w-11/12">
    <Image
        src={jlpt_universal_01}
        alt="Ngữ pháp tiếng Nhật"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
    />
    <div className="absolute inset-0 bg-black bg-opacity-10 z-0"></div>
    <div className="absolute bottom-0 m-5 grid grid-cols-2 text-white z-0">
        <h1 className="font-semibold text-3xl">Ngữ pháp tiếng Nhật</h1>
        <div className="flex flex-col justify-end text-end">
            <p className="w-10/12 ml-auto">Những điều cơ bản về tiếng Nhật</p>
        </div>
    </div>
</div>



      <div className="py-5 lg:px-5">
        <div className="flex items-center">
          <span className="text-gray-400 mt-1">Chuỗi bài học:</span>
          <span className="text-2xl text-blue-900 ml-2 font-semibold">
            Ngữ pháp tiếng Nhật thiết yếu
          </span>
        </div>
        <div className="flex items-center mt-3">
          <span className="text-gray-400 mt-1">Trình độ:</span>
          <span className="text-2xl text-blue-900 ml-2 font-semibold">
            Trung cấp
          </span>
        </div>

        <div className="flex space-y-3 lg:space-y-0 lg:flex-row flex-col lg:items-center mt-5 lg:mt-10">
          {/* Items */}
          <div className="flex items-center py-2 px-4 bg-gray-100 rounded-md">
            <div className="h-7 w-7 p-1 rounded-full flex items-center justify-center bg-white">
              <DocumentChartBarIcon className="h-4 text-blue-900" />
            </div>
            <div className="ml-1 text-gray-500">
              Mục: <span className="text-blue-900 font-medium">25</span>
            </div>
          </div>

          {/* Sentences */}
          <div className="lg:ml-5 flex items-center py-2 px-4 bg-gray-100 rounded-md">
            <div className="h-7 w-7 p-1 rounded-full flex items-center justify-center bg-white">
              <DocumentChartBarIcon className="h-4 text-blue-900" />
            </div>
            <div className="ml-1 text-gray-500">
              Câu: <span className="text-blue-900 font-medium">100</span>
            </div>
          </div>

          {/* Sentences */}
          <div className="lg:ml-5 flex items-center py-2 px-4 bg-gray-100 rounded-md">
            <div className="h-7 w-7 p-1 rounded-full flex items-center justify-center bg-white">
              <DocumentChartBarIcon className="h-4 text-blue-900" />
            </div>
            <div className="ml-1 text-gray-500">
              Người dùng:{" "}
              <span className="text-blue-900 font-medium">onboarding</span>
            </div>
          </div>
        </div>

        <p className="w-full text-sm mt-5 text-gray-400">
          Nâng cao kỹ năng ngữ pháp tiếng Nhật của bạn với khóa học JLPT trọng tâm
          của chúng tôi. Khám phá những bài học dễ tiếp thu giúp việc học ngữ
          pháp trở nên thú vị. Theo dõi trình độ ngôn ngữ của bạn tiến bộ khi
          bạn ngày càng tự tin vào khả năng của mình. Tham gia khóa học ngay
          hôm nay và bắt đầu cải thiện ngữ pháp tiếng Nhật của bạn!
        </p>
      </div>
    </div>
  );
}


// image specified at tailwind.config.js
//<div className="bg-post h-72 lg:w-5/12 relative text-white">

//<div className="bg-post bg-cover h-72 lg:w-5/12 relative text-white">
//<div className="grid grid-cols-2 absolute bottom-0 m-5">
//  <h1 className="font-semibold text-3xl">Ngữ pháp tiếng Nhật</h1>
//  <div className="flex flex-col justify-end text-end">
//    <p className="w-10/12 ml-auto">Những điều cơ bản về tiếng Nhật</p>
//  </div>
//</div>
//</div>
