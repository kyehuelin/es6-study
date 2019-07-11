import Papa from "papaparse"
import moment from "moment"
import {
  levelDivideBy,
  periods,
  nationalMonthlyNumbers,
  CURRENCY,
  channel,
  productMix,
  INTEGER
} from "./numbers"
import regionTableCSV from "./data/table/region.csv"
import storeTableCSV from "./data/table/store.csv"
import divisionTableCSV from "./data/table/division.csv"
import countryTableCSV from "./data/table/country.csv"

const { Parser } = require("json2csv")

// console.log(regionsTableCSV)
const database = {
  country: null,
  division: null,
  region: null,
  store: null
}

const file = {
  region: regionTableCSV,
  store: storeTableCSV,
  division: divisionTableCSV,
  country: countryTableCSV
}

const parsCSVHandler = rawFile => {
  return Papa.parse(rawFile, {
    header: true,
    dynamicTyping: true
  })
}

const sortCSVtoArray = rawCSV => {
  const obj = []
  rawCSV.data.forEach(el => {
    obj.push(el)
  })
  return obj
}

function loadData(rawFile) {
  return new Promise(resolve => {
    fetch(rawFile)
      .then(response => response.text())
      .then(res => {
        const array = sortCSVtoArray(parsCSVHandler(res), "period")
        resolve(array)
      })
  })
}

const dataToCsv = data => {
  const parser = new Parser({ delimiter: "," })
  return parser.parse(data)
}

const createAnchorHandler = ({ level, csvFile }) => {
  const fileName = `${level}.csv`
  // const csvData = JSON.stringify(csvFile)
  const blob = new Blob([csvFile], {
    type: "application/csv"
  })

  const link = document.createElement("a")
  const csvUrl = URL.createObjectURL(blob)
  link.innerText = `${level}`
  link.href = csvUrl
  link.download = fileName

  const div = document.createElement("div")
  div.setAttribute("id", "div")
  document.body.appendChild(div)
  div.appendChild(link)
  link.click()
}

const createRandomData = (numberObj, divideByLevel, areaDivide) => {
  const [min, max] = numberObj
  const gap = max - min
  const randomNumber = Math.random() * gap + min
  return divideByLevel ? randomNumber / areaDivide : randomNumber
}

const sanatiseNumber = (value, type) => {
  if (type === CURRENCY || type === INTEGER) {
    return Math.round(value)
  }

  return Number.parseFloat(value.toPrecision(3))
}

const divideByPeriodHandler = (factor, period, value) => {
  return period ? value / factor : value
}

const injectData = (databaseLevel, level) => {
  const areaDivide = levelDivideBy[level]

  return databaseLevel.map(rowObj => {
    const updatedRowObj = { ...rowObj }
    Object.keys(nationalMonthlyNumbers).forEach(numberKey => {
      const divisionFactor = periods[updatedRowObj.period].division
      const {
        range,
        divideByLevel,
        divideByPeriod,
        type
      } = nationalMonthlyNumbers[numberKey]
      let randValue = createRandomData(range, divideByLevel, areaDivide)
      randValue = divideByPeriodHandler(
        divisionFactor,
        divideByPeriod,
        randValue
      )
      randValue = sanatiseNumber(randValue, type)
      // console.log(periods[updatedRowObj.period].division)

      updatedRowObj[numberKey] = randValue
    })
    return updatedRowObj
  })
}

const injectChannel = (databaseLevel, level, channelData, channelType) => {
  const areaDivide = levelDivideBy[level]
  return databaseLevel.map(rowObj => {
    const updatedRowObj = { ...rowObj }
    const divisionFactor = periods[updatedRowObj.period].division
    Object.keys(channelData).forEach(key => {
      const channelIdentifier = `${key.charAt(0).toUpperCase()}${key.slice(1)}`
      const { range, divideByLevel, divideByPeriod, type } = channelData[key]
      let channelValue = createRandomData(range, divideByLevel, areaDivide)
      channelValue = divideByPeriodHandler(
        divisionFactor,
        divideByPeriod,
        channelValue
      )
      channelValue = sanatiseNumber(channelValue, type)
      const rowName = `channel${channelType}${channelIdentifier}`
      updatedRowObj[rowName] = channelValue
      Object.keys(productMix).forEach(productKey => {
        const min = channelValue * productMix[productKey].range[0]
        const max = channelValue * productMix[productKey].range[1]
        const { divideByLevel: divideByLevelProduct } = productMix[productKey]
        const productRowName = `${rowName}${productKey}`
        let productValue = createRandomData(
          [min, max],
          divideByLevelProduct,
          areaDivide
        )

        productValue = sanatiseNumber(productValue, productMix[productKey].type)
        updatedRowObj[productRowName] = productValue
      })
    })
    return updatedRowObj
  })
}

const injectTimeFrames = objRows => {
  const clonedRows = objRows.map(obj => ({ ...obj })) // clone object rows
  const finalRows = []
  const startDate = "2017-12-31"
  const format = "YYYY-MM-DD"
  const today = moment()

  Object.keys(periods).forEach(label => {
    const { period, step, endOf } = periods[label]
    const dateObj = moment(startDate, format)
    do {
      dateObj.add(step, period)
      if (dateObj.isBefore(today)) {
        dateObj.endOf(endOf)
        clonedRows.forEach(row => {
          const updatedRow = { ...row }
          updatedRow.date = dateObj.format(format)
          updatedRow.period = label
          finalRows.push(updatedRow)
        })
      }
    } while (dateObj.isBefore(today))
  })
  return finalRows
}

Object.keys(file).forEach(level => {
  ;(async function asyncCall() {
    database[level] = await loadData(file[level])
    database[level] = injectTimeFrames(database[level])
    database[level] = injectData(database[level], level)
    database[level] = injectChannel(
      database[level],
      level,
      channel.revenue,
      "Revenue"
    )
    database[level] = injectChannel(
      database[level],
      level,
      channel.revenue,
      "Volume"
    )
    const csvFile = dataToCsv(database[level])
    createAnchorHandler({ csvFile, level })
  })()
})
