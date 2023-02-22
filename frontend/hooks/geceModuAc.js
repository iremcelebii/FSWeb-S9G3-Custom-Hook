import localStorageKullan from "./localStorageKullan";

export default function geceModunuAc(key, baslangicDegeri) {
  const [geceModu, setGeceModu] = localStorageKullan(key, baslangicDegeri);

  const toggleMode = (e) => {
    e.preventDefault();
    setGeceModu(!geceModu);
  };

  return [geceModu, setGeceModu, toggleMode];
}
