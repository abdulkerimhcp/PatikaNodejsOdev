const fs = require('fs')

async function Crud() {

    // DOSYA YAZMA
    await fs.writeFile('employees.json', ' ', 'utf8', (err) => {
        if (err) throw err;
        console.log('Dosya Oluşturuldu.')
    })

    //VERİ EKLEME
    await fs.appendFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
        if (err) throw err;
        console.log('Employee eklenedi.')
    })

    
    await fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2250}', 'utf8', (err) => {
        if (err) throw err;
        console.log('Employee güncellendi.')
    })

    // DOSYA OKUMA
    await fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) console.log(err)
        console.log(data)
        console.log('Dosya Okundu.')
    })


    // await fs.unlink('employees.json',(err)=>{
    //     if (err) throw err;
    //     console.log('Dosya silindi.')
    // })

}

Crud()