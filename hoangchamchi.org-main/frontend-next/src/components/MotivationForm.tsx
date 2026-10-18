'use client';

// fieldsConfig.js

export const fields = [
    {
        key: 'minimalEffort',
        label: 'Nỗ lực tối thiểu hằng ngày',
        placeholder:
            'Nỗ lực tối thiểu tuyệt đối mà bạn sẽ làm mỗi ngày để học là gì?',
        type: 'textarea',
    },
    {
        key: 'personalVision',
        label: 'Tầm nhìn cá nhân',
        placeholder:
            'Mô tả tương lai lý tưởng khi bạn thông thạo tiếng Nhật. Kỹ năng này nâng cao cuộc sống của bạn như thế nào?',
        type: 'textarea',
    },
    {
        key: 'coreMotivations',
        label: 'Động lực cốt lõi',
        placeholder:
            'Vì sao việc học tiếng Nhật quan trọng với cá nhân bạn? Nó đáp ứng những giá trị hay đam mê nào?',
        type: 'textarea',
    },
    {
        key: 'specificGoals',
        label: 'Mục tiêu cụ thể',
        placeholder:
            'Mục tiêu ngắn hạn và dài hạn của bạn khi học tiếng Nhật là gì? (ví dụ: đậu JLPT N3, du lịch Nhật Bản, xem anime không cần phụ đề)',
        type: 'textarea',
    },
    {
        key: 'dailyCommitment',
        label: 'Cam kết hằng ngày',
        placeholder:
            'Bạn sẽ dành bao nhiêu thời gian mỗi ngày để học tiếng Nhật? Bạn sẽ tập trung vào những hoạt động cụ thể nào?',
        type: 'text',
    },
    {
        key: 'actionPlan',
        label: 'Kế hoạch hành động',
        placeholder:
            'Phác thảo các bước bạn sẽ thực hiện để đạt được mục tiêu học tiếng Nhật. Bạn sẽ sử dụng những nguồn tài liệu nào?',
        type: 'textarea',
    },
    {
        key: 'anticipatedObstacles',
        label: 'Trở ngại dự kiến',
        placeholder:
            'Bạn có thể gặp những thách thức nào trong hành trình học tập? Bạn dự định vượt qua chúng bằng cách nào?',
        type: 'textarea',
    },
    {
        key: 'accountabilityPartner',
        label: 'Người đồng hành cam kết',
        placeholder:
            'Có ai có thể hỗ trợ và nhắc nhở bạn trong hành trình học tập không? Bạn sẽ để họ tham gia như thế nào?',
        type: 'text',
    },
    {
        key: 'progressMilestones',
        label: 'Các cột mốc tiến bộ',
        placeholder:
            'Bạn sẽ ăn mừng những cột mốc nào trên hành trình? Bạn sẽ tự thưởng cho mình ra sao?',
        type: 'textarea',
    },
    {
        key: 'consequencesOfInaction',
        label: 'Hậu quả của việc không hành động',
        placeholder:
            'Những kết quả tiêu cực tiềm ẩn nào nếu bạn không cam kết với mục tiêu học tập?',
        type: 'textarea',
    },
    {
        key: 'valuesAlignment',
        label: 'Sự phù hợp với giá trị cá nhân',
        placeholder:
            'Việc học tiếng Nhật phù hợp với giá trị cá nhân của bạn như thế nào?',
        type: 'textarea',
    },
    {
        key: 'dailyReflectionJournal',
        label: 'Nhật ký suy ngẫm hằng ngày',
        placeholder:
            'Suy ngẫm về trải nghiệm học tập hôm nay. Bạn đã đạt được điều gì? Ngày mai bạn có thể cải thiện điều gì?',
        type: 'textarea',
    },
    {
        key: 'skillApplicationScenarios',
        label: 'Các tình huống áp dụng kỹ năng',
        placeholder:
            'Mô tả những tình huống bạn sẽ sử dụng kỹ năng tiếng Nhật (ví dụ: tham dự sự kiện văn hóa, trò chuyện với người bản ngữ).',
        type: 'textarea',
    },
    {
        key: 'personalResponsibilityStatement',
        label: 'Trách nhiệm cá nhân',
        placeholder:
            'Bạn đang chấp nhận những trách nhiệm nào để đảm bảo tiến bộ trong việc học tiếng Nhật?',
        type: 'textarea',
    },
    {
        key: 'supportResources',
        label: 'Nguồn hỗ trợ',
        placeholder:
            'Liệt kê các nguồn tài nguyên hoặc cộng đồng có thể hỗ trợ việc học của bạn (ví dụ: nhóm học tập, diễn đàn trực tuyến).',
        type: 'textarea',
    },
    {
        key: 'habitFormationGoals',
        label: 'Mục tiêu hình thành thói quen',
        placeholder:
            'Bạn sẽ áp dụng những thói quen mới nào để hỗ trợ việc học? (ví dụ: học mỗi buổi sáng, sử dụng flashcard)',
        type: 'textarea',
    },
    {
        key: 'stayingFit',
        label: 'Thể lực và sức khỏe',
        placeholder:
            'Tôi sẽ áp dụng những thói quen thể dục, sức khỏe và ăn uống nào để có nhiều năng lượng học tập hơn?',
        type: 'textarea',
    },
];



// ---------------------------- //



// hooks/useLocalStorage.js

//import { useState, useEffect } from 'react';

import { useEffect } from 'react';

// export function useLocalStorage(key, initialValue) {
//     const [storedValue, setStoredValue] = useState(initialValue);

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             try {
//                 const item = window.localStorage.getItem(key);
//                 setStoredValue(item ? JSON.parse(item) : initialValue);
//             } catch (error) {
//                 console.warn(error);
//             }
//         }
//     }, [key, initialValue]);

//     const setValue = (value) => {
//         try {
//             setStoredValue(value);
//             if (typeof window !== 'undefined') {
//                 window.localStorage.setItem(key, JSON.stringify(value));
//             }
//         } catch (error) {
//             console.warn(error);
//         }
//     };

//     return [storedValue, setValue];
// }

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      if (typeof window !== 'undefined') {
        try {
          const item = window.localStorage.getItem(key);
          return item ? JSON.parse(item) : initialValue;
        } catch (error) {
          console.warn(error);
          return initialValue;
        }
      }
      return initialValue;
    });
  
    const setValue = (value) => {
      try {
        setStoredValue(value);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(value));
        }
      } catch (error) {
        console.warn(error);
      }
    };
  
    return [storedValue, setValue];
  }
  




// ----------------------------------------------

// components/MotivationForm.js

import { useState } from 'react';


function MotivationForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useLocalStorage('motivationForm', {});

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    };

    return (
        <div className="w-full mx-auto mt-8 p-4">
            {/* Accordion Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 bg-slate-500 text-white font-semibold rounded-md focus:outline-none"
            >
                <span>Biểu mẫu hành trình học tập</span>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <p className="text-sm p-4"> Học tiếng Nhật là một cam kết dài hạn.
                Biểu mẫu trên có thể giúp bạn cân nhắc nhiều khía cạnh của hành trình học tập
                và hy vọng hỗ trợ bạn duy trì đúng lộ trình học.
                Dữ liệu biểu mẫu được lưu trong Local Storage của trình duyệt. Dữ liệu không được gửi đến máy chủ hoangchamchi.org.</p>

            {/* Accordion Content */}
            {isOpen && (

                <div className="border p-4 rounded-b-md mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {fields.map((field) => (
                    <div key={field.key}>
                      <label className="block text-gray-700 font-medium mb-2">
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          value={formData[field.key] || ''}
                          onChange={(e) => handleChange(field.key, e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder={field.placeholder}
                          rows={4}
                        />
                      ) : (
                        <input
                          type={field.type}
                          value={formData[field.key] || ''}
                          onChange={(e) => handleChange(field.key, e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

            )}
        </div>
    );
}




export default MotivationForm;