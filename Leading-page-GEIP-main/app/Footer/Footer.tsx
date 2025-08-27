
import Link from "next/link";

export default function FooterPage() {
  return (
    <main className="font-fam">
      <footer className=" bg-white text-neutral-content sm:px-20 py-10 flex flex-col md:flex-row gap-10 shadow-[0_-4px_6px_-1px_rgba(64,64,64,0.3)]">
        {/* Left Column */}
        <aside className="text-black w-full md:w-1/2 p-5">
          <div className="flex flex-col gap-4">
            <p className="font-kontumruy text-2xl sm:text-3xl font-bold">
              អំពី GEIP ETECH
            </p>
            <p className="max-w-full sm:max-w-xl text-base">
              ជួយលើកកម្ពស់គុណភាពនៃការបណ្ដុះបណ្ដាលគ្រូបង្រៀនដោយប្រើប្រាស់ប្រព័ន្ធបច្ចេកវិទ្យាក្នុងការបង្រៀន
              ជួយបង្កើនសមត្ថភាពសិស្សឲ្យឈានទៅដល់ការប្រកួតប្រជែងកម្រិតអន្តរជាតិ
              PISA & SEA-PLMជួយឱ្យសិស្សចេះស្វ័យសិក្សាដោយខ្លួនឯង
              តាមរយៈការធ្វើស្វ័យសិក្សាសន្លឹកកិច្ចការ
            </p>
            <p className="font-kontumruy text-2xl sm:text-3xl font-bold">
              បណ្ដាញសង្គម
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              {/* YouTube */}
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-red-100 hover:bg-red-500 transition-colors">
                <a
                  href="https://www.youtube.com/@foedrupp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="fill-current text-red-500 hover:text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>

              {/* Telegram */}
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-100 hover:bg-blue-500 transition-colors">
                <a
                  href="https://t.me/+z5cVlBOG1w44MWU1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-blue-500 hover:text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                  </svg>
                </a>
              </div>


              {/* TikTok */}
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 hover:bg-black transition-colors">
                <a
                  href="https://www.tiktok.com/@geip.edtech.edu?_t=ZS-8vlaklAfv52&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-black hover:text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </a>
              </div>

              {/* Facebook */}
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-100 hover:bg-blue-600 transition-colors">
                <a
                  href="https://www.facebook.com/share/192a45G1TZ/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="fill-current text-blue-600 hover:text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Column */}
        <aside className="text-black w-full md:w-1/2 p-5">
          <div className="flex flex-col gap-4">
            <p className="font-kontumruy text-2xl sm:text-3xl font-bold">
              ទំនាក់ទំនងមកកាន់យើងខ្ញុំ
            </p>

            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              <p className="font-bold">អ៊ីមែល ៖ Academic.inset2@fedrupp.org</p>
            </div>

            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 1 .738-.073l2.522 1.263c.329.165.488.54.378.89l-.805 2.52a.678.678 0 0 1-.588.468l-1.287.128a11.463 11.463 0 0 0 4.304 4.304l.128-1.287a.678.678 0 0 1 .468-.588l2.52-.805c.35-.11.725.049.89.378l1.263 2.522a.678.678 0 0 1-.073.738l-1.27 1.27c-.36.36-.885.51-1.367.406-2.315-.488-4.967-2.586-6.676-5.007C3.3 5.639 2.37 3.88 2.012 2.633c-.104-.482.046-1.008.406-1.367l1.236-1.236z" />
              </svg>
              <p className="font-bold">លេខទូរស័ព្ទ ៖ 012 345 678</p>
            </div>


            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 1 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <p className="font-bold">
                ទីតាំង ៖ សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (Rupp)
              </p>
            </div>
          </div>
        </aside>
      </footer>
    </main>
  );
}
