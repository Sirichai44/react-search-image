import "./App.css";
import { useState } from "react";
import Picture from "./components/Picture";

function App() {
  const [word, setWord] = useState("");
  const [photo, setPhoto] = useState([]);

  const searchImage = (e: any) => {
    e.preventDefault();
    if (!word) {
      alert("กรุณาป้อนข้อมูล");
    } else {
      fetchImageFromAPI();
    }
  };

  const fetchImageFromAPI = async () => {
    const url = `${import.meta.env.VITE_API_URL}?page=1&query=${word}&client_id=${import.meta.env.VITE_API_KEY}&per_page=15`;
    const res = await fetch(url);
    const data = await res.json();
    const result = data.results;
    if (result.length == 0) {
      alert("ไม่มีข้อมูลรูปภาพ");
      setWord("");
    } else {
      setPhoto(result);
    }
  };

  return (
    <>
      <h1>ระบบค้นหารูปภาพด้วย API</h1>
      <form onSubmit={searchImage}>
        <input
          type="text"
          placeholder="ป้อนชื่อรูปภาพ"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">ค้นหา</button>
      </form>

      {/* แสดงรูปภาพ */}
      <div className="search-result">
        {photo.map((data, index) => {
          return <Picture data={data} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;
