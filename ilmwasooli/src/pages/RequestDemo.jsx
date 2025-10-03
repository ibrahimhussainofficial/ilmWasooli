import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

export default function RequestDemo() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const [form, setForm] = useState({
    name: "",
    sublocality: "",
    address: "",
    mobile: "",
    cell: "",
    package: "",
    deploymentCharges: "5000",
    amount: "0",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleReset = () => {
    setForm({
      name: "",
      sublocality: "",
      address: "",
      mobile: "",
      cell: "",
      package: "",
      deploymentCharges: "5000",
      amount: "0",
    });
  };

  return (
    <section
      className="min-h-screen mt-12 px-4 py-12 sm:px-6 lg:px-12"
      style={{
        background:
          "linear-gradient(135deg, #2dce89 0%, #28b673 50%, #3ab189 75%, #1e7d55 100%)",
      }}
    >
      <Helmet>
        <title>Request a Demo - ILM Wasooli</title>
        <meta
          name="description"
          content="Request a demo of ILM Wasooli software solution. Fill out the form to get started."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div
        className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 sm:p-10 mx-auto"
        data-aos="fade-up"
      >
        {/* Header inside Form */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-6">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.png" // Replace with actual logo path
              alt="Logo"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">ILM Wasooli</h2>
              <p className="text-sm text-gray-500">Request a Demo</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-gray-700 text-sm text-center md:text-right leading-relaxed">
            <p>
              <strong>Address:</strong> R-8, Row-8, Block C, N.C.E.H.S,
              GULSHAN-E-IQBAL, BLOCK 10-A, KARACHI
            </p>
            <p>
              <strong>Phone:</strong> ___________ &nbsp;&nbsp;
              <strong>Cell:</strong> ___________
            </p>
          </div>
        </div>

        {/* Form Section */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="form-input w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2dce89] focus:outline-none"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          {/* Cell */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Cell</label>
            <input
              id="cell"
              type="text"
              placeholder="03XXXXXXXXX"
              maxLength={11}
              className="form-input w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2dce89] focus:outline-none"
              value={form.cell}
              onChange={handleChange}
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Mobile
            </label>
            <input
              id="mobile"
              type="text"
              placeholder="Phone 2"
              maxLength={11}
              className="form-input w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2dce89] focus:outline-none"
              value={form.mobile}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Your Address"
              className="form-input w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2dce89] focus:outline-none"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          {/* Sublocality */}
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Sublocality
            </label>
            <select
              id="sublocality"
              className="form-select w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2dce89] focus:outline-none"
              onChange={handleChange}
              value={form.sublocality}
            >
              <option value="0">Select SubLocality</option>
              <option value="1353">KARACHI</option>
              <option value="10225">Abbottabad</option>
              <option value="10224">Muzaffarabad</option>
              <option value="10202">Islamabad</option>
              <option value="10201">Lahore</option>
              <option value="10223">Rahim Yar Khan</option>
              <option value="10222">Kasur</option>
              <option value="10221">Larkana</option>
              <option value="10220">Okara</option>
              <option value="10219">Dera Ghazi Khan</option>
              <option value="10218">Jhang</option>
              <option value="10217">Sheikhupura</option>
              <option value="10216">Gujrat</option>
              <option value="10215">Mardan</option>
              <option value="10214">Sahiwal</option>
              <option value="10213">Bahawalpur</option>
              <option value="10212">Sukkur</option>
              <option value="10211">Sargodha</option>
              <option value="10210">Gujranwala</option>
              <option value="10209">Sialkot</option>
              <option value="10208">Hyderabad</option>
              <option value="10207">Multan</option>
              <option value="10206">Quetta</option>
              <option value="10205">Peshawar</option>
              <option value="10204">Faisalabad</option>
              <option value="10203">Rawalpindi</option>
              <option value="10226">Mingora</option>
              <option value="10227">Chiniot</option>
              <option value="10228">Jhelum</option>
              <option value="10229">Gwadar</option>
              <option value="10230">Nawabshah</option>
              <option value="10231">Chitral</option>
              <option value="10232">Mirpur</option>
              <option value="10233">Attock</option>
              <option value="10234">Kotli</option>
              <option value="10235">Mansehra</option>
              <option value="10236">Turbat</option>
              <option value="10237">Dera Ismail Khan</option>
              <option value="10238">Khushab</option>
              <option value="10239">Swat</option>
              <option value="10240">Zhob</option>
              <option value="10241">Khairpur</option>
              <option value="10242">Khanewal</option>
              <option value="10243">Mandi Bahauddin</option>
              <option value="10244">Bannu</option>
              <option value="10245">Swabi</option>
              <option value="10246">Jacobabad</option>
              <option value="10247">Shikarpur</option>
              <option value="10248">Hafizabad</option>
              <option value="10249">Charsadda</option>
              <option value="10250">Tando Allahyar</option>
              <option value="10251">Tando Adam</option>
              <option value="10252">Narowal</option>
              <option value="10253">Nowshera</option>
              <option value="10254">Jaranwala</option>
              <option value="10255">Muridke</option>
              <option value="10256">Shahdadpur</option>
              <option value="10257">Pakpattan</option>
              <option value="10258">Bhakkar</option>
              <option value="10259">Vehari</option>
              <option value="10260">Toba Tek Singh</option>
              <option value="10261">Kamalia</option>
              <option value="10262">Haripur</option>
              <option value="10263">Daska</option>
              <option value="10264">Mianwali</option>
              <option value="10265">Kamoke</option>
              <option value="10266">Mandi Ahmadabad</option>
              <option value="10267">Burewala</option>
              <option value="10268">Kandhkot</option>
              <option value="10269">Chakwal</option>
              <option value="10270">Kambar</option>
              <option value="10271">Lodhran</option>
              <option value="10272">Hangu</option>
              <option value="10273">Dadu</option>
              <option value="10274">Ghotki</option>
              <option value="10275">Kot Addu</option>
              <option value="10276">Samundri</option>
              <option value="10277">Hasilpur</option>
              <option value="10278">Moro</option>
              <option value="10279">Mailsi</option>
              <option value="10280">Pattoki</option>
              <option value="10281">Arifwala</option>
              <option value="10282">Tando Muhammad Khan</option>
              <option value="10283">Kashmore</option>
              <option value="10284">Dera Allah Yar</option>
              <option value="10285">Badin</option>
              <option value="10286">Haveli Lakha</option>
              <option value="10287">Shahkot</option>
              <option value="10288">Alipur</option>
              <option value="10289">Chichawatni</option>
              <option value="10290">Muzaffargarh</option>
              <option value="10291">Umerkot</option>
              <option value="10292">Jatoi</option>
              <option value="10293">Shorkot</option>
              <option value="10294">Kahror Pakka</option>
              <option value="10295">Pir Mahal</option>
              <option value="10296">Kabirwala</option>
              <option value="10297">Ahmedpur East</option>
              <option value="10298">Zafarwal</option>
              <option value="10299">Depalpur</option>
              <option value="10300">Fort Abbas</option>
              <option value="10301">Jalalpur Jattan</option>
              <option value="10302">Shahdadkot</option>
              <option value="10303">Risalpur</option>
              <option value="10304">Pasrur</option>
              <option value="10305">Sanghar</option>
              <option value="10306">Gujjar Khan</option>
              <option value="10307">Kharian</option>
              <option value="10308">Kundian</option>
              <option value="10309">Mithi</option>
              <option value="10310">Kohat</option>
              <option value="10311">Jampur</option>
              <option value="10312">Mirpur Mathelo</option>
              <option value="10313">Layyah</option>
              <option value="10314">Tank</option>
              <option value="10315">Kalat</option>
              <option value="10316">Chaman</option>
              <option value="10317">Mastung</option>
              <option value="10318">Uthal</option>
              <option value="10319">Hub</option>
              <option value="10320">Pasni</option>
              <option value="10321">Ormara</option>
              <option value="10322">Kharan</option>
              <option value="10323">Gandava</option>
              <option value="10324">Dera Murad Jamali</option>
              <option value="10325">Sibi</option>
              <option value="10326">Ziarat</option>
              <option value="10327">Lasbela</option>
              <option value="10328">Surab</option>
              <option value="10329">Dera Bugti</option>
            </select>
          </div>

          {/* Package */}
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Package
            </label>
            <select
              id="package"
              className="form-select w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2dce89] focus:outline-none"
              onChange={handleChange}
              value={form.package}
            >
              <option value="">Select the Package</option>
              <option value="175">Up to 3000 students</option>
              <option value="482">Up to 800 students</option>
              <option value="483">Unlimited Students</option>
            </select>
          </div>

          {/* Deployment Charges */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Deployment Charges (One time)
            </label>
            <input
              id="deploymentCharges"
              type="text"
              className="form-input w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2"
              value={form.deploymentCharges}
              readOnly
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Amount
            </label>
            <input
              id="amount"
              type="text"
              className="form-input w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2"
              value={form.amount}
              readOnly
              disabled
            />
          </div>

          {/* Buttons */}
          <div className="sm:col-span-2 flex justify-center gap-6 mt-4">
            <button
              type="submit"
              className="bg-[#2dce89] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#28b673] transition-all duration-200"
            >
              Submit Request
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-300 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-400 transition-all duration-200"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Powered By Section */}
        <div className="mt-10 flex items-center justify-center gap-3 text-gray-600 text-sm select-none">
          <span>Powered by</span>
          <img
            src="/logicslabs.png" // Replace with your powered-by image path
            alt="Powered by Logo"
            className="h-6 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
