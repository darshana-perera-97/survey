export function dataStore(data) {
  fetch(
    "https://script.google.com/macros/s/AKfycbxmVzXdn5hQC93MOrS5rZZQfafWkT7P4j0EhXi9mE6dKo-JWfMi_-X8WoPaHEMOB-RxGg/exec",
    // "https://script.google.com/macros/s/AKfycbygE0uOmkco_VBcUHKCT2YG8n-F5Bm5S6EtqkYYeZGTEP2Rw1w1FjNZLRgXMwGRU6eM/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      // handle the response
      console.log("write");
    })
    .catch((error) => {
      console.log("err");
    });
}

// https://docs.google.com/spreadsheets/d/1bomLSbm20f9YBaCtaKL37w8TUsgLviM14jx_swTCHGA/edit#gid=0
