import {
    AdjustmentsVerticalIcon,
    DocumentChartBarIcon,
    SpeakerWaveIcon,
  } from "@heroicons/react/24/outline";


function ItemsRibbon() {
    return (
      <div className="border-b pb-5 w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-shrink-0 flex items-center py-2 px-4 bg-gray-200 rounded-md">
          <div className="h-7 w-7 p-1 rounded-full flex items-center justify-center bg-white">
            <DocumentChartBarIcon className="h-4 text-blue-900" />
          </div>
          <div className="ml-2 text-blue-900 font-medium">Từ vựng & Câu</div>
        </div>
        <div className="flex mt-3 lg:mt-0 lg:flex-row flex-col">
          <div className="flex items-center py-2 px-4 bg-gray-200 rounded-md">
            <div className="h-7 w-7 p-1 rounded-full flex items-center justify-center bg-white">
              <AdjustmentsVerticalIcon className="h-4 text-blue-900" />
            </div>
            <div className="ml-2 text-gray-500">
              Sắp xếp theo:{" "}
              <select className="text-blue-900 outline-none cursor-pointer bg-transparent font-medium">
                <option value="1">Mặc định</option>
                <option value="2">Mặc định</option>
                <option value="3">Mặc định</option>
                <option value="4">Mặc định</option>
              </select>
            </div>
          </div>
          <div className="ml-0 lg:ml-5 mt-3 lg:mt-0 flex items-center py-2 px-4 bg-gray-200 rounded-md">
            <div className="h-7 w-7 p-1 rounded-full flex items-center justify-center bg-white">
              <AdjustmentsVerticalIcon className="h-4 text-blue-900" />
            </div>
            <div className="ml-2 text-blue-900 font-medium">Lọc mục</div>
          </div>
        </div>
      </div>
    );
  }

export default ItemsRibbon