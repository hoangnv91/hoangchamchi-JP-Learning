//'use client';

import Link from "next/link";
import React from "react";

import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";

export default function About() {
  return (
    <div className="grid lg:grid-cols-body p-5">
      <br></br>
      <br></br>
      <div className="lg:col-span-10">

        <h1 className="text-blue-900 text-3xl font-bold">Giới thiệu về Hoangchamchi</h1>

        <div className="grid grid-cols-3 gap-8 text-center m-8">
          <div className="text-xl font-semibold text-slate-500">
            <p>花びらが</p>
            <p>風に舞うよ</p>
            <p>春の歌</p>
          </div>
          <div className="text-lg text-gray-400">
            <p>Hoangchamchi ga</p>
            <p>Kaze ni mau yo</p>
            <p>Haru no uta</p>
          </div>
          <div className="text-base text-gray-400">
            <p>Cánh hoa nhảy múa</p>
            <p>Trong gió uyển chuyển</p>
            <p>Bài ca mùa xuân.</p>
          </div>
        </div>

        <div className="mt-2 text-gray-500">
          Hoangchamchi là trang web học tiếng Nhật Mã nguồn mở Miễn phí, với mục tiêu
          giúp học viên chuẩn bị cho kỳ thi JLPT N5-N1. Hãy tận hưởng việc học tiếng Nhật
          không quảng cáo và không cửa sổ popup. Hiện tại chúng tôi cung cấp phần giải thích Ngữ pháp
          cho tất cả các cấp độ JLPT. Ngoài ra, chúng tôi có một số mục liên quan đến từ vựng JLPT.
          Tất cả các bài học đều có phần lồng tiếng cho từ vựng,
          ngữ pháp và câu ví dụ. Các tính năng khác sẽ được triển khai trong
          tương lai. Vui lòng xem lộ trình bên dưới.
        </div>

        <br></br>

        <div
          className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
          role="alert"
        >
          <p className="font-bold">Đóng góp cho Hoangchamchi.org</p>
          <p>
            Nhà phát triển chính của Hoangchamchi.org đã dành ra vài trăm đô la
            (hàng tháng) cho những đóng góp có ý nghĩa cho dự án. Chúng tôi hoan nghênh
            các nhà phát triển, nhà thiết kế và người sáng tạo nội dung tham gia cùng chúng tôi trong việc
            nâng cao nền tảng. Những ý tưởng sáng tạo và đóng góp của bạn
            có thể tạo ra tác động đáng kể cho dự án.
          </p>
        </div>

        <br></br>

        <h2 className="font-serif text-2xl antialiased text-gray-600">
          Lộ trình dự án:
        </h2>
        <br />
        <div className="mt-2 text-gray-500">
          Phiên bản Public Alpha. Trang web này hiện đang được phát triển tích cực.
          Chúng tôi đang nỗ lực cải thiện nền tảng và thêm
          các tính năng mới. Do đó, bạn có thể gặp phải thỉnh thoảng các lỗi,
          sự không nhất quán hoặc chức năng hạn chế. Bạn có thể hỗ trợ việc
          phát triển bằng cách mua cho chúng tôi một ly cà phê.
        </div>
        <br />

        <div className="max-w-5xl bg-gray-50">
          <Timeline
            mode="alternate"
            items={[
              {
                children: "Tạo các mục Ngữ pháp JLPT N5-N2 tiếng Nhật.",
              },
              {
                children: "Tạo các mục Từ vựng JLPT N5-N2 tiếng Nhật.",
                color: "green",
              },
              {
                dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
                children: `Thêm các mục Kanji chỉ có một cách đọc cho JLPT N5-N2`,
              },
              {
                color: "red",
                children:
                  "Mục đọc truyện tiếng Nhật trình độ JLPT N3 (bao gồm cả âm thanh)",
              },
              {
                children: "Giải thích ngữ pháp của các bài đọc trong mục đọc.",
              },
              {
                children: "Đăng nhập bằng Google cho người dùng miễn phí.",
              },
              {
                children:
                  "Hệ thống lặp lại ngắt quãng (SRS) để học Từ vựng, Ngữ pháp và Kanji.",
              },
              {
                dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
                children: "Thêm Ngữ pháp và Từ vựng cho tiếng Hàn.",
              },
            ]}
          />
        </div>

        <div className="p-4 md:p-6 bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Liên hệ với chúng tôi
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Nếu bạn có bất kỳ câu hỏi nào hoặc cần thêm thông tin, đừng ngần ngại
            liên hệ với chúng tôi. Chúng tôi hoan nghênh phản hồi, báo cáo lỗi và yêu cầu tính năng
            của bạn. Hiện tại trang web đang ở giai đoạn Public Alpha, nên có rất nhiều
            lỗi mà chúng tôi đã biết.
          </p>
          <div className="mt-4">
            <a
              href="https://www.reddit.com/r/hoangchamchi/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Hoangchamchi Project Subreddit
            </a>
            <br />
            <a
              href="https://www.reddit.com/user/tcoil_443"
              className="text-blue-600 dark:text-blue-400 hover:underline mt-2"
            >
              Nhà phát triển chính trên Reddit
            </a>
            <br />
            <a
              href="https://discord.gg/afefVyfAkH"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Máy chủ Discord Hoangchamchi
            </a>
            <br />
            <a
              href="https://github.com/tristcoil/hoangchamchi.org"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Kho GitHub Hoangchamchi
            </a>
          </div>

        </div>

        <div className="p-4 md:p-6 bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Giá - Miễn phí
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Hiện tại tất cả nội dung đều miễn phí. Và tất cả nội dung sẽ miễn phí trong một thời gian dài
            sắp tới. Phần lớn nội dung sẽ miễn phí mãi mãi.
            Dự án là mã nguồn mở, nên bất kỳ ai cũng có thể tự khởi chạy máy chủ Hoangchamchi của riêng mình.
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Có thể trong tương lai một số tính năng nhất định sẽ trả phí trên nền tảng hoangchamchi.org chính thức để
            duy trì máy chủ hoạt động và bù đắp chi phí phát triển. Nhưng ngay cả trong trường hợp đó, rất nhiều tính năng sẽ
            vẫn miễn phí mãi mãi. Chức năng có thể trở thành
            cao cấp (premium) bao gồm các tính năng dành riêng cho người dùng, chẳng hạn như theo dõi tiến độ,
            ngân hàng từ vựng, thẻ SRS, ...
            Dù sao đi nữa, bạn luôn có thể chỉnh sửa một chút mã nguồn và có toàn bộ chức năng miễn phí.
          </p>
        </div>

        <div>
          <div className="p-6 bg-white shadow-xl rounded-lg border border-gray-200">
            <h2 className="font-semibold text-2xl mb-5 border-b pb-2 border-gray-300">
              Nguồn & Tài liệu tham khảo:
            </h2>

            <h3 className="font-semibold text-xl mb-5 border-b pb-2 border-gray-300">
              Tiếng Nhật
            </h3>

            <ul className="pl-5 space-y-3">
              <li className="py-1 transition-colors duration-300 hover:bg-gray-50 rounded-md pl-3">
                <span className="text-blue-500 pr-2">•</span> Nihongo So Matome
                JLPT N2 series
              </li>
              <li className="py-1 transition-colors duration-300 hover:bg-gray-50 rounded-md pl-3">
                <span className="text-blue-500 pr-2">•</span> Nihongo So Matome
                JLPT N3 series
              </li>
              <li className="py-1 transition-colors duration-300 hover:bg-gray-50 rounded-md pl-3">
                <span className="text-blue-500 pr-2">•</span> Nihongo So Matome
                JLPT N4 series
              </li>
              <li className="py-1 transition-colors duration-300 hover:bg-gray-50 rounded-md pl-3">
                <span className="text-blue-500 pr-2">•</span> Nihongo So Matome
                JLPT N5 series
              </li>
              <li className="py-1 transition-colors duration-300 hover:bg-gray-50 rounded-md pl-3">
                <span className="text-blue-500 pr-2">•</span> 600 Basic Japanese
                Verbs, Tuttle Publishing
              </li>
              <li className="py-1 transition-colors duration-300 hover:bg-gray-50 rounded-md pl-3">
                <span className="text-blue-500 pr-2">•</span> New Kanzen Master
                JLPT N3 Tango Word Book (Shin Kanzen Master: JLPT N3 1800
                Important Vocabulary Words)
              </li>
            </ul>

            <h3 className="font-semibold text-xl mb-5 border-b pb-2 border-gray-300">
              Tiếng Việt
            </h3>
            <ul>
              <li className="py-1 transition-colors duration-300 hover:bg-gray-50 rounded-md pl-3">
                <span className="text-blue-500 pr-2">•</span> Let&apos;s speak
                Vietnamese (Binh Nhu Ngo)
              </li>
              <li className="py-1 transition-colors duration-300 hover:bg-gray-50 rounded-md pl-3">
                <span className="text-blue-500 pr-2">•</span> Vietnamese as a
                second language (Hue Van Nguyen)
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="p-6 bg-white shadow-xl rounded-lg border border-gray-200">
            <h2 className="font-semibold text-2xl mb-5 border-b pb-2 border-gray-300">
              Nguồn Web:
            </h2>

            <h3 className="font-semibold text-xl mb-5 border-b pb-2 border-gray-300">
              Tiếng Nhật:
            </h3>

            <p>
              <strong>Danh sách từ vựng và kanji theo cấp độ JLPT</strong> lấy từ 
              <a
                href="https://www.tanos.co.uk/jlpt/"
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanos.co.uk
              </a>
            </p>

            <p className="mt-2">
              giấy phép: Creative
              Commons BY -
              <a
                href="https://www.tanos.co.uk/jlpt/sharing/"
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chi tiết giấy phép
              </a>
            </p>
          </div>

          {/* <Example /> */}





{/* # Kanjidic 
we are using kanji dictionary from
https://www.edrdg.org/wiki/index.php/KANJIDIC_Project

we took this file:
the KANJIDIC2 file, which is in XML format and Unicode/UTF-8 coding, and contains information about all 13,108 kanji. (download)
http://www.edrdg.org/kanjidic/kanjidic2.xml.gz

then we extract it to xml file

then we use our own python script to convert it to json file so it is easier to process
json will have 50 MB */}


<div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dự án Kanjidic</h1>
      <p className="text-gray-700 mb-2">
        Chúng tôi đang sử dụng từ điển kanji từ 
        <a 
          href="https://www.edrdg.org/wiki/index.php/KANJIDIC_Project" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          KANJIDIC Project
        </a>.
      </p>
      <p className="text-gray-700 mb-2">
        Chúng tôi lấy file KANJIDIC2, ở định dạng XML, mã hóa Unicode/UTF-8, chứa thông tin về tất cả 13.108 kanji. Bạn có thể tải file 
        <a 
          href="http://www.edrdg.org/kanjidic/kanjidic2.xml.gz" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          tại đây
        </a>.
      </p>
      <p className="text-gray-700 mb-2">
        Sau khi tải xuống, chúng tôi giải nén file sang định dạng XML. Sau đó, chúng tôi dùng script Python tùy chỉnh để chuyển đổi nó thành file JSON để xử lý dễ dàng hơn. File JSON thu được có kích thước khoảng 50 MB.
      </p>
    </div>






{/* # Radicals radkfile 
https://www.edrdg.org/krad/kradinf.html


Copyright
The RADKFILE and KRADFILE files are copright and available under the EDRDG Licence. 
The copyright of the RADKFILE2 and KRADFILE2 files is held by Jim Rose.
Jim Breen

well, I need to read more about the licence, it might not allow commercial use
https://www.edrdg.org/edrdg/licence.html


The dictionary files are made available under a Creative Commons Attribution-ShareAlike Licence (V4.0). 


RADKFILE/KRADFILE - files relating to the decomposition of the 6,355 kanji in JIS X 0208 into their visible components.
radkfile2/kradkfile2 is copyright by Jim Breen - but we are not using these specific files */}


<div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Bộ thủ - RADKFILE</h1>
      <p className="text-gray-700 mb-2">
        Để biết thêm thông tin về RADKFILE, hãy truy cập 
        <a 
          href="https://www.edrdg.org/krad/kradinf.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          trang này
        </a>.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Bản quyền</h2>
      <p className="text-gray-700 mb-2">
        Các file RADKFILE và KRADFILE có bản quyền và được cung cấp theo Giấy phép EDRDG. Bản quyền của RADKFILE2 và KRADFILE2 thuộc về Jim Rose và Jim Breen.
      </p>
      <p className="text-gray-700 mb-2">
        Xin lưu ý rằng giấy phép có thể không cho phép sử dụng thương mại. Bạn có thể đọc thêm về giấy phép 
        <a 
          href="https://www.edrdg.org/edrdg/licence.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          tại đây
        </a>.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Thông tin giấy phép</h2>
      <p className="text-gray-700 mb-2">
        Các file từ điển được cung cấp theo Giấy phép Creative Commons Attribution-ShareAlike (V4.0).
      </p>
      <p className="text-gray-700 mb-2">
        Các file RADKFILE/KRADFILE liên quan đến việc phân tách 6.355 kanji trong JIS X 0208 thành các thành phần nhìn thấy được. Tuy nhiên, xin lưu ý rằng các file RADKFILE2/KRADFILE2, có bản quyền thuộc về Jim Breen, không được sử dụng trong dự án của chúng tôi.
      </p>
    </div>








{/* # Mecab
mecab apt package

mecab-async - https://www.npmjs.com/package/mecab-async - MIT Licence */}


<div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Mecab</h1>
      <p className="text-gray-700 mb-2">
        Chúng tôi sử dụng gói Mecab có sẵn qua trình quản lý gói apt.
      </p>
      <p className="text-gray-700 mb-2">
        Ngoài ra, chúng tôi còn sử dụng 
        <a 
          href="https://www.npmjs.com/package/mecab-async" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          mecab-async
        </a>, 
        một gói NPM được cấp phép theo Giấy phép MIT.
      </p>
    </div>





{/* # KUROSHIRO Parser 

https://kuroshiro.org/
https://github.com/hexenq/kuroshiro

MIT licence
it is node package */}

<div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Trình phân tích KUROSHIRO</h1>
      <p className="text-gray-700 mb-2">
        Trình phân tích KUROSHIRO là công cụ mạnh mẽ để chuyển đổi văn bản tiếng Nhật sang nhiều dạng khác nhau. Để biết thêm chi tiết, hãy truy cập trang web chính thức tại 
        <a 
          href="https://kuroshiro.org/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          kuroshiro.org
        </a>.
      </p>
      <p className="text-gray-700 mb-2">
        Mã nguồn có sẵn trên GitHub tại 
        <a 
          href="https://github.com/hexenq/kuroshiro" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          github.com/hexenq/kuroshiro
        </a>.
      </p>
      <p className="text-gray-700 mb-2">
        KUROSHIRO là một gói Node.js và được cấp phép theo Giấy phép MIT.
      </p>
    </div>






{/* # JMDIC 

https://www.edrdg.org/jmdict/j_jmdict.html
https://www.edrdg.org/edrdg/licence.html

Licence:
The dictionary files are made available under a Creative Commons Attribution-ShareAlike Licence (V4.0). The Licence Deed can be viewed here, and the full Licence Code is here.
For the EDICT, JMdict and KANJIDIC files, the following URLs may be used or quoted:
https://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project
https://www.edrdg.org/wiki/index.php/KANJIDIC_Project

unable to download files from theese old sites, full of errors

but found this repo under MIT licence (just the code) (jmdic for yomitan), frequently updated
https://github.com/themoeway/jmdict-yomitan?tab=readme-ov-file
so downloaded jmdict file from there (without example tatoeba sentences)
next time we can download the bigger file as well

Licence (jmdict for yomitan):
The code in this repository is licensed under the MIT license. 
The released dictionaries are licensed under the Creative Commons Attribution-ShareAlike Licence (V4.0) that JMdict is. */}

<div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">JMDICT</h1>
      <p className="text-gray-700 mb-2">
        Các file JMDict được cung cấp theo Giấy phép Creative Commons Attribution-ShareAlike (V4.0). Bạn có thể xem Văn bản giấy phép 
        <a 
          href="https://www.edrdg.org/edrdg/licence.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          tại đây
        </a>, và toàn bộ Mã giấy phép 
        <a 
          href="https://www.edrdg.org/edrdg/licence.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          tại đây
        </a>.
      </p>
      <p className="text-gray-700 mb-2">
        Đối với các file EDICT, JMdict và KANJIDIC, bạn có thể sử dụng hoặc trích dẫn các URL sau:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            <a 
              href="https://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              JMdict-EDICT Dictionary Project
            </a>
          </li>
          <li>
            <a 
              href="https://www.edrdg.org/wiki/index.php/KANJIDIC_Project" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              KANJIDIC Project
            </a>
          </li>
        </ul>

      <p className="text-gray-700 mb-2">
        Thật không may, chúng tôi gặp sự cố khi tải file từ các trang web cũ này do lỗi. Tuy nhiên, chúng tôi tìm thấy một kho lưu trữ theo Giấy phép MIT cho JMDict (dùng cho Yomitan) được cập nhật thường xuyên. Bạn có thể xem 
        <a 
          href="https://github.com/themoeway/jmdict-yomitan?tab=readme-ov-file" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          tại đây
        </a>.
      </p>
      <p className="text-gray-700 mb-2">
        Chúng tôi đã tải file JMDict từ kho lưu trữ đó, file này không bao gồm câu ví dụ từ Tatoeba. Trong tương lai, chúng tôi có thể tải cả file lớn hơn.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Giấy phép (JMDict for Yomitan)</h2>
      <p className="text-gray-700 mb-2">
        Mã trong kho lưu trữ JMDict for Yomitan được cấp phép theo Giấy phép MIT. Các từ điển được phát hành theo Giấy phép Creative Commons Attribution-ShareAlike (V4.0), giống như JMdict.
      </p>
    </div>


{/* # Radicals + KRADFILE

radical meanings taken from wikipedia:

# source:
# https://en.wikipedia.org/wiki/List_of_kanji_radicals_by_stroke_count

KRADFILE 
https://www.edrdg.org/krad/kradinf.html
The RADKFILE and KRADFILE files are copright and available under the EDRDG Licence. The copyright of the RADKFILE2 and KRADFILE2 files is held by Jim Rose.

the EDRDG licence:
https://www.edrdg.org/edrdg/licence.html

here are sample attribution texts:
https://www.edrdg.org/edrdg/sample.html

we are using just KRADFILE (NOT KRADFILE2, so we are good with licence) */}

<div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Bộ thủ + KRADFILE</h1>
      <p className="text-gray-700 mb-2">
        Ý nghĩa của các bộ thủ được sử dụng trong dự án của chúng tôi lấy từ Wikipedia. Bạn có thể xem danh sách đầy đủ các bộ thủ kanji theo số nét 
        <a 
          href="https://en.wikipedia.org/wiki/List_of_kanji_radicals_by_stroke_count" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          tại đây
        </a>.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">KRADFILE</h2>
      <p className="text-gray-700 mb-2">
        Chúng tôi sử dụng KRADFILE cho dự án của mình. Thông tin thêm về KRADFILE có thể được tìm thấy 
        <a 
          href="https://www.edrdg.org/krad/kradinf.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          tại đây
        </a>.
      </p>
      <p className="text-gray-700 mb-2">
        Các file RADKFILE và KRADFILE có bản quyền và được cung cấp theo Giấy phép EDRDG. Bản quyền của RADKFILE2 và KRADFILE2 thuộc về Jim Rose. Tuy nhiên, chúng tôi chỉ sử dụng KRADFILE (không phải KRADFILE2), nên chúng tôi tuân thủ giấy phép.
      </p>
      <p className="text-gray-700 mb-2">
        Để biết thêm thông tin về giấy phép EDRDG, bạn có thể truy cập 
        <a 
          href="https://www.edrdg.org/edrdg/licence.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          liên kết này
        </a>.
      </p>
      <p className="text-gray-700 mb-2">
        Các văn bản ghi nguồn mẫu để sử dụng các file này theo giấy phép có thể được tìm thấy 
        <a 
          href="https://www.edrdg.org/edrdg/sample.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          tại đây
        </a>.
      </p>
    </div>


{/* # JAMDICT 

MIT licence 

https://pypi.org/project/jamdict/
https://github.com/tristcoil/jamdict?tab=readme-ov-file */}


<div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">JAMDICT</h1>
      <p className="text-gray-700 mb-2">
        JAMDICT là một gói Python để làm việc với các file từ điển tiếng Nhật. Nó được cấp phép theo Giấy phép MIT.
      </p>
      <p className="text-gray-700 mb-2">
        Để biết thêm thông tin, bạn có thể truy cập trang gói trên PyPI 
        <a 
          href="https://pypi.org/project/jamdict/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          tại đây
        </a>.
      </p>
      <p className="text-gray-700 mb-2">
        Mã nguồn và các chi tiết bổ sung có thể được tìm thấy trên GitHub 
        <a 
          href="https://github.com/tristcoil/jamdict?tab=readme-ov-file" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          tại đây
        </a>.
      </p>
    </div>



    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Bộ thủ Kanji</h1>
      <p className="text-gray-700 mb-2">
        Danh sách Bộ thủ Kanji lấy từ 
        <a 
          href="https://en.wikipedia.org/wiki/List_of_kanji_radicals_by_stroke_count" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline ml-1"
        >
          Wikipedia
        </a>.
      </p>
    </div>
        </div>
      </div>
    </div>
  );
}





const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
]

function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
              <figure className="relative isolate">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="0ef284b8-28c2-426e-9442-8655d393522e"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
                </svg>
                <img src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" className="h-12 w-auto" />
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
                    arcu gravida natoque erat et cursus tortor.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                  <strong className="font-semibold text-white">Judith Rogers,</strong> CEO at Workcation
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Company values</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                On a mission to empower remote teams
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                  vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                  erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                  semper sed amet vitae sed turpis id.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                  auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                  hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                  auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                  hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex">
              <a href="#" className="text-base font-semibold leading-7 text-indigo-600">
                Learn more about our company <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            Japanology related resources:

            Doporučená literatura
            Literatura doporučená pro přípravu ke studiu:

            https://www.muni.cz/bakalarske-a-magisterske-obory/24559-japanistika

            Bařinka, J. (ed.): Kulturní tradice Dálného východu. Praha, Odeon, 1980.
            Boháčková L., Winkelhöferová: Vějíř a meč. Praha, Albatros, 1984.
            Collcutt, M. a kol.: Svět Japonska. Přel. Duroňová, R. Praha, Knižní klub, 1997.
            Earhart, H. B.: Náboženství Japonska – Mnoho tradic na jedné svaté cestě. Přel. Heřman, R. Praha, Prostor, 1998.
            Henshall, K. G.: A Guide to Learning Hiragana & Katakana. Tuttle Publishing, 1990.
            Janoš, J.: 99 zajímavostí z Japonska. Praha, Albatros, 1984.
            Kodžiki – Kronika dávného Japonska. Přel. Fiala, K. Praha, ExOriente, 2012.
            Kraemerová, A.: Jak komunikovat s Japonci aneb Nebuďme xenofobní. Praha, Scriptorium, 2013.
            Labus, D.: Japonsko. Stručná historie států. Praha, Libri, 2009.
            Líman, A.: Kouzlo šerosvitu. Praha, DharmaGaia, 2008.
            Líman, A.: Krajiny japonské duše. Praha, Mladá fronta, 2000.
            Líman, A.: Mezi nebem a zemí. Praha, Academia, 2001.
            Mason, R., Caiger, J.: Dějiny Japonska. Přel. Müllerová, P. Praha, Fighters Publications, 2007.
            Nymburská, D., Vostrá, D., Sawatari, M.: Japonština. Praha, Leda, 2007.
            Reischauer, E., Craig, A.: Dějiny Japonska. Přel. Labus, D., Sýkora, J. Praha, Lidové noviny, 2000.
            Sýkora, J.: Ekonomické myšlení v Japonsku. Praha, FF UK, 2010.
            Švarcová, Z.: Japonská literatura 712–1868. Praha, Karolinum, 2005.
            Vasiljevová, Z.: Dějiny Japonska. Praha, Nakladatelství Svoboda, 1986.
            Winkelhöferová, V.: Slovník japonské literatury. Praha, Libri, 2008.


          </div>
        </div>
      </div>
    </div>
  )
}
