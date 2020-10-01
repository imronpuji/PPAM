const data = [{
    nama : 'imron',
    keaktifan : 0,
    absen : 0,
    tugas_1 : 0 ,
    tugas_2 : 0,
    tugas_3 : 0,
    tugas_4 : 0,
    uts : 0,
    uas : 0,
  }]
  
  
  console.log((30 / 100) * ((60 + 60 + 60 + 60) / 4) )
  //The percent that we want to get.
  //i.e. We want to get 50% of 120.
  const absensi = (val, persen) => {
    var percentToGet = persen;
     
    //Calculate the percent.
    var percent = (percentToGet / 100) * val * 100;
    //Alert it out for demonstration purposes.
    return percent
  
  }
  
  
  const persen = (val, persen) => {
    var percentToGet = persen;
   
    var percent = (percentToGet / 100) * val
  
    return percent
  
  }
  
  const test = data.map(({nama, tugas_1, tugas_2, tugas_3, tugas_4, absen, keaktifan, uts, uas}) => {
    const absensis = absensi(absen / 16, 15)
    const tugass = persen((tugas_1 + tugas_2 + tugas_3 + tugas_4) / 4, 30)
   
    const utss = persen(uts, 20)
    const uass = persen(uas, 25)
    const aktifann = persen(keaktifan, 10)
  
  const angka = tugass + utss + uass + absensis + aktifann
  console.log(angka.toFixed(2) > 2)
  if(angka.toFixed(2) > 80 && angka.toFixed(2) <= 100){
    console.log('A', '4,00')
    console.log(angka.toFixed(2))
      return {bobot : '4.00' ,skor : angka.toFixed(2), kehadiran : absensis.toFixed(2), tugas : tugass.toFixed(2), uts : utss.toFixed(2), uas : uass.toFixed(2), keterangan : 'LULUS', huruf:'A'  }
  
  } else if(angka.toFixed(2) > 75 && angka.toFixed(2) <= 80){
          return {bobot : '3.50' ,skor : angka.toFixed(2), kehadiran : absensis.toFixed(2), tugas : tugass.toFixed(2), uts : utss.toFixed(2), uas : uass.toFixed(2), keterangan : 'LULUS', huruf:'AB'  }
  
  
  } else if(angka.toFixed(2) > 70 && angka.toFixed(2) <= 75){
    
            return {bobot : '3.00' ,skor : angka.toFixed(2), kehadiran : absensis.toFixed(2), tugas : tugass.toFixed(2), uts : utss.toFixed(2), uas : uass.toFixed(2), keterangan : 'LULUS', huruf:'B'  }
  
  
  } else if(angka.toFixed(2) > 65 && angka.toFixed(2) <= 70){
  
          return {bobot : '2.50' ,skor : angka.toFixed(2), kehadiran : absensis.toFixed(2), tugas : tugass.toFixed(2), uts : utss.toFixed(2), uas : uass.toFixed(2), keterangan : 'LULUS', huruf:'BC'  }
  
  } else if(angka.toFixed(2) > 60 && angka.toFixed(2) <= 65){
  
  
              return {bobot : '2.00' ,skor : angka.toFixed(2), kehadiran : absensis.toFixed(2), tugas : tugass.toFixed(2), uts : utss.toFixed(2), uas : uass.toFixed(2), keterangan : 'LULUS', huruf:'C'  }
  
  
  } else if(angka.toFixed(2) > 55 && angka.toFixed(2) <= 60){
      console.log('CD', '1,50')
      console.log(angka.toFixed(2))
          return {bobot : '1.50' ,skor : angka.toFixed(2), kehadiran : absensis.toFixed(2), tugas : tugass.toFixed(2), uts : utss.toFixed(2), uas : uass.toFixed(2), keterangan : 'LULUS', huruf:'CD'  }
  
  } else if(angka.toFixed(2) > 50 && angka.toFixed(2) <= 55){
      console.log('D', '1,00')
      console.log(angka.toFixed(2))
          return {bobot : '1.00' ,skor : angka.toFixed(2), kehadiran : absensis.toFixed(2), tugas : tugass.toFixed(2), uts : utss.toFixed(2), uas : uass.toFixed(2), keterangan : 'MENGULANG', huruf:'D'  }
  
  } else if(angka.toFixed(2) >= 0 && angka.toFixed(2) <= 50){
      console.log('E', '0,00')
      console.log(angka.toFixed(2))
              return {bobot : '0.00' ,skor : angka.toFixed(2), kehadiran : absensis.toFixed(2), tugas : tugass.toFixed(2), uts : utss.toFixed(2), uas : uass.toFixed(2), keterangan : 'MENGULANG', huruf:'E'  }
  
  } 
  
  })
  console.log(test)
  