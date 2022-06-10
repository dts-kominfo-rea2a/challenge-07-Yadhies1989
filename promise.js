const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
    try {

      let totalData = 0;

      const teater1 = await promiseTheaterIXX();
      const teater2 = await promiseTheaterVGC();

      const dataGabungan = teater1.concat(teater2)

      dataGabungan.forEach(element => {
        if (element.hasil === emosi) {
        totalData++;
        }
      });

      return totalData;

    } catch (err) {
      console.log(err);
    }

}

module.exports = {
  promiseOutput,
};
