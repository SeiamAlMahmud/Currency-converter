import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [date, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return date;
}

export default useCurrencyInfo;
