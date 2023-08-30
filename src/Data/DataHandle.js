export function dataStore(data) {
  console.log(data);
  fetch(
    "https://script.google.com/macros/s/AKfycbxmVzXdn5hQC93MOrS5rZZQfafWkT7P4j0EhXi9mE6dKo-JWfMi_-X8WoPaHEMOB-RxGg/exec",
    // "https://script.google.com/macros/s/AKfycbwuEAFK8Mgbq4_29h_pM7y2S61Yd_RdNTx6t-rNvCfuEy7fV4J7NYHYZidYuZ0KTQEAkg/exec",
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
